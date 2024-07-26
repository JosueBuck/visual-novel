namespace Template {
  export async function Scene(): ƒS.SceneReturn {
    console.log(dataForSave)
    await ƒS.update();

    await ƒS.update();
    console.log("FudgeStory Template Scene starting");

    await ƒS.Speech.tell("test character", "Where am I?");
  }
}