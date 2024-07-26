namespace Template {

      // Function to display meter and button for attack/defense
  export async function displayFightUi({_isAttacking}:{_isAttacking: boolean}): Promise<number> {
    let meterValue = 0;
    let increasing = true;
    let meter = document.getElementById("fight-value-display") as HTMLMeterElement;
    let button = document.getElementById("fight-action-button") as HTMLButtonElement;

    if (_isAttacking) {
      button.innerText = "Attack";
      button.disabled = false;
    } else {
      button.innerText = "Enemy Attack";
      button.disabled = true;
    }
    

    let meterInterval = setInterval(() => {
      if (increasing) {
        meterValue += 2;
        if (meterValue >= 100) increasing = false;
      } else {
        meterValue -= 2;
        if (meterValue <= 0) increasing = true;
      }
      meter.value = meterValue;
    }, 5);

    return new Promise((resolve) => {
      if (_isAttacking) {
        button.addEventListener("click", () => {        
          clearInterval(meterInterval);
          resolve(meterValue);
        });
      } else {
        setTimeout(() => {
          clearInterval(meterInterval);
          resolve(meterValue);
        }, Math.random() * 5000); // Randomly trigger within 5 seconds
      }
    });
  }

}