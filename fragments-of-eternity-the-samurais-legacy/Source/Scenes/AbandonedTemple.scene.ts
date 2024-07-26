namespace Template {
    export async function AbandonedTemple(): ƒS.SceneReturn {
        console.log("AbandonedTemple Scene starting");

        handleMeterContainerVisibility({ _showMeterContainer: true });
        
        ƒS.Speech.hide();
        ƒS.Sound.play(audio.ambience.abandonedTemple, 0.2, true);

        await ƒS.Location.show(locations.abandonedTemple);
        await ƒS.update(transitions.pix1.duration, transitions.pix1.alpha, transitions.pix1.edge);

        if (!dataForSave.visitedScenes.includes(Location.AbandonedTemple)) {
            dataForSave.visitedScenes.push(Location.AbandonedTemple);

            await ƒS.Character.animate(characters.player, characters.player.pose.default, slideAnimation({
                _xStart: -50,
                _xEnd: 0,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            await ƒS.Speech.tell(characters.player, "So, this is the Abandoned Temple. ");
            await ƒS.Speech.tell(characters.player, "It used to be a place of worship, but since the forces of King Akuma have slowly taken over the land, it has been abandoned.");
            if (dataForSave.quests.yuna.questState === 'accepted') {
                await ƒS.Speech.tell(characters.player, "Somewhere in this temple, I will find the amulet that Yuna has lost. I must find it and bring it back to her.");
            }
            
            await ƒS.Character.animate(characters.shadowSkeleton, characters.shadowSkeleton.pose.default, slideAnimation({
                _xStart: 80,
                _xEnd: 80,
                _yStart: 200,
                _yEnd: 110,
                _duration: 5
            }));
            await ƒS.Speech.tell(characters.shadowSkeleton, "Who dares to enter the Abandoned Temple?");
            await ƒS.Speech.tell(characters.shadowSkeleton, "You will not leave this place alive!");

            let reward = dataForSave.quests.yuna.questState === 'accepted' ? items.yunasAmulet : items.gold;
            let winner = await battleMode(
                {
                    _fighterOne: characters.player,
                    _fighterTwo: characters.shadowSkeleton,
                    _currentlyPlayingAudio: {
                        _url: audio.ambience.abandonedTemple,
                        _volume: 0.2,
                        _loop: true
                    },
                    _hideEnemy: true,
                    _reward: reward,
                    _enemyReusable: true
                }
            );

            if (winner.name !== characters.player.name) {
                ƒS.Sound.fade(audio.ambience.abandonedTemple, 0, 4);
                return Location.EndingOne;
            }

            if (dataForSave.quests.yuna.questState === 'accepted') {
                await ƒS.Speech.tell(characters.player, "I found the amulet. Now I can bring it back to Yuna.");
            } else {
                await ƒS.Speech.tell(characters.player, "Another enemy defeated. I must continue my journey.");
            }

            await ƒS.Character.animate(characters.hikari, characters.hikari.pose.default, slideAnimation({
                _xStart: 120,
                _xEnd: 80,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));

            await ƒS.Speech.tell(characters.hikari, `Well done, ${dataForSave.playerName}. You have proven yourself to be a true warrior.`);
            await ƒS.Speech.tell(characters.player, "Who are you? How do you know my name?");
            await ƒS.Speech.tell(characters.hikari, `I am Hikari, a blind seer. I have been watching you, ${dataForSave.playerName}. You are destined for greatness.`);
            await ƒS.Speech.tell(characters.hikari, "But be warned. The path ahead is dangerous. The darkness is growing stronger.");
            await ƒS.Speech.tell(characters.hikari, "I can not help you, but gift you with my words of wisdom. May they guide you on your journey.");
            await ƒS.Speech.tell(characters.hikari, "Come back everytime you think my words may help you.");
            await ƒS.Speech.tell(characters.player, "Thank you, Hikari. I will keep that in mind.");
            await ƒS.Speech.tell(characters.player, "I must leave now. May your words guide me on my journey.");

        } else {
            await ƒS.Character.animate(characters.player, characters.player.pose.default, slideAnimation({
                _xStart: -50,
                _xEnd: 0,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            
            await ƒS.Character.animate(characters.hikari, characters.hikari.pose.default, slideAnimation({
                _xStart: 120,
                _xEnd: 80,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            await ƒS.Speech.tell(characters.hikari, getRandomMysteriousSaying());
            await ƒS.Speech.tell(characters.player, "Thank you, Hikari.");
            await ƒS.Speech.tell(characters.player, "I must leave now. May your words guide me on my journey.");
        }

        ƒS.Speech.hide();

        let possibleLocations = {
            SacredForest: formatEnumValue(Location.SacredForest),
        }

        let nextLocationRequest = await ƒS.Menu.getInput(possibleLocations, "inputChoices");
        
        ƒS.Character.hideAll();
        ƒS.Sound.fade(audio.ambience.abandonedTemple, 0, 4);

        switch (nextLocationRequest) {
            case possibleLocations.SacredForest:
                return Location.SacredForest;
        }
    }
}