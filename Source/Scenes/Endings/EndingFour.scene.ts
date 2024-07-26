// Ending Trigger: Player decides to use the celestial orb in order to save humanity but sacrifices his love
namespace Template {
    export async function EndingFour(): ƒS.SceneReturn {
        console.log("EndingFour Scene starting");

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
        await ƒS.Speech.tell(characters.masterKazuki, "Whats wrong? You look troubled. Where is Aiko?");
        await ƒS.Speech.tell(characters.player, "Yes, Grandfather. I have returned. I found the Celestial Orb and I used it to save humanity.");
        await ƒS.Speech.tell(characters.player, "But in order to do so, I had to sacrifice Aiko. She is gone now.");
        await ƒS.Speech.tell(characters.masterKazuki, "... ");
        await ƒS.Speech.tell(characters.masterKazuki, "I am sorry, Hiroshi. I know how much you loved her.");
        await ƒS.Speech.tell(characters.masterKazuki, "But you did what you had to do. You saved humanity.");
        await ƒS.Speech.tell(characters.masterKazuki, "Im sure Aiko would have wanted you to do that.");
        await ƒS.Speech.tell(characters.player, "I hope so, Grandfather. I hope so.");
        await ƒS.Speech.tell(characters.masterKazuki, "You are a true samurai, Hiroshi. This is the way.");

        ƒS.Character.hideAll();
        await ƒS.update(2);

        await ƒS.Speech.tell("", "King Akuma was defeated and the darkness was banished from the land.");
        await ƒS.Speech.tell("", "The people of Yamato were saved and the village was rebuilt.");
        await ƒS.Speech.tell("", "But Hiroshi was never the same again.");
        await ƒS.Speech.tell("", "He wandered the land, a broken man, haunted by the memory of Aiko.");
        await ƒS.Speech.tell("", "Some say he still roams the forests and mountains, searching for peace.");

        ƒS.Speech.hide();
        ƒS.Sound.fade(audio.ambience.village, 0, 2);

        return Location.GameOver;
    }
}