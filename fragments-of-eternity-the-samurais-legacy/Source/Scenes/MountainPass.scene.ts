namespace Template {
    export async function MountainPass(): ƒS.SceneReturn {
        console.log("MountainPass Scene starting");
        handleMeterContainerVisibility({ _showMeterContainer: true });
        
        ƒS.Speech.hide();
        ƒS.Sound.play(audio.ambience.mountainPass, 0.35, true);
        
        await ƒS.Location.show(locations.mountainPass);
        await ƒS.update(transitions.pix1.duration, transitions.pix1.alpha, transitions.pix1.edge);

        if (!dataForSave.visitedScenes.includes(Location.MountainPass)) {
            dataForSave.visitedScenes.push(Location.MountainPass);
        }

        if (dataForSave.quests.mountainPass.questState === 'open') {
            await ƒS.Character.animate(characters.player, characters.player.pose.default, slideAnimation({
                _xStart: -50,
                _xEnd: 0,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            await ƒS.Speech.tell(characters.player, "The road seems to be blocked.");
            await ƒS.Speech.tell(characters.player, "If only I could find a way to move this rock.");
            await ƒS.Speech.tell(characters.player, "I need to go back and find help.");
            dataForSave.quests.mountainPass.questState = "accepted";
            await ƒS.Speech.tell("", `Quest: ${quests.mountainPass.name} was added.`);
        } else if (dataForSave.quests.mountainPass.questState === 'accepted' && dataForSave.quests.mountainPass.hasInteractedWithRequiredCharacter) {
            await ƒS.Character.show(characters.player, characters.player.pose.default, ƒS.positionPercent(0, 110));
            await ƒS.update(1);
            await ƒS.Character.show(characters.takeshi, characters.takeshi.pose.default, ƒS.positionPercent(80, 110));
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.takeshi, "Lets clear the way.");
            
            await ƒS.Speech.tell("", `With the help of ${characters.takeshi.name}, you manage to move the rock and continue your journey.`);
            dataForSave.quests.mountainPass.questState = "completed";
            await ƒS.Speech.tell(characters.player, "Thank you.");
            await ƒS.Speech.tell(characters.takeshi, "I will return back to the village to help rebuild, what they destroyed. I will pray for you my friend.");
        } else if (dataForSave.quests.mountainPass.questState === 'accepted' && !dataForSave.quests.mountainPass.hasInteractedWithRequiredCharacter) {
            await ƒS.Character.animate(characters.player, characters.player.pose.default, slideAnimation({
                _xStart: -50,
                _xEnd: 0,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            await ƒS.Speech.tell(characters.player, "The road is still blocked. I should find help.");
        } else if (dataForSave.quests.defeatKingAkuma.questState === 'open' && ƒS.Inventory.getAmount(items.celestialOrb) > 0) {
            dataForSave.quests.defeatKingAkuma.questState = 'accepted';
            await ƒS.Character.animate(characters.player, characters.player.pose.default, slideAnimation({
                _xStart: -50,
                _xEnd: 0,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            await ƒS.Speech.tell("", `Quest: ${quests.defeatKingAkuma.name} was added.`);
            await ƒS.Speech.tell(characters.player, "So I have finally made it.");
            await ƒS.Speech.tell(characters.player, "The dark fortress is just ahead.");
            await ƒS.Speech.tell(characters.player, "I must prepare myself for the final battle.");
            await ƒS.Speech.tell(characters.player, "I must defeat King Akuma and save the land.");
        }
        else {
            await ƒS.Character.animate(characters.player, characters.player.pose.default, slideAnimation({
                _xStart: -50,
                _xEnd: 0,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            await ƒS.Speech.tell(characters.player, "I have already been here. I should continue my journey.");
        }

        ƒS.Speech.hide();

        let possibleLocations: { [key: string]: string } = {
            sacredForest: formatEnumValue(Location.SacredForest),
        }

        // This is a placeholder for the actual implementation
        if (dataForSave.quests.mountainPass.questState === 'completed') {
            possibleLocations[`enemyCamp`] = formatEnumValue(Location.EnemyCamp);
            possibleLocations[`hiddenShrine`] = formatEnumValue(Location.HiddenShrine);
        }

        if (ƒS.Inventory.getAmount(items.celestialOrb) > 0) {
            possibleLocations[`darkFortress`] = formatEnumValue(Location.DarkFortress);
        }

        let nextLocationRequest = await ƒS.Menu.getInput(possibleLocations, "inputChoices");

        ƒS.Character.hideAll();
        ƒS.Sound.fade(audio.ambience.mountainPass, 0, 4);

        switch (nextLocationRequest) {
            case possibleLocations.sacredForest:
                return Location.SacredForest;
            case possibleLocations.enemyCamp:
                return Location.EnemyCamp;
            case possibleLocations.hiddenShrine:
                return Location.HiddenShrine;
            case possibleLocations.darkFortress:
                return Location.DarkFortress;
        }
    }
}