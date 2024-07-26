namespace Template {
    export async function EnemyCamp(): ƒS.SceneReturn {
        console.log("EnemyCamp Scene starting");

        handleMeterContainerVisibility({ _showMeterContainer: true });
        
        ƒS.Speech.hide();
        ƒS.Sound.play(audio.ambience.enemyCamp, 0.2, true);
        
        await ƒS.Location.show(locations.enemyCamp);
        await ƒS.update(transitions.pix1.duration, transitions.pix1.alpha, transitions.pix1.edge);

        await ƒS.Character.animate(characters.player, characters.player.pose.default, slideAnimation({
            _xStart: -50,
            _xEnd: 0,
            _yStart: 110,
            _yEnd: 110,
            _duration: 5
        }));

        if (!dataForSave.visitedScenes.includes(Location.EnemyCamp)) {
            dataForSave.visitedScenes.push(Location.EnemyCamp);

            await ƒS.Speech.tell(characters.player, "So, I have finally made it to the enemy camp.");
            await ƒS.Speech.tell(characters.player, "I must be careful. The enemies could be hiding everywhere.");

            await ƒS.Speech.tell("...", "Hey, hey you!");
            await ƒS.Speech.tell(characters.player, "Huh? Where is that voice coming from?");
            await ƒS.Speech.tell("...", "Here, the cage to your right.");
    
            await ƒS.Character.show(characters.merchant, characters.merchant.pose.default, ƒS.positionPercent(70, 110));
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.merchant, "I need your help. We where on our way to the Merchants Outpost, but we where ambushed by the dark forces.");
            await ƒS.Speech.tell(characters.merchant, "They have already killed all of my friends.");
            await ƒS.Speech.tell(characters.merchant, "I am the only one left and there is not much time left for me.");
            await ƒS.Speech.tell(characters.merchant, "Please help me. I need to get to the Merchants Outpost.");

            let possibleOptions = {
                help: "Help the merchant",
                leave: "Leave"
            }
    
            let nextLocationRequest = await ƒS.Menu.getInput(possibleOptions, "inputChoices");

            switch (nextLocationRequest) {
                case possibleOptions.help:
                    await ƒS.Speech.tell(characters.player, "Dont worry, I will help you.");
                    dataForSave.quests.merchant.questState = "accepted";
                    await ƒS.Speech.tell("", `Quest: ${quests.merchant.name} was added.`);
                    await ƒS.Speech.tell(characters.merchant, "Oh lord, thank you so much. I am forever in your debt.");
                    await ƒS.Speech.tell(characters.merchant, "You should find a key in the camp. One of the enemies must have it.");
                    await ƒS.Speech.tell(characters.merchant, "Please find it and free me.");
                    await ƒS.Speech.tell(characters.player, "I will find the key and free you.");
                    await ƒS.Character.hide(characters.merchant);
                    await ƒS.update(1);
                    await ƒS.Speech.tell(characters.player, "I should find the key to free the merchant.");

                    await ƒS.Character.animate(characters.shadowSkeleton, characters.shadowSkeleton.pose.default, slideAnimation({
                        _xStart: 80,
                        _xEnd: 80,
                        _yStart: 200,
                        _yEnd: 110,
                        _duration: 5
                    }));
                    await ƒS.Speech.tell(characters.shadowSkeleton, "Ah, another foolish samurai. You will never leave this place alive!");
                    await ƒS.Speech.tell(characters.shadowSkeleton, "You will die by my hand!");

                    let winner = await battleMode(
                        {
                            _fighterOne: characters.player,
                            _fighterTwo: characters.shadowSkeleton,
                            _currentlyPlayingAudio: {
                                _url: audio.ambience.enemyCamp,
                                _volume: 0.2,
                                _loop: true
                            },
                            _hideEnemy: true,
                            _reward: items.key,
                            _enemyReusable: true
                        }
                    );

                    if (winner.name !== characters.player.name) {
                        ƒS.Sound.fade(audio.ambience.abandonedTemple, 0, 4);
                        return Location.EndingOne;
                    }
                    await ƒS.Speech.tell(characters.player, "I have found the key. I should free the merchant now.");
                    await ƒS.Character.show(characters.merchant, characters.merchant.pose.default, ƒS.positionPercent(70, 110));
                    await ƒS.update(1);
                    await ƒS.Speech.tell(characters.player, "I have found the key. Lets get you out of here.");
                    await ƒS.Speech.tell(characters.merchant, "Thank you so much. You saved my live.");
                    await ƒS.Speech.tell(characters.merchant, "Follow me. I will guide you to the Merchants Outpost.");
                    dataForSave.quests.merchant.questState = "completed";
                    ƒS.Character.hideAll();
                    ƒS.Sound.fade(audio.ambience.enemyCamp, 0, 4);
                    return Location.MerchantsOutpost;
                    
                case possibleOptions.leave:
                    dataForSave.quests.merchant.questState = "declined";
                    await ƒS.Speech.tell(characters.player, "I am sorry, but I cannot help you.");
                    await ƒS.Speech.tell(characters.player, "I cannot risk my life for a stranger.");
                    await ƒS.Speech.tell(characters.player, "But I will pray for you and your friends.");
                    await ƒS.Speech.tell(characters.merchant, "So be it. I will wait for my end.");
                    ƒS.Character.hide(characters.merchant);
                    await ƒS.update(2);
                    break;
                    }
        } 

        await ƒS.Speech.tell(characters.player, "This place is dangerous. I should leave as soon as possible.");

        ƒS.Speech.hide();

        let possibleLocations: { [key: string]: string } = {
            mountainPass: formatEnumValue(Location.MountainPass),
        }

        // This is a placeholder for the actual implementation
        if (dataForSave.quests.merchant.questState === 'completed') {
            possibleLocations[`merchantsOutpost`] = formatEnumValue(Location.MerchantsOutpost);
        }

        let nextLocationRequest = await ƒS.Menu.getInput(possibleLocations, "inputChoices");

        ƒS.Character.hideAll();
        ƒS.Sound.fade(audio.ambience.enemyCamp, 0, 4);

        switch (nextLocationRequest) {
            case possibleLocations.mountainPass:
                return Location.MountainPass;
            case possibleLocations.merchantsOutpost:
                return Location.MerchantsOutpost;
        }
    }
}