namespace Template {
    export async function CursedCave(): ƒS.SceneReturn {
        console.log("CursedCave Scene starting");
        handleMeterContainerVisibility({ _showMeterContainer: true });

        ƒS.Speech.hide();
        ƒS.Sound.play(audio.ambience.cursedCave, 0.4, true);

        await ƒS.Location.show(locations.cursedCave);
        await ƒS.update(transitions.pix1.duration, transitions.pix1.alpha, transitions.pix1.edge);

        if (!dataForSave.visitedScenes.includes(Location.CursedCave)) {
            dataForSave.visitedScenes.push(Location.CursedCave);

            await ƒS.Character.animate(characters.player, characters.player.pose.default, slideAnimation({
                _xStart: -50,
                _xEnd: 0,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            await ƒS.Speech.tell(characters.player, "This place is cursed. I can feel it in my bones.");
            await ƒS.Speech.tell(characters.player, "I must be careful. The shadows could be hiding everywhere.");

            await ƒS.Character.animate(characters.shadowSkeleton, characters.shadowSkeleton.pose.default, slideAnimation({
                _xStart: 80,
                _xEnd: 80,
                _yStart: 200,
                _yEnd: 110,
                _duration: 5
            }));
            await ƒS.Speech.tell(characters.shadowSkeleton, "He who enters the Cursed Cave shall never leave alive!");
            await ƒS.Speech.tell(characters.shadowSkeleton, "Prepare to meet your doom!");

            let winner = await battleMode(
                {
                    _fighterOne: characters.player,
                    _fighterTwo: characters.shadowSkeleton,
                    _currentlyPlayingAudio: {
                        _url: audio.ambience.cursedCave,
                        _volume: 0.05,
                        _loop: true
                    },
                    _hideEnemy: true,
                    _reward: items.spiritEssence,
                    _enemyReusable: true
                }
            );

            if (winner.name !== characters.player.name) {
                ƒS.Sound.fade(audio.ambience.cursedCave, 0, 4);
                return Location.EndingOne;
            }
            await ƒS.Speech.tell(characters.player, "I have found the spirit essence. I should take it with me and bring it back to the Light at the Enchanted Lake.");
        } else {
            await ƒS.Character.animate(characters.player, characters.player.pose.default, slideAnimation({
                _xStart: -50,
                _xEnd: 0,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            await ƒS.Speech.tell(characters.player, "This place still makes me shiver. I dont think there is anything left for me here.");
        }

        ƒS.Speech.hide();

        let possibleLocations = {
            EnchantedLake: formatEnumValue(Location.EnchantedLake),
        }

        let nextLocationRequest = await ƒS.Menu.getInput(possibleLocations, "inputChoices");

        ƒS.Character.hideAll();
        ƒS.Sound.fade(audio.ambience.cursedCave, 0, 4);

        switch (nextLocationRequest) {
            case possibleLocations.EnchantedLake:
                return Location.EnchantedLake;
        }
    }
}