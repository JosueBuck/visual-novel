// Ending Trigger: Player helped the light to get its spirit back, which enables it to use the celestial orb to save humanity and his love
namespace Template {
    export async function EndingFive(): ƒS.SceneReturn {
        console.log("EndingFive Scene starting");

        ƒS.Speech.hide();
        ƒS.Sound.fade(audio.ambience.village, 0.05, 2, true);

        await ƒS.Location.show(locations.village);
        await ƒS.update(transitions.pix1.duration, transitions.pix1.alpha, transitions.pix1.edge);

        await ƒS.Character.animate(characters.player, characters.player.pose.default, slideAnimation({
            _xStart: -50,
            _xEnd: 0,
            _yStart: 110,
            _yEnd: 110,
            _duration: 4
        }));

        await ƒS.Character.animate(characters.masterKazuki, characters.masterKazuki.pose.default, slideAnimation({
            _xStart: 130,
            _xEnd: 70,
            _yStart: 110,
            _yEnd: 110,
            _duration: 4
        }));

        await ƒS.Speech.tell(characters.masterKazuki, `${dataForSave.playerName}, you made it back.`);
        await ƒS.Speech.tell(characters.masterKazuki, "Where is Aiko? Did you find her?");

        await ƒS.Character.animate(characters.aiko, characters.aiko.pose.left, slideAnimation({
            _xStart: -30,
            _xEnd: 0,
            _yStart: 110,
            _yEnd: 110,
            _duration: 4
        }));

        await ƒS.Speech.tell(characters.aiko, "Yes, Master Kazuki. I am here. Hiroshi saved me.");
        await ƒS.Speech.tell(characters.masterKazuki, "Aiko, my dear. I am so glad you are safe.");
        await ƒS.Speech.tell(characters.masterKazuki, "Come, let us go. We have much to celebrate.");
        ƒS.Character.hideAll();
        await ƒS.update(2);
        await ƒS.Speech.tell("", "The darkness has been banished from the land and the people of Yamato are saved.");
        await ƒS.Speech.tell("", "The village was rebuilt and the people are living in peace once again.");
        await ƒS.Speech.tell("", "Hiroshi and Aiko were able to live happily ever after till the end of their days.");

        ƒS.Speech.hide();
        ƒS.Sound.fade(audio.ambience.village, 0, 4);

        return Location.GameOver;
    }
}