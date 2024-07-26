namespace Template {
    export async function HiddenShrine(): ƒS.SceneReturn {
        console.log("HiddenShrine Scene starting");

        handleMeterContainerVisibility({ _showMeterContainer: true });
        
        ƒS.Speech.hide();
        ƒS.Sound.play(audio.ambience.hiddenShrine, 0.1, true);
        
        await ƒS.Location.show(locations.hiddenShrine);
        await ƒS.update(transitions.pix1.duration, transitions.pix1.alpha, transitions.pix1.edge);
        
        await ƒS.Character.animate(characters.player, characters.player.pose.default, slideAnimation({
            _xStart: -50,
            _xEnd: 0,
            _yStart: 110,
            _yEnd: 110,
            _duration: 5
        }));
        if (!dataForSave.visitedScenes.includes(Location.HiddenShrine)) {
            dataForSave.visitedScenes.push(Location.HiddenShrine);
            await ƒS.Speech.tell(characters.player, "So this must be the hidden shrine. I should be careful.");
            await ƒS.Speech.tell(characters.player, "All the stories I have heard about this place. I must be prepared for anything.");
            await ƒS.Character.show(characters.guardianSpirit, characters.guardianSpirit.pose.default, ƒS.positionPercent(80, 110));
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.guardianSpirit, "Welcome, traveler. You have found the hidden shrine.");
            await ƒS.Speech.tell(characters.player, "Who are you?");
            await ƒS.Speech.tell(characters.guardianSpirit, "I am the guardian spirit of this shrine. I have been waiting for you.");
            await ƒS.Speech.tell(characters.player, "Why me?");
            await ƒS.Speech.tell(characters.guardianSpirit, "You have been chosen to carry the light and restore balance to this land.");
            await ƒS.Speech.tell(characters.player, "What do you mean?");
            await ƒS.Speech.tell(characters.guardianSpirit, "The darkness has taken over the land. You must find the orb and bring peace and light back to the world.");
            await ƒS.Speech.tell(characters.player, "Where can I find the orb?");
            await ƒS.Speech.tell(characters.guardianSpirit, "The orb is hidden in this shrine. I will guide you to it.");
            await ƒS.Speech.tell(characters.guardianSpirit, "But first you must prove yourself worthy.");  
            dataForSave.quests.guardianSpirit.questState = "accepted";
            await ƒS.Speech.tell("", `Quest: ${quests.guardianSpirit.name} was added.`);
        }    

        if (ƒS.Inventory.getAmount(items.celestialOrb) === 0) {
            await ƒS.Character.show(characters.guardianSpirit, characters.guardianSpirit.pose.default, ƒS.positionPercent(80, 110));
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.guardianSpirit, "Tell me, are you ready to prove your strength?");  

            let guardianSpiritOptions = {
                ready: "I am ready.",
                notReady: "I am not ready.",
            }

            let guardianSpiritDecision = await ƒS.Menu.getInput(guardianSpiritOptions, "inputChoices");

            switch (guardianSpiritDecision) {
                case guardianSpiritOptions.ready:
                    await ƒS.Speech.tell(characters.player, "I am ready.");
                    await ƒS.Speech.tell(characters.player, "May the light guide me.");
                    await ƒS.Speech.tell(characters.guardianSpirit, "Good. Let us begin.");
                    let winner = await battleMode(
                        {
                            _fighterOne: characters.player,
                            _fighterTwo: characters.guardianSpirit,
                            _currentlyPlayingAudio: {
                                _url: audio.ambience.hiddenShrine,
                                _volume: 0.1,
                                _loop: true
                            },
                            _hideEnemy: false,
                            _reward: items.celestialOrb
                        }
                    );
        
                    if (winner.name !== characters.player.name) {
                        ƒS.Sound.fade(audio.ambience.hiddenShrine, 0, 4);
                        return Location.EndingOne;
                    }
                    dataForSave.quests.guardianSpirit.questState = "completed";
                    await ƒS.Speech.tell(characters.guardianSpirit, "You have proven yourself worthy.");
                    await ƒS.Speech.tell(characters.guardianSpirit, "The orb is yours. Take it and bring light back to this land.");
                    await ƒS.Speech.tell(characters.guardianSpirit, "My time here is done. I will return to the spirit realm.");
                    await ƒS.Speech.tell(characters.guardianSpirit, "Now go, and fulfill your destiny.");
                    await ƒS.Speech.tell(characters.player, "I will not fail.");
                    break;
                case guardianSpiritOptions.notReady:
                    await ƒS.Speech.tell(characters.player, "I am not ready.");
                    await ƒS.Speech.tell(characters.guardianSpirit, "Very well. Return when you are ready.");
                    break;
            }       
        } else {
            await ƒS.Speech.tell(characters.player, "I have already found the orb. I should continue my journey.");
        }

        ƒS.Speech.hide();

        let possibleLocations = {
            mountainPass: formatEnumValue(Location.MountainPass),
        }

        let nextLocationRequest = await ƒS.Menu.getInput(possibleLocations, "inputChoices");

        ƒS.Character.hideAll();
        ƒS.Sound.fade(audio.ambience.hiddenShrine, 0, 4);

        switch (nextLocationRequest) {
            case possibleLocations.mountainPass:
                return Location.MountainPass;
        }
    }
}