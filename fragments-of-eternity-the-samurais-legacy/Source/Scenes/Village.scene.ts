namespace Template {
    export async function Village(): ƒS.SceneReturn {
        console.log("Village Scene starting");
        console.log(dataForSave)

        handleMeterContainerVisibility({ _showMeterContainer: false })

        await ƒS.Speech.tell("", "Before you begin with your adventures, would you like to use a custom name for the hero (Hiroshi) of this story?");
        let namingOptions = {
            yes: "Yes",
            no: "No"
        }

        let namingDecision = await ƒS.Menu.getInput(namingOptions, "inputChoices");

        if (namingDecision === namingOptions.yes) {
            await ƒS.Speech.tell("", "Please enter your desired name.");
            dataForSave.playerName = await ƒS.Speech.getInput();
            characters.player.name = dataForSave.playerName;
        }

        dataForSave.visitedScenes.push(Location.Village);

        ƒS.Speech.hide();
        ƒS.Sound.fade(audio.ambience.village, 0.05, 2, true);

        await ƒS.Location.show(locations.village);
        await ƒS.update(transitions.pix1.duration, transitions.pix1.alpha, transitions.pix1.edge);
        
        await ƒS.Character.animate(characters.player, characters.player.pose.default, slideAnimation({
            _xStart: -50,
            _xEnd: 10,
            _yStart: 110,
            _yEnd: 110,
            _duration: 5
        }));
        await ƒS.Speech.tell(characters.player, "Aiko, it is such a beautiful day, isnt it?");
        await ƒS.Character.animate(characters.aiko, characters.aiko.pose.default, slideAnimation({
            _xStart: 110,
            _xEnd: 60,
            _yStart: 110,
            _yEnd: 110,
            _duration: 5
        }));
        await ƒS.Speech.tell(characters.aiko, `Oh yes ${characters.player.name}, it is a beautiful day. I am so happy to be here with you.`);
        await ƒS.Speech.tell(characters.aiko, "I love spending time with you. The village is so peaceful and quiet.");
        await ƒS.Speech.tell(characters.player, "I wish every day could be like this. Just you and me, together.");
        await ƒS.Speech.tell(characters.aiko, `Oh, me too. I love you so much ${characters.player.name}.`);
        await ƒS.Speech.tell(characters.aiko, "But I know it wont be long before you have to leave again. You always long for more adventures.");
        await ƒS.Speech.tell(characters.player, "Oh my love. You know me too well. But as a samurai it is my duty to protect you and the village. And I will do whatever it takes to do so. That is all that matters to me.");
        await ƒS.Character.animate(characters.masterKazuki, characters.masterKazuki.pose.left, slideAnimation({
            _xStart: -50,
            _xEnd: 10,
            _yStart: 110,
            _yEnd: 110,
            _duration: 3
        }));
        await ƒS.Speech.tell(characters.masterKazuki, `${dataForSave.playerName}, Aiko. I have been looking for you. I have urgent news.`);
        await ƒS.Speech.tell(characters.player, "Grandfather, what is it. You look very concerned.");
        await ƒS.Speech.tell(characters.aiko, "Is everthing alright, Master Kazuki?");
        await ƒS.Speech.tell(characters.masterKazuki, "We are in great danger. The village is under attack. King Akumas forces are attacking.  We must prepare for battle.");
        await ƒS.Speech.tell(characters.player, "What? But how is that possible? How where they able to get past the guards?");
        await ƒS.Speech.tell(characters.masterKazuki, "A question I can not answers yet.");
        await ƒS.Speech.tell(characters.masterKazuki, "But we must act fast. We must protect the village. We must protect the people.");

        await ƒS.Character.animate(characters.shadowSkeleton, characters.shadowSkeleton.pose.default, slideAnimation({
            _xStart: 80,
            _xEnd: 80,
            _yStart: 200,
            _yEnd: 110,
            _duration: 5
        }));
        await ƒS.Speech.tell(characters.shadowSkeleton, "We have come to destroy you all. You will not be able to stop us.");
        await ƒS.Speech.tell(characters.player, "Aiko, watch out.");
        await ƒS.Speech.tell(characters.player, "I will handle this. You and Master Kazuki must warn the others.");
        await ƒS.Speech.tell(characters.aiko, "We will. Be careful my love.");
    
        await ƒS.Character.hide(characters.aiko);
        await ƒS.Character.hide(characters.masterKazuki);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.shadowSkeleton, "I will crush you like a bug. Prepare to die.");
        await ƒS.Character.animate(characters.player, characters.player.pose.default, slideAnimation({
            _xStart: 10,
            _xEnd: 0,
            _yStart: 110,
            _yEnd: 110,
            _duration: 2
        }));
        await ƒS.Speech.tell(characters.player, "I will not let you harm the village. I will protect it with my life.").then(() => ƒS.Text.print("<h2>Battle Mode</h2><p>You will enter the battle mode.</br> Press the Button to Attack. </br> The meter value will be used to determine the damage dealt or received. </br> Keep an eye on your health meter. If it reaches zero, you will lose the battle.</p>"));
        ƒS.Speech.hide();
        handleMeterContainerVisibility({ _showMeterContainer: true });
        ;
        let winner = await battleMode(
            {
                _fighterOne: characters.player,
                _fighterTwo: characters.shadowSkeleton,
                _currentlyPlayingAudio: {
                    _url: audio.ambience.village,
                    _volume: 0.05,
                    _loop: true
                },
                _hideEnemy: true,
                _reward: items.gold,
                _enemyReusable: true
            }
        );

        if (winner.name !== characters.player.name) {
            ƒS.Sound.fade(audio.ambience.village, 0, 4);
            return Location.EndingOne;
        }

        await ƒS.Speech.tell(characters.player, "I must hurry. I must find Aiko and Master Kazuki.");

        ƒS.Speech.hide();
        ƒS.Character.hideAll();
        ƒS.Sound.fade(audio.ambience.village, 0, 4);
        return Location.DestroyedVillage;
    }
}