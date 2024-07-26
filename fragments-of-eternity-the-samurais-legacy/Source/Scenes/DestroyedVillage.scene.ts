namespace Template {
    export async function DestroyedVillage(): ƒS.SceneReturn {
        console.log("Village Destroyed Scene starting");
        console.log(dataForSave);

        handleMeterContainerVisibility({ _showMeterContainer: true })

        ƒS.Speech.hide();
        ƒS.Sound.play(audio.ambience.destroyedVillage, 0.1, true);

        await ƒS.Location.show(locations.destroyedVillage);
        await ƒS.update(transitions.pix1.duration, transitions.pix1.alpha, transitions.pix1.edge);

        if (!dataForSave.visitedScenes.includes(Location.DestroyedVillage)) {
            dataForSave.visitedScenes.push(Location.DestroyedVillage);

            await ƒS.Character.animate(characters.player, characters.player.pose.default, slideAnimation({
                _xStart: -50,
                _xEnd: 0,
                _yStart: 110,
                _yEnd: 110,
                _duration: 2
            }));
            await ƒS.Speech.tell(characters.player, "Aiko, Grandfather, where are you?");
            await ƒS.Character.animate(characters.masterKazuki, characters.masterKazuki.pose.default, slideAnimation({
                _xStart: 130,
                _xEnd: 70,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            await ƒS.Speech.tell(characters.player, "Grandfather, are you alright?");
            await ƒS.Speech.tell(characters.player, "Where is Aiko? Is she safe?");
            await ƒS.Speech.tell(characters.masterKazuki, `I am sorry, ${dataForSave.playerName}. Aiko is gone. She was taken by the dark forces.`);
            await ƒS.Speech.tell(characters.masterKazuki, "We fought bravely, but we were outnumbered. I was able to escape, but Aiko was captured.");
            await ƒS.Speech.tell(characters.masterKazuki, `I am sorry, ${dataForSave.playerName}. I have failed you.`);
            await ƒS.Speech.tell(characters.player, "No, Grandfather. You did everything you could. I will find Aiko and bring her back.");
            await ƒS.Speech.tell(characters.masterKazuki, `Be careful, ${dataForSave.playerName}. The dark forces are strong. You must be prepared for anything.`);
            await ƒS.Speech.tell(characters.masterKazuki, "You must find the ancient orb. Only with its power can you defeat King Akuma and the darkness.");
            await ƒS.Speech.tell(characters.player, "I will find the orb, defeat King Akuma and save Aiko. I promise.");
            await ƒS.Speech.tell(characters.masterKazuki, "The stories say that the orb is hidden somewhere in Yamato. Your journey will be long and dangerous.");
            await ƒS.Speech.tell(characters.masterKazuki, "Head to the sacred forest to begin your journey.");
            await ƒS.Speech.tell(characters.masterKazuki, `Go now, ${dataForSave.playerName}. Find the orb and save Aiko.`);
            await ƒS.Speech.tell(characters.player, "I will not fail you, Grandfather. I will save Aiko and bring her back.");

        } else if (dataForSave.quests.mountainPass.questState === 'accepted' && !dataForSave.quests.mountainPass.hasInteractedWithRequiredCharacter) {

            await ƒS.Character.animate(characters.player, characters.player.pose.default, slideAnimation({
                _xStart: -50,
                _xEnd: 0,
                _yStart: 110,
                _yEnd: 110,
                _duration: 4
            }));
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.player, "Hm, I need to find a way to clear the blocked path on the mountain pass.");
            await ƒS.Character.animate(characters.masterKazuki, characters.masterKazuki.pose.default, slideAnimation({
                _xStart: 130,
                _xEnd: 65,
                _yStart: 110,
                _yEnd: 110,
                _duration: 4
            }));
            await ƒS.update(1);

            await ƒS.Speech.tell(characters.masterKazuki, `${dataForSave.playerName}, you are back. I hope your journey is going well and Aiko will be saved soon.`);
            await ƒS.Speech.tell(characters.player, "I am trying my best, Grandfather. But I am stuck here. I need to find a way to clear the blocked path on the mountain pass.");
            await ƒS.Speech.tell(characters.masterKazuki, "I see. You need help with that. Takeshi survived the attack and is here in the village. He is a strong warrior and knows the mountain pass well.");
            await ƒS.Speech.tell(characters.masterKazuki, "He might be able to help you.");

            await ƒS.Character.show(characters.takeshi, characters.takeshi.pose.default, ƒS.positionPercent(80, 110));
            await ƒS.Character.animate(characters.takeshi, characters.takeshi.pose.default, slideAnimation({
                _xStart: 130,
                _xEnd: 85,
                _yStart: 110,
                _yEnd: 110,
                _duration: 4
            }));
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.takeshi, `I am here to help you, ${dataForSave.playerName}. I know the mountain pass well. Togheter we can find a way to clear the path.`);
            dataForSave.quests.mountainPass.hasInteractedWithRequiredCharacter = true;
            await ƒS.Speech.tell(characters.takeshi, "Meet me at the mountain pass.");
            await ƒS.Character.animate(characters.takeshi, characters.takeshi.pose.default, slideAnimation({
                _xStart: 85,
                _xEnd: 130,
                _yStart: 110,
                _yEnd: 110,
                _duration: 4
            }));
            await ƒS.update(1);
        } else {
            await ƒS.Character.animate(characters.player, characters.player.pose.default, slideAnimation({
                _xStart: -50,
                _xEnd: 0,
                _yStart: 110,
                _yEnd: 110,
                _duration: 4
            }));
            await ƒS.update();
            await ƒS.Speech.tell(characters.player, "There is nothing I can do here. I should continue my journey.");
        }

        ƒS.Speech.hide();

        let possibleLocations = {
            SacredForest: formatEnumValue(Location.SacredForest),
        }

        let nextLocationRequest = await ƒS.Menu.getInput(possibleLocations, "inputChoices");

        ƒS.Sound.fade(audio.ambience.destroyedVillage, 0, 4);

        switch (nextLocationRequest) {
            case possibleLocations.SacredForest:
                ƒS.Character.hideAll();
                return Location.SacredForest;
        }
    }
}