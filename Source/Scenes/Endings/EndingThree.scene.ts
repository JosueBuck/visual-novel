// Ending Trigger: Player decides to not use the celestial orb in order to save his love but dooms humanity
namespace Template {
    export async function EndingThree(): ƒS.SceneReturn {
        console.log("EndingThree Scene starting");

        await ƒS.Location.show(locations.endingThree);
        await ƒS.update(transitions.pix2.duration, transitions.pix2.alpha, transitions.pix2.edge);

        await ƒS.Speech.tell("", `${dataForSave.playerName} and Aiko escaped the castle and returned to the village.`);
        await ƒS.Speech.tell("", `The humans fought bravely but were no match for King Akuma and his army.`);
        await ƒS.Speech.tell("", `The darkness consumed the land and the people of Yamato.`);
        await ƒS.Speech.hide();
        await ƒS.update(2);

        return Location.GameOver;
    }
}