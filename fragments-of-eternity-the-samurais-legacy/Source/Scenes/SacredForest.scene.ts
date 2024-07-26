namespace Template {
    export async function SacredForest(): ƒS.SceneReturn {
        console.log("SacredForest Scene starting");
        handleMeterContainerVisibility({ _showMeterContainer: true });
        
        ƒS.Speech.hide();
        ƒS.Sound.play(audio.ambience.sacredForest, 0.8, true);
        
        await ƒS.Location.show(locations.sacredForest);
        await ƒS.update(transitions.pix1.duration, transitions.pix1.alpha, transitions.pix1.edge);

        if (!dataForSave.visitedScenes.includes(Location.SacredForest)) {
            dataForSave.visitedScenes.push(Location.SacredForest);
        
            await ƒS.Character.animate(characters.player, characters.player.pose.default, slideAnimation({
                _xStart: -50,
                _xEnd: 0,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            await ƒS.Speech.tell(characters.player, "This is the sacred forest. I remember the stories my grandfather told me about this place.");
            await ƒS.Speech.tell(characters.player, "Its said that the forest is a place of great power. The spirits protect it from evil.");
            await ƒS.Character.animate(characters.yuna, characters.yuna.pose.default, slideAnimation({
                _xStart: 115,
                _xEnd: 80,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            await ƒS.Speech.tell(characters.yuna, "Greetings, traveler. I am Yuna, a mystical healer. I sense that you are on a quest.");
            await ƒS.Speech.tell(characters.player, "Yes, my village was attacked by the dark forces of King Akuma. They took my beloved wife Aiko. I must find her and bring her back.");
            await ƒS.Speech.tell(characters.yuna, "I am sorry to hear that. I will ask the spirits of the forest to guide you on your journey.");
            await ƒS.Speech.tell(characters.yuna, "But first, I need your help. I have lost my amulet, a powerful artifact.");
            await ƒS.Speech.tell(characters.yuna, "I need it to perform a ritual to protect the forest. Will you help me find it?");

            let questOptions = {
                accept: "Accept",
                decline: "Decline"
            }

            let questDecision = await ƒS.Menu.getInput(questOptions, "inputChoices");

            if (questDecision === questOptions.accept) {
                dataForSave.quests.yuna.questState = 'accepted';
                await ƒS.Speech.tell(characters.player, "I accept the quest.");
                await ƒS.Speech.tell(characters.yuna, "Thank you, traveler. The amulet is hidden in the Abandoned Temple. Please bring it back to me.");
                await ƒS.Speech.tell("", `Quest: ${quests.yuna.name} was added.`);
                await ƒS.Speech.tell(characters.yuna, "I will wait for you at the Enchanted Lake. May the spirits guide you.");
                await ƒS.Character.animate(characters.yuna, characters.yuna.pose.default, slideAnimation({
                    _xStart: 80,
                    _xEnd: 120,
                    _yStart: 110,
                    _yEnd: 110,
                    _duration: 5
                }));
                await ƒS.Speech.tell(characters.player, "Lets find the amulet and bring it back to Yuna.");
            } else {
                dataForSave.quests.yuna.questState = 'declined';
                await ƒS.Speech.tell(characters.player, "I am sorry, but I cannot help you.");
                await ƒS.Speech.tell(characters.yuna, "I understand. Regardless, I will still ask the spirits to guide you on your journey.");
                await ƒS.Speech.tell(characters.yuna, "May you find your beloved wife and bring her back safely.");
                await ƒS.Character.animate(characters.yuna, characters.yuna.pose.default, slideAnimation({
                    _xStart: 80,
                    _xEnd: 120,
                    _yStart: 110,
                    _yEnd: 110,
                    _duration: 5
                }));
                await ƒS.Speech.tell(characters.player, "I need to keep moving. I must find the ancient orb and save Aiko.");
            }
        } else {
            await ƒS.Character.animate(characters.player, characters.player.pose.default, slideAnimation({
                _xStart: -50,
                _xEnd: 0,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            await ƒS.Speech.tell(characters.player, "There is nothing I can do here. I should continue my journey.");
        }

        ƒS.Speech.hide();

        let locationOptions = {
            DestroyedVillage: formatEnumValue(Location.DestroyedVillage),
            EnchantedLake: formatEnumValue(Location.EnchantedLake),
            AbandonedTemple: formatEnumValue(Location.AbandonedTemple),
            mountainPass: formatEnumValue(Location.MountainPass),
        }

        let nextLocation = await ƒS.Menu.getInput(locationOptions, "inputChoices");

        ƒS.Character.hideAll();
        ƒS.Sound.fade(audio.ambience.sacredForest, 0, 4);

        switch (nextLocation) {
            case locationOptions.DestroyedVillage:
                return Location.DestroyedVillage;
            case locationOptions.EnchantedLake:
                return Location.EnchantedLake;
            case locationOptions.AbandonedTemple:
                return Location.AbandonedTemple;
            case locationOptions.mountainPass:
                return Location.MountainPass;
        }
    }
}