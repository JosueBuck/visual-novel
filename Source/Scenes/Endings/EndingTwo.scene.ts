namespace Template {
    export async function EndingTwo(): ƒS.SceneReturn {
        // player dies due to insufficient amount of mana when trying to use the celestial orb
        console.log("EndingTwo Scene starting");
        handleMeterContainerVisibility({ _showMeterContainer: false });

        ƒS.Speech.hide();
        ƒS.Character.hideAll();

        await ƒS.Location.show(locations.endingTwo);
        await ƒS.update(transitions.pix2.duration, transitions.pix2.alpha, transitions.pix2.edge);

        await ƒS.Character.show(characters.player, characters.player.pose.default, ƒS.positionPercent(20, 110));
        await ƒS.update(2);
        await ƒS.Speech.tell(characters.player, "I have failed...");
        await ƒS.Speech.tell(characters.player, "Forgive me, Aiko...");
        await ƒS.Speech.tell(characters.player, "I was so close to saving you...");
        await ƒS.Speech.tell("", `Due to insufficient mana, ${dataForSave.playerName} was unable to use the Celestial Orb...`);
        await ƒS.Speech.tell("", `The celestrial orb consumed ${dataForSave.playerName} and trapped him in an eternal void...`);

        ƒS.Speech.hide();
        await ƒS.Character.hide(characters.player);
        await ƒS.update(2);

        return Location.GameOver;
    }
}