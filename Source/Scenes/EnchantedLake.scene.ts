namespace Template {
    export async function EnchantedLake(): ƒS.SceneReturn {
        console.log("EnchantedLake Scene starting");

        handleMeterContainerVisibility({ _showMeterContainer: true });

        ƒS.Speech.hide();
        ƒS.Sound.play(audio.ambience.enchantedLake, 0.6, true);

        await ƒS.Location.show(locations.enchantedLake);
        await ƒS.update(transitions.pix1.duration, transitions.pix1.alpha, transitions.pix1.edge);

        if (!dataForSave.visitedScenes.includes(Location.EnchantedLake)) {
            dataForSave.visitedScenes.push(Location.EnchantedLake);
        }

        await ƒS.Character.animate(characters.player, characters.player.pose.default, slideAnimation({
            _xStart: -50,
            _xEnd: 0,
            _yStart: 110,
            _yEnd: 110,
            _duration: 5
        }));

        if (dataForSave.quests.yuna.questState === 'accepted' && ƒS.Inventory.getAmount(items.yunasAmulet) === 0) {
            await ƒS.Character.animate(characters.yuna, characters.yuna.pose.default, slideAnimation({
                _xStart: 115,
                _xEnd: 80,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            await ƒS.Speech.tell(characters.yuna, "Greetings, traveler. Have you found my amulet?");
            await ƒS.Speech.tell(characters.player, "I am sorry, but I have not found it yet.");
            await ƒS.Speech.tell(characters.yuna, "You will find my amulet in the Abandoned Temple. Please bring it back to me.");
        }
        if (dataForSave.quests.yuna.questState === 'accepted' && ƒS.Inventory.getAmount(items.yunasAmulet) > 0) {
            dataForSave.quests.yuna.questState = 'completed';
            await ƒS.Character.animate(characters.yuna, characters.yuna.pose.default, slideAnimation({
                _xStart: 115,
                _xEnd: 80,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            await ƒS.Speech.tell(characters.yuna, "Greetings, traveler. Have you found my amulet?");
            await ƒS.Speech.tell(characters.player, "Yes, I have found it.");
            await ƒS.Speech.tell(characters.yuna, "Thank you for finding my amulet.");
            await ƒS.Speech.tell(characters.yuna, "Here, take this as a reward.");
            ƒS.Inventory.add(items.manaGem);
            ƒS.Inventory.add(items.healthPotion);
            await ƒS.Speech.tell("", "Mana Gem was added to your inventory.");
            await ƒS.Speech.tell("", "Health Potion was added to your inventory.");
            await ƒS.Speech.tell(characters.yuna, "I wish you good luck on your journey.");
            await ƒS.Speech.tell(characters.yuna, "Maybe our paths will cross again.");
            await ƒS.Character.animate(characters.yuna, characters.yuna.pose.default, slideAnimation({
                _xStart: 80,
                _xEnd: 115,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            ƒS.Character.hide(characters.yuna);
            await ƒS.update(1);
        }

        if (
            dataForSave.quests.yuna.questState !== 'accepted' && dataForSave.quests.theLight.questState === 'open'
        ) {
            await ƒS.Speech.tell(characters.player, "Whats that?");
            await ƒS.Speech.tell(characters.player, "I can feel a presence nearby.");

            await ƒS.Character.show(characters.theLight, characters.theLight.pose.default, ƒS.positionPercent(70, 110));
            await ƒS.update(2);
            await ƒS.Speech.tell(characters.theLight, "Hello...");
            await ƒS.Speech.tell(characters.player, "Who are you?");
            await ƒS.Speech.tell(characters.theLight, "I am the Light. One of the ancient spirits of this land.");
            await ƒS.Speech.tell(characters.theLight, "I need your help.");
            await ƒS.Speech.tell(characters.player, "What do you need?");
            await ƒS.Speech.tell(characters.theLight, "Part of my spirit has been taken from me. I need you to find it and bring it back to me.");
            await ƒS.Speech.tell(characters.theLight, "Without it, I am forced to stay here and cannot bring balance to this land.");
            await ƒS.Speech.tell(characters.theLight, "Will you help me?");

            let decisionOptions = {
                accept: "Accept",
                decline: "Decline"
            }

            let questDecision = await ƒS.Menu.getInput(decisionOptions, "inputChoices");

            if (questDecision === decisionOptions.accept) {
                dataForSave.quests.theLight.questState = 'accepted';
                await ƒS.Speech.tell(characters.player, "Of course, I will help you.");
                await ƒS.Speech.tell("", `Quest: ${quests.theLight.name} was added.`);
                await ƒS.Speech.tell(characters.theLight, "Thank you. You will find my spirit in the Cursed Cave.");
                await ƒS.Speech.tell(characters.theLight, "Its a hidden place, guarded by dark creatures.");
                await ƒS.Speech.tell(characters.theLight, "My presence will guide you there.");
                ƒS.Speech.hide();
                ƒS.Character.hideAll();
                ƒS.Sound.fade(audio.ambience.enchantedLake, 0, 4);
                return Location.CursedCave;
            } else {
                dataForSave.quests.theLight.questState = 'declined';
                await ƒS.Speech.tell(characters.player, "I am sorry, but I cannot help you.");
                await ƒS.Speech.tell(characters.player, "I must continue my journey to defeat King Akuma and save my wife.");
                await ƒS.Speech.tell(characters.theLight, "So be it.");
                await ƒS.Speech.tell(characters.theLight, "Your fate is in your hands now.");
                ƒS.Character.hide(characters.theLight);
                await ƒS.update(2);
            }
        }

        if (
            dataForSave.quests.theLight.questState === 'accepted' &&
            ƒS.Inventory.getAmount(items.spiritEssence) > 0
        ) {
            dataForSave.quests.theLight.questState = 'completed';
            await ƒS.Character.show(characters.theLight, characters.theLight.pose.default, ƒS.positionPercent(70, 110));
            await ƒS.update(2);
            await ƒS.Speech.tell(characters.theLight, "You have found my spirit. Thank you.");
            await ƒS.Speech.tell(characters.theLight, "With this, I can bring balance to this land once again.");
            await ƒS.Speech.tell(characters.theLight, "Here, take this as a reward.");
            ƒS.Inventory.add(items.manaGem);
            ƒS.Inventory.add(items.healthPotion);
            await ƒS.Speech.tell("", "Mana Gem was added to your inventory.");
            await ƒS.Speech.tell("", "Health Potion was added to your inventory.");
            await ƒS.Speech.tell(characters.theLight, "We will meet again...");
            ƒS.Character.hide(characters.theLight);
            await ƒS.update(2);
        }

        await ƒS.Speech.tell(characters.player, "Lets continue the journey.");

        ƒS.Speech.hide();

        let possibleLocations: { [key: string]: string } = {
            SacredForest: formatEnumValue(Location.SacredForest),
        }

        // This is a placeholder for the actual implementation
        if (
            dataForSave.quests.theLight.questState !== 'open' &&
            dataForSave.quests.theLight.questState !== 'declined'
        ) {
            possibleLocations["CursedCave"] = formatEnumValue(Location.CursedCave);
        }


        let nextLocationRequest = await ƒS.Menu.getInput(possibleLocations, "inputChoices");

        ƒS.Character.hideAll();
        ƒS.Sound.fade(audio.ambience.enchantedLake, 0, 4);

        switch (nextLocationRequest) {
            case possibleLocations.SacredForest:
                return Location.SacredForest;
            case possibleLocations.CursedCave:
                return Location.CursedCave;
        }
    }
}