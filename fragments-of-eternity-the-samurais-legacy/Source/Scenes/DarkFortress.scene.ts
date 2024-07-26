namespace Template {
    export async function DarkFortress(): ƒS.SceneReturn {
        console.log("DarkFortress Scene starting");
        handleMeterContainerVisibility({ _showMeterContainer: true });
        
        ƒS.Speech.hide();
        ƒS.Sound.play(audio.ambience.darkFortress, 0.2, true);
        
        await ƒS.Location.show(locations.darkFortress);
        await ƒS.update(transitions.pix1.duration, transitions.pix1.alpha, transitions.pix1.edge);

        await ƒS.Character.animate(characters.player, characters.player.pose.default, slideAnimation({
            _xStart: -50,
            _xEnd: 0,
            _yStart: 110,
            _yEnd: 110,
            _duration: 4
        }));
        await ƒS.Speech.tell(characters.player, "So I have finally made it.");
        await ƒS.Speech.tell(characters.player, "I have reached the dark fortress.");
        await ƒS.Speech.tell(characters.player, "This is where our fate will be decided.");

        await ƒS.Character.animate(characters.shadowSkeleton, characters.shadowSkeleton.pose.default, slideAnimation({
            _xStart: 80,
            _xEnd: 80,
            _yStart: 200,
            _yEnd: 110,
            _duration: 5
        }));

        await ƒS.Speech.tell(characters.shadowSkeleton, "So you have finally made it to the dark fortress.");
        await ƒS.Speech.tell(characters.shadowSkeleton, "Our King has been waiting for you.");
        await ƒS.Speech.tell(characters.shadowSkeleton, "I will bring him your head.");
        await ƒS.Speech.tell(characters.player, "I have made it this far. I will not be stopped.");


        let winnerFirstBattle = await battleMode(
            {
                _fighterOne: characters.player,
                _fighterTwo: characters.shadowSkeleton,
                _currentlyPlayingAudio: {
                    _url: audio.ambience.darkFortress,
                    _volume: 0.2,
                    _loop: true
                },
                _hideEnemy: true,
                _reward: items.healthPotion,
                _enemyReusable: true
            }
        );

        if (winnerFirstBattle.name !== characters.player.name) {
            ƒS.Sound.fade(audio.ambience.darkFortress, 0, 4);
            return Location.EndingOne;
        }
        await ƒS.Speech.tell(characters.player, "I am close. I can feel it.");
        await ƒS.Speech.tell(characters.player, "King Akuma must be close.");

        await ƒS.Character.animate(characters.kingAkuma, characters.kingAkuma.pose.default, slideAnimation({
            _xStart: 80,
            _xEnd: 80,
            _yStart: 200,
            _yEnd: 120,
            _duration: 5
        }));
        await ƒS.Speech.tell(characters.kingAkuma, "So you finally made it to the dark fortress.");
        await ƒS.Speech.tell(characters.kingAkuma, "I was waiting for you.");
        await ƒS.Speech.tell(characters.kingAkuma, "You have come a long way, but your journey ends here.");
        await ƒS.Speech.tell(characters.player, "I am here to stop you.");
        await ƒS.Speech.tell(characters.kingAkuma, "You cannot stop me. I am the king of darkness.");
        await ƒS.Speech.tell(characters.player, "Where is Aiko?");
        await ƒS.Speech.tell(characters.player, "I will do whatever it takes to save her and finally bring peace to this land.");
        await ƒS.Speech.tell(characters.kingAkuma, "Aiko is safe for now.");
        await ƒS.Speech.tell(characters.kingAkuma, "But you will never see her again.");
        await ƒS.Speech.tell(characters.kingAkuma, "Prepare yourself, samurai. The final battle begins.");

        let winnerSecondBattle = await battleMode(
            {
                _fighterOne: characters.player,
                _fighterTwo: characters.kingAkuma,
                _currentlyPlayingAudio: {
                    _url: audio.ambience.darkFortress,
                    _volume: 0.2,
                    _loop: true
                },
                _hideEnemy: false,
                _reward: items.manaGem
            }
        );

        if (winnerSecondBattle.name !== characters.player.name) {
            ƒS.Sound.fade(audio.ambience.darkFortress, 0, 4);
            return Location.EndingOne;
        }

        await ƒS.Speech.tell(characters.kingAkuma, "You are strong, samurai.");
        await ƒS.Speech.tell(characters.kingAkuma, "But you are no match for me.");
        await ƒS.Speech.tell(characters.kingAkuma, "I will show you the true power of darkness.");
        await ƒS.Speech.tell(characters.player, "You may be strong, but I will not give up.");
        await ƒS.Speech.tell(characters.player, "I possess the power of the celestial orb.");
        await ƒS.Speech.tell(characters.player, "I will defeat you and save this land.");
        await ƒS.Speech.tell(characters.kingAkuma, "You truly think so?");
        await ƒS.Speech.tell(characters.kingAkuma, "You have no idea what it requires to really defeat me.");
        await ƒS.Speech.tell(characters.kingAkuma, "Guards, bring me the the prisoner.");

        await ƒS.Character.animate(characters.aiko, characters.aiko.pose.default, slideAnimation({
            _xStart: 110,
            _xEnd: 60,
            _yStart: 110,
            _yEnd: 110,
            _duration: 5
        }));


        await ƒS.Speech.tell(characters.player, "Aiko, are you alright?");
        await ƒS.Speech.tell(characters.aiko, `${dataForSave.playerName}, you came to rescue me.`);
        await ƒS.Speech.tell(characters.aiko, "I knew you would come.");
        await ƒS.Speech.tell(characters.player, "I will get you out of here.");
        await ƒS.Speech.tell(characters.kingAkuma, "You will do no such thing.");
        await ƒS.Speech.tell(characters.kingAkuma, "You will have to make a choice.");
        await ƒS.Speech.tell(characters.kingAkuma, "The celestial orb indeed has the power to defeat me.");
        await ƒS.Speech.tell(characters.kingAkuma, "But it does not only require a lot of power, but also a great sacrifice.");
        await ƒS.Speech.tell(characters.kingAkuma, "The orb requires a life to be used.");
        await ƒS.Speech.tell(characters.player, "If thats what it takes to save Aiko, I will do it.");
        await ƒS.Speech.tell(characters.kingAkuma, "You are truly a brave warrior.");
        await ƒS.Speech.tell(characters.kingAkuma, "But thats not how it works.");
        await ƒS.Speech.tell(characters.kingAkuma, "The orb requires a life, but not yours.");
        await ƒS.Speech.tell(characters.kingAkuma, "It requires the life of someone you truly love.");
        await ƒS.Speech.tell(characters.kingAkuma, "Pure love is the only thing that can defeat me.");
        await ƒS.Speech.tell(characters.kingAkuma, "So tell me, samurai...");
        await ƒS.Speech.tell(characters.kingAkuma, "Are you willing to sacrifice the one you love to save the land?");

        let possibleOptions = {
            useOrb: "Use the Celestial Orb",
            saveAiko: "Save Aiko",
        }

        let decisionRequest = await ƒS.Menu.getInput(possibleOptions, "inputChoices");

        switch (decisionRequest) {
            case possibleOptions.useOrb:
                await ƒS.Speech.tell(characters.aiko, "My love, you must do it.");
                await ƒS.Speech.tell(characters.aiko, "This is our destiny.");
                await ƒS.Speech.tell(characters.player, "But how can I go on without you?");
                await ƒS.Speech.tell(characters.aiko, "I will always be with you.");
                await ƒS.Speech.tell(characters.aiko, "Only due to our love, we can defeat the darkness.");
                await ƒS.Speech.tell(characters.player, "I will never forget you.");
                await ƒS.Speech.tell(characters.player, "My love for you will never die.");
                await ƒS.Speech.tell(characters.kingAkuma, "No...");
                await ƒS.Speech.tell(characters.kingAkuma, "This cannot be.");
                await ƒS.Speech.tell(characters.player, "You brought so much pain to this land.");
                await ƒS.Speech.tell(characters.player, "But now it is over.");
                if (dataForSave.mana < 60) {
                    await ƒS.Speech.tell(characters.player, "What is happening?");
                    await ƒS.Character.animate(characters.player, characters.player.pose.default, colorAnimation({
                        _startColor: new ƒ.Color(1, 1, 1, 1),
                        _endColor: new ƒ.Color(0.5, 0.5, 0.5, 1),
                        _duration: 2,
                    }));
                    await ƒS.Speech.tell(characters.kingAkuma, "Haha, you fool.");
                    await ƒS.Speech.tell(characters.kingAkuma, "Such a strong warrior, but you lack the power to handle the orb.");
                    await ƒS.Speech.tell(characters.player, "No, this cannot be.");
                    await ƒS.Character.animate(characters.player, characters.player.pose.default, colorAnimation({
                        _startColor: new ƒ.Color(0.5, 0.5, 0.5, 1),
                        _endColor: new ƒ.Color(0, 0, 0, 1),
                        _duration: 2,
                    }));
                    ƒS.Character.hideAll();
                    ƒS.Sound.fade(audio.ambience.darkFortress, 0, 4);
                    return Location.EndingTwo;
                } else if (dataForSave.quests.theLight.questState === 'completed') {
                    await ƒS.Character.show(characters.theLight, characters.theLight.pose.default, ƒS.positionPercent(70, 110));
                    await ƒS.update(2);
                    await ƒS.Speech.tell(characters.theLight, `${dataForSave.playerName}, Aiko. Your love is truly pure.`);
                    await ƒS.Speech.tell(characters.theLight, "You have proven yourself worthy.");
                    await ƒS.Speech.tell(characters.theLight, "Since you have helped me to restore my power, I am able to bring balance to this land.");
                    await ƒS.Speech.tell(characters.theLight, "Together we can use your love to defeat the darkness.");
                    await ƒS.Speech.tell(characters.theLight, "We can concentrate your love and with my power, use the celestrial orb without any sacrifice.");
                    await ƒS.Speech.tell(characters.theLight, "Are you ready?");
                    await ƒS.Speech.tell(characters.player, "I am ready.");
                    await ƒS.Speech.tell(characters.aiko, "Lets end this.");
                    await ƒS.Speech.tell(characters.theLight, "Close your eyes.");
                    ƒS.Sound.fade(audio.ambience.darkFortress, 0, 4);
                    return Location.EndingFive;

                } else {
                    await ƒS.Speech.tell(characters.player, "With the power of the celestial orb, I will defeat you.");
                    await ƒS.Speech.tell(characters.kingAkuma, "No...");
                    await ƒS.Speech.tell(characters.player, "Aiko, I will never forget you.");
                    await ƒS.Speech.tell(characters.aiko, "I know...");
                    await ƒS.Location.show(locations.endingTwo);
                    await ƒS.update(3);
                    await ƒS.Speech.tell(characters.kingAkuma, "Aaaarrrh...");
                    ƒS.Character.hideAll();
                    ƒS.Sound.fade(audio.ambience.darkFortress, 0, 4);
                    return Location.EndingFour;
                }
            case possibleOptions.saveAiko:
                await ƒS.Speech.tell(characters.player, "No...");
                await ƒS.Speech.tell(characters.player, "I cannot do it.");
                await ƒS.Speech.tell(characters.player, "I did not come this far to lose you.");
                await ƒS.Speech.tell(characters.aiko, "My love, we will find another way.");
                await ƒS.Speech.tell(characters.kingAkuma, "Haha, I knew you would not have what it takes.");
                await ƒS.Speech.tell(characters.kingAkuma, "You will never defeat me.");
                await ƒS.Speech.tell(characters.player, "It does not matter.");
                await ƒS.Speech.tell(characters.player, "There is nothing stronger than love.");
                await ƒS.Speech.tell(characters.player, "And if this is what it takes to save her, I will do it.");
                await ƒS.Speech.tell(characters.kingAkuma, "Hahaha. You will regret this.");
                await ƒS.Speech.tell(characters.player, "I will never regret fighting for love.");
                await ƒS.Speech.tell(characters.player, "Aiko, come with me. We need to leave this place.");
                await ƒS.Speech.tell(characters.kingAkuma, "You may have weakened me, but you will never defeat me.");
                await ƒS.Speech.tell(characters.kingAkuma, "I will return and destroy you all.");
                await ƒS.Character.hide(characters.aiko);
                await ƒS.Character.hide(characters.player);
                await ƒS.update(1);
                ƒS.Character.hideAll();
                ƒS.Sound.fade(audio.ambience.darkFortress, 0, 4);
                return Location.EndingThree;
        }
        
    }
}