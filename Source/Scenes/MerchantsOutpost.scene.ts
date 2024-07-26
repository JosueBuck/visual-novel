namespace Template {
    export async function MerchantsOutpost(): ƒS.SceneReturn {
        console.log("MerchantsOutpost Scene starting");
        handleMeterContainerVisibility({ _showMeterContainer: true });
        
        ƒS.Speech.hide();
        ƒS.Sound.play(audio.ambience.merchantsOutpost, 0.1, true);
        
        await ƒS.Location.show(locations.merchantsOutpost);
        await ƒS.update(transitions.pix1.duration, transitions.pix1.alpha, transitions.pix1.edge);

        if (!dataForSave.visitedScenes.includes(Location.MerchantsOutpost)) {
            dataForSave.visitedScenes.push(Location.MerchantsOutpost);

            await ƒS.Character.show(characters.player, characters.player.pose.default, ƒS.positionPercent(0, 110));
            await ƒS.Character.show(characters.merchant, characters.merchant.pose.default, ƒS.positionPercent(80, 110));
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.merchant, "Thanks again!");
            await ƒS.Speech.tell(characters.merchant, "Here, take this!");
            ƒS.Inventory.add(items.manaGem);
            await ƒS.Speech.tell("", `${items.manaGem.name} was added to your inventory`);
            await ƒS.Speech.tell(characters.merchant, "May it help you on your journey.");
            await ƒS.Speech.tell(characters.merchant, "I will stay here for a while. I wish you good luck on your journey.");

            await ƒS.Character.animate(characters.merchant, characters.merchant.pose.default, slideAnimation({
                _xStart: 80,
                _xEnd: 120,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            ƒS.Character.hide(characters.merchant);
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.player, "Another victory for humanity. But now I must continue my journey.");
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

        let possibleLocations: { [key: string]: string } = {
            enemyCamp: formatEnumValue(Location.EnemyCamp),
        }

        let nextLocationRequest = await ƒS.Menu.getInput(possibleLocations, "inputChoices");

        ƒS.Character.hideAll();
        ƒS.Sound.fade(audio.ambience.merchantsOutpost, 0, 4);

        switch (nextLocationRequest) {
            case possibleLocations.enemyCamp:
                return Location.EnemyCamp;
        }
    }
}