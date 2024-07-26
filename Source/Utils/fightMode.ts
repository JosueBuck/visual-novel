namespace Template {

  type BattleModeProps = {
    _fighterOne: Character;
    _fighterTwo: Character;
    _currentlyPlayingAudio: {
      _url: RequestInfo;
    _volume: number;
    _loop?: boolean;
    };
    _hideEnemy?: boolean;
    _reward?: ƒS.ItemDefinition;
    _enemyReusable?: boolean;
  }
  
    export async function battleMode({
      _fighterOne,
      _fighterTwo,
      _currentlyPlayingAudio: {
        _url,
        _volume,
        _loop = true
      },
      _hideEnemy = false,
      _reward,
      _enemyReusable = false
    }: BattleModeProps): Promise<Character> {
      ƒS.Speech.hide();
      ƒS.Sound.fade(_url, 0, 4);
      ƒS.Sound.fade(audio.music.battle, 0.1, 2, true);
      
      let ememyOriginalHealth = _fighterTwo.health;

      const enemyMeterContainer = document.getElementById("enemy-health") as HTMLMeterElement;
      if (!enemyMeterContainer) {
        console.error('Enemy meter container not found');
      }
      enemyMeterContainer.value = _fighterTwo.health;
      enemyMeterContainer.max = _fighterTwo.health;      

      const fightDialog = document.getElementById('fight-ui') as HTMLDialogElement;
      if (!fightDialog) {
        console.error('Fight dialog elements not found');
      }
  
      fightDialog.showModal();
      enemyMeterContainer.style.visibility = 'visible';

      while (dataForSave.health > 0 && _fighterTwo.health > 0) {
        console.log("inside the loop");
        
        // Fighter One Attack Phase
        let playerOneAttackValue = await displayFightUi({_isAttacking: true});
        let defenseFactorFighterTwo = _fighterTwo.defense || 0;
        let damageToFighterTwo = Math.max(1, playerOneAttackValue * (1 - defenseFactorFighterTwo));
        _fighterTwo.health -= damageToFighterTwo;
        console.log(`${_fighterOne.name} attacks ${_fighterTwo.name} for ${playerOneAttackValue} damage. ${_fighterTwo.name} health: ${_fighterTwo.health}`);
        console.log(_fighterTwo.health);
        
        enemyMeterContainer.value = _fighterTwo.health;
        await ƒS.update(1);
        if (_fighterTwo.health <= 0) break;
  
        // Fighter Two Attack Phase
        let playerTwoAttackValue = await Template.displayFightUi({_isAttacking: false});
        let defenseFactorFighterOne = _fighterOne.defense || 0;  
        let damageToFighterOne = Math.max(1, playerTwoAttackValue * (1 - defenseFactorFighterOne));
        dataForSave.health -= damageToFighterOne;
        console.log(`${_fighterTwo.name} attacks ${_fighterOne.name} for ${playerTwoAttackValue} damage. ${_fighterOne.name} health: ${dataForSave.health}`);
        await ƒS.update(1);
      }
  
      let winner = dataForSave.health > 0 ? _fighterOne : _fighterTwo;
      fightDialog.close();
      enemyMeterContainer.style.visibility = 'hidden';
      await ƒS.Speech.tell("",`The winner is ${winner.name}`);
      if (_reward && winner.name === _fighterOne.name) {
        ƒS.Inventory.add(_reward);
        await ƒS.Speech.tell("", `${_reward.name} was added to your inventory`);
      }
      ƒS.Sound.fade(audio.music.battle, 0, 4);
      if (_enemyReusable) {
        console.log(ememyOriginalHealth);
        
        _fighterTwo.health = ememyOriginalHealth;
      }
      if (_hideEnemy) {
        ƒS.Character.hide(_fighterTwo);
      }
      if (winner.name === _fighterOne.name) {
        ƒS.Sound.fade(_url, _volume, 2, _loop);
      }
      await ƒS.update(1);
      return winner;
    }
}