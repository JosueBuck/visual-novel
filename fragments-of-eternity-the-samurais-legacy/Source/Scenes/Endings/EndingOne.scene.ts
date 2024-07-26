// Ending Trigger: Player dies due to zero health
namespace Template {
    export async function EndingOne(): ƒS.SceneReturn {

        console.log("EndingOne Scene starting");
        handleMeterContainerVisibility({ _showMeterContainer: false });

        ƒS.Speech.hide();
        ƒS.Character.hideAll();

        await ƒS.Location.show(locations.endingOne);
        await ƒS.update(transitions.pix2.duration, transitions.pix2.alpha, transitions.pix2.edge);

        await ƒS.Character.show(characters.player, characters.player.pose.default, ƒS.positionPercent(20, 110));
        await ƒS.update(2);
        await ƒS.Speech.tell(characters.player, "I have failed...");
        await ƒS.Speech.tell(characters.player, "Forgive me, Aiko...");
        await ƒS.Speech.tell(characters.player, "I was not strong enough to protect you...");
        await ƒS.Speech.tell(characters.player, "Maybe our paths will cross again in another life...");
        await ƒS.Speech.tell("", `Due to zero health, ${dataForSave.playerName} was defeated...`);

        ƒS.Speech.hide();
        await ƒS.Character.hide(characters.player);
        await ƒS.update(2);

        return Location.GameOver;
    }
}