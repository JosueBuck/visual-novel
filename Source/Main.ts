namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  window.addEventListener("load", start);
  function start(_event: Event): void {
    
    gameMenu = ƒS.Menu.create(gameMenuButtons, gameMenuButtonFunctionalities, "gameMenu");
    
    let scenes: ƒS.Scenes = [
      
      // Game Scenes
      { scene: Village, name: "Village", id: Location.Village },
      { scene: DestroyedVillage, name: "DestroyedVillage", id: Location.DestroyedVillage },
      { scene: SacredForest, name: "SacredForest", id: Location.SacredForest },
      { scene: AbandonedTemple, name: "AbandonedTemple", id: Location.AbandonedTemple },
      { scene: EnchantedLake, name: "EnchantedLake", id: Location.EnchantedLake },
      { scene: CursedCave, name: "CursedCave", id: Location.CursedCave },
      { scene: MountainPass, name: "MountainPass", id: Location.MountainPass },
      { scene: EnemyCamp, name: "EnemyCamp", id: Location.EnemyCamp },
      { scene: MerchantsOutpost, name: "MerchantsOutpost", id: Location.MerchantsOutpost },
      { scene: HiddenShrine, name: "HiddenShrine", id: Location.HiddenShrine },
      { scene: DarkFortress, name: "DarkFortress", id: Location.DarkFortress },
      
      //Game Endings
      { scene: EndingOne, name: "EndingOne", id:Location.EndingOne },
      { scene: EndingTwo, name: "EndingTwo", id: Location.EndingTwo },
      { scene: EndingThree, name: "EndingThree", id: Location.EndingThree },
      { scene: EndingFour, name: "EndingFour", id: Location.EndingFour },
      { scene: EndingFive, name: "EndingFive", id: Location.EndingFive },
      { scene: GameOver, name: "GameOver", id: Location.GameOver },
    ];
    
    console.log("Start");
    let uiElement: HTMLElement = document.querySelector("[type=player-meter-container]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
    handleCloseMenu()
    // start the sequence
    ƒS.Progress.go(scenes);
  }
}