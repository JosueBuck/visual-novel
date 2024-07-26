"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    window.addEventListener("load", start);
    function start(_event) {
        Template.gameMenu = Template.ƒS.Menu.create(Template.gameMenuButtons, Template.gameMenuButtonFunctionalities, "gameMenu");
        let scenes = [
            // Game Scenes
            { scene: Template.Village, name: "Village", id: Template.Location.Village },
            { scene: Template.DestroyedVillage, name: "DestroyedVillage", id: Template.Location.DestroyedVillage },
            { scene: Template.SacredForest, name: "SacredForest", id: Template.Location.SacredForest },
            { scene: Template.AbandonedTemple, name: "AbandonedTemple", id: Template.Location.AbandonedTemple },
            { scene: Template.EnchantedLake, name: "EnchantedLake", id: Template.Location.EnchantedLake },
            { scene: Template.CursedCave, name: "CursedCave", id: Template.Location.CursedCave },
            { scene: Template.MountainPass, name: "MountainPass", id: Template.Location.MountainPass },
            { scene: Template.EnemyCamp, name: "EnemyCamp", id: Template.Location.EnemyCamp },
            { scene: Template.MerchantsOutpost, name: "MerchantsOutpost", id: Template.Location.MerchantsOutpost },
            { scene: Template.HiddenShrine, name: "HiddenShrine", id: Template.Location.HiddenShrine },
            { scene: Template.DarkFortress, name: "DarkFortress", id: Template.Location.DarkFortress },
            //Game Endings
            { scene: Template.EndingOne, name: "EndingOne", id: Template.Location.EndingOne },
            { scene: Template.EndingTwo, name: "EndingTwo", id: Template.Location.EndingTwo },
            { scene: Template.EndingThree, name: "EndingThree", id: Template.Location.EndingThree },
            { scene: Template.EndingFour, name: "EndingFour", id: Template.Location.EndingFour },
            { scene: Template.EndingFive, name: "EndingFive", id: Template.Location.EndingFive },
            { scene: Template.GameOver, name: "GameOver", id: Template.Location.GameOver },
        ];
        console.log("Start");
        let uiElement = document.querySelector("[type=player-meter-container]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        Template.handleCloseMenu();
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log(Template.dataForSave);
        await Template.ƒS.update();
        await Template.ƒS.update();
        console.log("FudgeStory Template Scene starting");
        await Template.ƒS.Speech.tell("test character", "Where am I?");
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    function slideAnimation({ _xStart, _xEnd, _yStart, _yEnd, _duration }) {
        return {
            start: {
                translation: Template.ƒS.positionPercent(_xStart, _yStart),
                color: Template.ƒS.Color.CSS("white", 1),
            },
            end: {
                translation: Template.ƒS.positionPercent(_xEnd, _yEnd),
                color: Template.ƒS.Color.CSS("white", 1)
            },
            duration: _duration,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.slideAnimation = slideAnimation;
    function colorAnimation({ _startColor, _endColor, _duration }) {
        return {
            start: {
                color: _startColor,
            },
            end: {
                color: _endColor
            },
            duration: _duration,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.colorAnimation = colorAnimation;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.audio = {
        ambience: {
            village: "./Audio/Ambience/village.wav",
            destroyedVillage: "./Audio/Ambience/destroyed_village.wav",
            sacredForest: "./Audio/Ambience/sacred_forest.wav",
            abandonedTemple: "./Audio/Ambience/abandoned_temple.wav",
            enchantedLake: "./Audio/Ambience/enchanted_lake.wav",
            cursedCave: "./Audio/Ambience/cursed_cave.wav",
            mountainPass: "./Audio/Ambience/mountain_pass.wav",
            enemyCamp: "./Audio/Ambience/enemy_camp.wav",
            merchantsOutpost: "./Audio/Ambience/merchants_outpost.wav",
            hiddenShrine: "./Audio/Ambience/hidden_shrine.wav",
            darkFortress: "./Audio/Ambience/dark_fortress.wav"
        },
        music: {
            battle: "./Audio/Music/battle.wav",
        },
        sfx: {
            attack: "./Audio/SFX/attack.mp3",
            block: "./Audio/SFX/block.mp3",
            defeat: "./Audio/SFX/defeat.mp3",
            hit: "./Audio/SFX/hit.mp3",
            menu: "./Audio/SFX/menu.mp3",
            select: "./Audio/SFX/select.mp3",
            victory: "./Audio/SFX/victory.mp3"
        }
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.characters = {
        player: {
            name: "Hiroshi",
            origin: Template.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                default: "./Images/Characters/player.png",
            },
            health: 100,
            defense: 0.7
        },
        aiko: {
            name: "Aiko",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Images/Characters/aiko.png",
                left: "./Images/Characters/aiko_left.png",
            }
        },
        kingAkuma: {
            name: "King Akuma",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Images/Characters/king_akuma.png",
            },
            health: 100,
            defense: 0.6
        },
        masterKazuki: {
            name: "Master Kazuki",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Images/Characters/master_kazuki.png",
                left: "./Images/Characters/master_kazuki_left.png",
            }
        },
        theLight: {
            name: "The Light",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Images/Characters/the_light.png",
            }
        },
        takeshi: {
            name: "Takeshi",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Images/Characters/takeshi.png",
            }
        },
        yuna: {
            name: "Yuna",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Images/Characters/yuna.png",
            }
        },
        shadowSkeleton: {
            name: "Shadow Skeleton",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Images/Characters/shadow_skeleton.png",
            },
            health: 100,
            defense: 0.4
        },
        hikari: {
            name: "Hikari",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Images/Characters/hikari.png",
            }
        },
        merchant: {
            name: "Merchant",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Images/Characters/merchant.png",
            }
        },
        guardianSpirit: {
            name: "Guardian Spirit",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Images/Characters/guardian_spirit.png",
            },
            health: 100,
            defense: 0.5
        }
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.yuna = {
        name: "Yuna's Quest",
        description: "Help Yuna to find her lost amulet.",
        questState: "open",
    };
    Template.theLight = {
        name: "The Light",
        description: "Help the ancient spirit to restore its power.",
        questState: "open",
    };
    Template.merchant = {
        name: "Merchant's Resque",
        description: "Resque the merchant from the enemy camp.",
        questState: "open",
    };
    Template.mountainPass = {
        name: "Mountain Pass",
        description: "The path to continue the journey is blocked. Find a way to move the rock.",
        questState: "open",
        hasInteractedWithRequiredCharacter: false,
    };
    Template.guardianSpirit = {
        name: "Guardian Spirit",
        description: "You have found the Guardian Spirit. Prove your worth to it to get the orb.",
        questState: "open",
    };
    Template.defeatKingAkuma = {
        name: "Defeat King Akuma",
        description: "Defeat King Akuma to save the land.",
        questState: "open",
    };
    Template.quests = {
        yuna: Template.yuna,
        theLight: Template.theLight,
        merchant: Template.merchant,
        mountainPass: Template.mountainPass,
        guardianSpirit: Template.guardianSpirit,
        defeatKingAkuma: Template.defeatKingAkuma,
    };
    Template.dataForSave = {
        playerName: "Hiroshi",
        health: 100,
        mana: 0,
        visitedScenes: [],
        quests: Template.quests,
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.items = {
        celestialOrb: {
            name: "Celestial Orb",
            description: "A mystical orb infused with the essence of celestial beings. It can channel and amplify its power to unleash devastating magical attacks against the dark army of King Akuma.",
            image: "./Images/Items/celestial_orb.png",
            static: true // Cannot be consumed
        },
        yunasAmulet: {
            name: "Yunas Amulet",
            description: "A mystical amulet with healing properties, lost in the Abandoned Temple. When Hiroshi helps Yuna find this item, she reappears at the Enchanted Lake and offers him either mana or a health potion.",
            image: "./Images/Items/yunas_amulet.png",
            static: true // Cannot be consumed
        },
        spiritEssence: {
            name: "Spirit Essence",
            description: "A glowing essence containing the spirit's energy, found in the Cursed Cave. Essential for helping the Light and unlocking further mystical powers.",
            image: "./Images/Items/spirit_essence.png",
            static: true // Cannot be consumed
        },
        key: {
            name: "Key",
            description: "A key that unlocks a door.",
            image: "./Images/Items/key.png",
            static: true // Cannot be consumed
        },
        manaGem: {
            name: "Mana Gem",
            description: "A gem that stores mana. Can be used to increase the mana bar, essential for using the ancient object.",
            image: "./Images/Items/mana_gem.png",
            static: false, // Can be consumed
            handler: () => {
                let mana = Template.dataForSave.mana + 30;
                mana > 100 ? 100 : mana;
                Template.dataForSave.mana = mana;
                return;
            }
        },
        healthPotion: {
            name: "Health Potion",
            description: "A potion that restores health.",
            image: "./Images/Items/health_potion.png",
            static: false, // Can be consumed
            handler: () => {
                let health = Template.dataForSave.health + 50;
                health > 100 ? 100 : health;
                Template.dataForSave.health = health;
                return;
            }
        },
        gold: {
            name: "Gold",
            description: "A valuable currency used for trading and purchasing items, found in various locations throughout the land.",
            image: "./Images/Items/gold.png",
            static: true // Can not be consumed but traded
        }
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    /*     export enum Location {
            Village = "Village",
            SacredForest = "SacredForest",
            AbandonedTemple = "AbandonedTemple",
            EnchantedLake = "EnchantedLake",
            CursedCave = "CursedCave",
            MountainPass = "MountainPass",
            EnemyCamp = "EnemyCamp",
            MerchantsOutpost = "MerchantsOutpost",
            HiddenShrine = "HiddenShrine",
            DarkFortress = "DarkFortress"
        } */
    let Location;
    (function (Location) {
        Location["Village"] = "village";
        Location["DestroyedVillage"] = "destroyedVillage";
        Location["SacredForest"] = "sacredForest";
        Location["AbandonedTemple"] = "abandonedTemple";
        Location["EnchantedLake"] = "enchantedLake";
        Location["CursedCave"] = "cursedCave";
        Location["MountainPass"] = "mountainPass";
        Location["EnemyCamp"] = "enemyCamp";
        Location["MerchantsOutpost"] = "merchantsOutpost";
        Location["HiddenShrine"] = "hiddenShrine";
        Location["DarkFortress"] = "darkFortress";
        Location["EndingOne"] = "endingOne";
        Location["EndingTwo"] = "endingTwo";
        Location["EndingThree"] = "endingThree";
        Location["EndingFour"] = "endingFour";
        Location["EndingFive"] = "endingFive";
        Location["GameOver"] = "gameOver";
    })(Location = Template.Location || (Template.Location = {}));
    // Define your locations using the LocationKey enum
    Template.locations = {
        [Location.Village]: {
            name: "Village",
            background: "Images/Backgrounds/village.png"
        },
        [Location.DestroyedVillage]: {
            name: "VillageDestroyed",
            background: "Images/Backgrounds/destroyed_village.png"
        },
        [Location.SacredForest]: {
            name: "SacredForest",
            background: "Images/Backgrounds/sacred_forest.png"
        },
        [Location.AbandonedTemple]: {
            name: "AbandonedTemple",
            background: "Images/Backgrounds/abandoned_temple.png"
        },
        [Location.EnchantedLake]: {
            name: "EnchantedLake",
            background: "Images/Backgrounds/enchanted_lake.png"
        },
        [Location.CursedCave]: {
            name: "CursedCave",
            background: "Images/Backgrounds/cursed_cave.png"
        },
        [Location.MountainPass]: {
            name: "MountainPass",
            background: "Images/Backgrounds/mountain_pass.png"
        },
        [Location.EnemyCamp]: {
            name: "EnemyCamp",
            background: "Images/Backgrounds/enemy_camp.png"
        },
        [Location.MerchantsOutpost]: {
            name: "MerchantsOutpost",
            background: "Images/Backgrounds/merchants_outpost.png"
        },
        [Location.HiddenShrine]: {
            name: "HiddenShrine",
            background: "Images/Backgrounds/hidden_shrine.png"
        },
        [Location.DarkFortress]: {
            name: "DarkFortress",
            background: "Images/Backgrounds/dark_fortress.png"
        },
        [Location.EndingOne]: {
            name: "EndingOne",
            background: "Images/Backgrounds/ending_one.png"
        },
        [Location.EndingTwo]: {
            name: "EndingTwo",
            background: "Images/Backgrounds/ending_two.png"
        },
        [Location.EndingThree]: {
            name: "EndingThree",
            background: "Images/Backgrounds/ending_three.png"
        },
        [Location.EndingFour]: {
            name: "EndingFour",
            background: "Images/Backgrounds/ending_four.png"
        },
        [Location.EndingFive]: {
            name: "EndingFive",
            background: "Images/Backgrounds/ending_five.png"
        },
        [Location.GameOver]: {
            name: "GameOver",
            background: "Images/Backgrounds/game_over.png"
        }
    };
    /* export type Locations = {
        [key: string]: ƒS.LocationDefinition;
    }

    export let locations: Locations = {
        village: {
            name: "Village",
            background: "Images/Backgrounds/village.png"
        },
        sacredForest: {
            name: "SacredForest",
            background: "Images/Backgrounds/sacred_forest.png"
        },
        abandonedTemple: {
            name: "AbandonedTemple",
            background: "Images/Backgrounds/abandoned_temple.png"
        },
        enchantedLake: {
            name: "EnchantedLake",
            background: "Images/Backgrounds/enchanted_lake.png"
        },
        cursedCave: {
            name: "CursedCave",
            background: "Images/Backgrounds/cursed_cave.png"
        },
        mountainPass: {
            name: "MountainPass",
            background: "Images/Backgrounds/mountain_pass.png"
        },
        enemyCamp: {
            name: "EnemyCamp",
            background: "Images/Backgrounds/enemy_camp.png"
        },
        merchantsOutpost: {
            name: "MerchantsOutpost",
            background: "Images/Backgrounds/merchants_outpost.png"
        },
        hiddenShrine: {
            name: "HiddenShrine",
            background: "Images/Backgrounds/hidden_shrine.png"
        },
        darkFortress: {
            name: "DarkFortress",
            background: "Images/Backgrounds/dark_fortress.png"
        }
    } */
})(Template || (Template = {}));
var Template;
(function (Template) {
    // Define state to check if the menu is open
    Template.menuIsOpen = true;
    // function to handle toggling the game menu
    const handleToggleMenu = () => {
        if (Template.menuIsOpen) {
            Template.gameMenu.close();
            Template.menuIsOpen = false;
        }
        else {
            Template.gameMenu.open();
            Template.menuIsOpen = true;
        }
    };
    // function to handle closing the game menu
    Template.handleCloseMenu = () => {
        Template.gameMenu.close();
        Template.menuIsOpen = false;
    };
    // Define the buttons for the game menu
    Template.gameMenuButtons = {
        save: "Save",
        load: "Load",
        restart: "Restart",
        inventory: "Inventory",
        help: "Help",
        quests: "Quests",
        close: "Close",
    };
    // Define the functionality for the game menu buttons
    async function gameMenuButtonFunctionalities(_option) {
        switch (_option) {
            case Template.gameMenuButtons.save:
                await Template.ƒS.Progress.save();
                break;
            case Template.gameMenuButtons.load:
                await Template.ƒS.Progress.load();
                break;
            case Template.gameMenuButtons.restart:
                window.location.reload();
                break;
            case Template.gameMenuButtons.inventory:
                await Template.ƒS.Inventory.open();
                break;
            case Template.gameMenuButtons.help:
                showHelp();
                break;
            case Template.gameMenuButtons.quests:
                showQuests();
                break;
            case Template.gameMenuButtons.close:
                Template.handleCloseMenu();
                break;
            default:
                console.log("No functionality defined for this button.");
                break;
        }
    }
    Template.gameMenuButtonFunctionalities = gameMenuButtonFunctionalities;
    // Add event listener for keypresses
    document.addEventListener("keydown", hndKeypress);
    async function hndKeypress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.S:
                console.log("Save Scene");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.L:
                console.log("Load Scene");
                await Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.R:
                console.log("Restart Scene");
                window.location.reload();
                break;
            case Template.ƒ.KEYBOARD_CODE.I:
                console.log("Open Inventory");
                await Template.ƒS.Inventory.open();
                break;
            case Template.ƒ.KEYBOARD_CODE.H:
                console.log("Open Help");
                showHelp();
                break;
            case Template.ƒ.KEYBOARD_CODE.Q:
                console.log("Open Quests");
                showQuests();
                break;
            case Template.ƒ.KEYBOARD_CODE.M:
                console.log("Toggle Menu");
                handleToggleMenu();
                break;
            default:
                console.log("No functionality defined for this key.");
                break;
        }
    }
    async function showQuests() {
        console.log("Show Quests");
        Template.ƒS.Text.setClass("questsModal");
        Template.ƒS.Text.print(`<h2>Your Quests</h2><ul>${Object.values(Template.dataForSave.quests).filter(quest => quest.questState === 'accepted').map(quest => `<li>
                        <h3>${quest.name}</h3>
                        <p>${quest.description}</p>
                    </li>`).join("")}</ul>`);
    }
    Template.showQuests = showQuests;
    function showHelp() {
        Template.ƒS.Text.print("<h2>Help</h2><p>Your on a quest for humanity and love. On your journey you may encounter many obstacles and challenges. You will meet friends and foes. You will have to make choices that will shape your destiny. Choose wisely and remember that your actions have consequences. Good luck on your journey.</p><p>Try to not loose all your health or you will die. Also keep an eye on your mana, since it might be needed at some point in the game.</p><p>Use the following keys to interact with the game:</p><ul><li>S: Save Game</li><li>L: Load Game</li><li>R: Restart Game</li><li>I: Open Inventory</li><li>H: Open Help</li><li>Q: Open Quests</li><li>M: Toggle Menu</li></ul>");
    }
    Template.showHelp = showHelp;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.transitions = {
        pix1: {
            duration: 1,
            alpha: "Transitions/pix1.jpg",
            edge: 1
        },
        pix2: {
            duration: 1,
            alpha: "Transitions/pix2.png",
            edge: 2
        },
        pix3: {
            duration: 1,
            alpha: "Transitions/pix3.png",
            edge: 3
        },
        pix4: {
            duration: 1,
            alpha: "Transitions/pix4.png",
            edge: 4
        },
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function AbandonedTemple() {
        console.log("AbandonedTemple Scene starting");
        Template.handleMeterContainerVisibility({ _showMeterContainer: true });
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.play(Template.audio.ambience.abandonedTemple, 0.2, true);
        await Template.ƒS.Location.show(Template.locations.abandonedTemple);
        await Template.ƒS.update(Template.transitions.pix1.duration, Template.transitions.pix1.alpha, Template.transitions.pix1.edge);
        if (!Template.dataForSave.visitedScenes.includes(Template.Location.AbandonedTemple)) {
            Template.dataForSave.visitedScenes.push(Template.Location.AbandonedTemple);
            await Template.ƒS.Character.animate(Template.characters.player, Template.characters.player.pose.default, Template.slideAnimation({
                _xStart: -50,
                _xEnd: 0,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            await Template.ƒS.Speech.tell(Template.characters.player, "So, this is the Abandoned Temple. ");
            await Template.ƒS.Speech.tell(Template.characters.player, "It used to be a place of worship, but since the forces of King Akuma have slowly taken over the land, it has been abandoned.");
            if (Template.dataForSave.quests.yuna.questState === 'accepted') {
                await Template.ƒS.Speech.tell(Template.characters.player, "Somewhere in this temple, I will find the amulet that Yuna has lost. I must find it and bring it back to her.");
            }
            await Template.ƒS.Character.animate(Template.characters.shadowSkeleton, Template.characters.shadowSkeleton.pose.default, Template.slideAnimation({
                _xStart: 80,
                _xEnd: 80,
                _yStart: 200,
                _yEnd: 110,
                _duration: 5
            }));
            await Template.ƒS.Speech.tell(Template.characters.shadowSkeleton, "Who dares to enter the Abandoned Temple?");
            await Template.ƒS.Speech.tell(Template.characters.shadowSkeleton, "You will not leave this place alive!");
            let reward = Template.dataForSave.quests.yuna.questState === 'accepted' ? Template.items.yunasAmulet : Template.items.gold;
            let winner = await Template.battleMode({
                _fighterOne: Template.characters.player,
                _fighterTwo: Template.characters.shadowSkeleton,
                _currentlyPlayingAudio: {
                    _url: Template.audio.ambience.abandonedTemple,
                    _volume: 0.2,
                    _loop: true
                },
                _hideEnemy: true,
                _reward: reward,
                _enemyReusable: true
            });
            if (winner.name !== Template.characters.player.name) {
                Template.ƒS.Sound.fade(Template.audio.ambience.abandonedTemple, 0, 4);
                return Template.Location.EndingOne;
            }
            if (Template.dataForSave.quests.yuna.questState === 'accepted') {
                await Template.ƒS.Speech.tell(Template.characters.player, "I found the amulet. Now I can bring it back to Yuna.");
            }
            else {
                await Template.ƒS.Speech.tell(Template.characters.player, "Another enemy defeated. I must continue my journey.");
            }
            await Template.ƒS.Character.animate(Template.characters.hikari, Template.characters.hikari.pose.default, Template.slideAnimation({
                _xStart: 120,
                _xEnd: 80,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            await Template.ƒS.Speech.tell(Template.characters.hikari, `Well done, ${Template.dataForSave.playerName}. You have proven yourself to be a true warrior.`);
            await Template.ƒS.Speech.tell(Template.characters.player, "Who are you? How do you know my name?");
            await Template.ƒS.Speech.tell(Template.characters.hikari, `I am Hikari, a blind seer. I have been watching you, ${Template.dataForSave.playerName}. You are destined for greatness.`);
            await Template.ƒS.Speech.tell(Template.characters.hikari, "But be warned. The path ahead is dangerous. The darkness is growing stronger.");
            await Template.ƒS.Speech.tell(Template.characters.hikari, "I can not help you, but gift you with my words of wisdom. May they guide you on your journey.");
            await Template.ƒS.Speech.tell(Template.characters.hikari, "Come back everytime you think my words may help you.");
            await Template.ƒS.Speech.tell(Template.characters.player, "Thank you, Hikari. I will keep that in mind.");
            await Template.ƒS.Speech.tell(Template.characters.player, "I must leave now. May your words guide me on my journey.");
        }
        else {
            await Template.ƒS.Character.animate(Template.characters.player, Template.characters.player.pose.default, Template.slideAnimation({
                _xStart: -50,
                _xEnd: 0,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            await Template.ƒS.Character.animate(Template.characters.hikari, Template.characters.hikari.pose.default, Template.slideAnimation({
                _xStart: 120,
                _xEnd: 80,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            await Template.ƒS.Speech.tell(Template.characters.hikari, getRandomMysteriousSaying());
            await Template.ƒS.Speech.tell(Template.characters.player, "Thank you, Hikari.");
            await Template.ƒS.Speech.tell(Template.characters.player, "I must leave now. May your words guide me on my journey.");
        }
        Template.ƒS.Speech.hide();
        let possibleLocations = {
            SacredForest: formatEnumValue(Template.Location.SacredForest),
        };
        let nextLocationRequest = await Template.ƒS.Menu.getInput(possibleLocations, "inputChoices");
        Template.ƒS.Character.hideAll();
        Template.ƒS.Sound.fade(Template.audio.ambience.abandonedTemple, 0, 4);
        switch (nextLocationRequest) {
            case possibleLocations.SacredForest:
                return Template.Location.SacredForest;
        }
    }
    Template.AbandonedTemple = AbandonedTemple;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function CursedCave() {
        console.log("CursedCave Scene starting");
        Template.handleMeterContainerVisibility({ _showMeterContainer: true });
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.play(Template.audio.ambience.cursedCave, 0.4, true);
        await Template.ƒS.Location.show(Template.locations.cursedCave);
        await Template.ƒS.update(Template.transitions.pix1.duration, Template.transitions.pix1.alpha, Template.transitions.pix1.edge);
        if (!Template.dataForSave.visitedScenes.includes(Template.Location.CursedCave)) {
            Template.dataForSave.visitedScenes.push(Template.Location.CursedCave);
            await Template.ƒS.Character.animate(Template.characters.player, Template.characters.player.pose.default, Template.slideAnimation({
                _xStart: -50,
                _xEnd: 0,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            await Template.ƒS.Speech.tell(Template.characters.player, "This place is cursed. I can feel it in my bones.");
            await Template.ƒS.Speech.tell(Template.characters.player, "I must be careful. The shadows could be hiding everywhere.");
            await Template.ƒS.Character.animate(Template.characters.shadowSkeleton, Template.characters.shadowSkeleton.pose.default, Template.slideAnimation({
                _xStart: 80,
                _xEnd: 80,
                _yStart: 200,
                _yEnd: 110,
                _duration: 5
            }));
            await Template.ƒS.Speech.tell(Template.characters.shadowSkeleton, "He who enters the Cursed Cave shall never leave alive!");
            await Template.ƒS.Speech.tell(Template.characters.shadowSkeleton, "Prepare to meet your doom!");
            let winner = await Template.battleMode({
                _fighterOne: Template.characters.player,
                _fighterTwo: Template.characters.shadowSkeleton,
                _currentlyPlayingAudio: {
                    _url: Template.audio.ambience.cursedCave,
                    _volume: 0.05,
                    _loop: true
                },
                _hideEnemy: true,
                _reward: Template.items.spiritEssence,
                _enemyReusable: true
            });
            if (winner.name !== Template.characters.player.name) {
                Template.ƒS.Sound.fade(Template.audio.ambience.cursedCave, 0, 4);
                return Template.Location.EndingOne;
            }
            await Template.ƒS.Speech.tell(Template.characters.player, "I have found the spirit essence. I should take it with me and bring it back to the Light at the Enchanted Lake.");
        }
        else {
            await Template.ƒS.Character.animate(Template.characters.player, Template.characters.player.pose.default, Template.slideAnimation({
                _xStart: -50,
                _xEnd: 0,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            await Template.ƒS.Speech.tell(Template.characters.player, "This place still makes me shiver. I dont think there is anything left for me here.");
        }
        Template.ƒS.Speech.hide();
        let possibleLocations = {
            EnchantedLake: formatEnumValue(Template.Location.EnchantedLake),
        };
        let nextLocationRequest = await Template.ƒS.Menu.getInput(possibleLocations, "inputChoices");
        Template.ƒS.Character.hideAll();
        Template.ƒS.Sound.fade(Template.audio.ambience.cursedCave, 0, 4);
        switch (nextLocationRequest) {
            case possibleLocations.EnchantedLake:
                return Template.Location.EnchantedLake;
        }
    }
    Template.CursedCave = CursedCave;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function DarkFortress() {
        console.log("DarkFortress Scene starting");
        Template.handleMeterContainerVisibility({ _showMeterContainer: true });
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.play(Template.audio.ambience.darkFortress, 0.2, true);
        await Template.ƒS.Location.show(Template.locations.darkFortress);
        await Template.ƒS.update(Template.transitions.pix1.duration, Template.transitions.pix1.alpha, Template.transitions.pix1.edge);
        await Template.ƒS.Character.animate(Template.characters.player, Template.characters.player.pose.default, Template.slideAnimation({
            _xStart: -50,
            _xEnd: 0,
            _yStart: 110,
            _yEnd: 110,
            _duration: 4
        }));
        await Template.ƒS.Speech.tell(Template.characters.player, "So I have finally made it.");
        await Template.ƒS.Speech.tell(Template.characters.player, "I have reached the dark fortress.");
        await Template.ƒS.Speech.tell(Template.characters.player, "This is where our fate will be decided.");
        await Template.ƒS.Character.animate(Template.characters.shadowSkeleton, Template.characters.shadowSkeleton.pose.default, Template.slideAnimation({
            _xStart: 80,
            _xEnd: 80,
            _yStart: 200,
            _yEnd: 110,
            _duration: 5
        }));
        await Template.ƒS.Speech.tell(Template.characters.shadowSkeleton, "So you have finally made it to the dark fortress.");
        await Template.ƒS.Speech.tell(Template.characters.shadowSkeleton, "Our King has been waiting for you.");
        await Template.ƒS.Speech.tell(Template.characters.shadowSkeleton, "I will bring him your head.");
        await Template.ƒS.Speech.tell(Template.characters.player, "I have made it this far. I will not be stopped.");
        let winnerFirstBattle = await Template.battleMode({
            _fighterOne: Template.characters.player,
            _fighterTwo: Template.characters.shadowSkeleton,
            _currentlyPlayingAudio: {
                _url: Template.audio.ambience.darkFortress,
                _volume: 0.2,
                _loop: true
            },
            _hideEnemy: true,
            _reward: Template.items.healthPotion,
            _enemyReusable: true
        });
        if (winnerFirstBattle.name !== Template.characters.player.name) {
            Template.ƒS.Sound.fade(Template.audio.ambience.darkFortress, 0, 4);
            return Template.Location.EndingOne;
        }
        await Template.ƒS.Speech.tell(Template.characters.player, "I am close. I can feel it.");
        await Template.ƒS.Speech.tell(Template.characters.player, "King Akuma must be close.");
        await Template.ƒS.Character.animate(Template.characters.kingAkuma, Template.characters.kingAkuma.pose.default, Template.slideAnimation({
            _xStart: 80,
            _xEnd: 80,
            _yStart: 200,
            _yEnd: 120,
            _duration: 5
        }));
        await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "So you finally made it to the dark fortress.");
        await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "I was waiting for you.");
        await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "You have come a long way, but your journey ends here.");
        await Template.ƒS.Speech.tell(Template.characters.player, "I am here to stop you.");
        await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "You cannot stop me. I am the king of darkness.");
        await Template.ƒS.Speech.tell(Template.characters.player, "Where is Aiko?");
        await Template.ƒS.Speech.tell(Template.characters.player, "I will do whatever it takes to save her and finally bring peace to this land.");
        await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "Aiko is safe for now.");
        await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "But you will never see her again.");
        await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "Prepare yourself, samurai. The final battle begins.");
        let winnerSecondBattle = await Template.battleMode({
            _fighterOne: Template.characters.player,
            _fighterTwo: Template.characters.kingAkuma,
            _currentlyPlayingAudio: {
                _url: Template.audio.ambience.darkFortress,
                _volume: 0.2,
                _loop: true
            },
            _hideEnemy: false,
            _reward: Template.items.manaGem
        });
        if (winnerSecondBattle.name !== Template.characters.player.name) {
            Template.ƒS.Sound.fade(Template.audio.ambience.darkFortress, 0, 4);
            return Template.Location.EndingOne;
        }
        await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "You are strong, samurai.");
        await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "But you are no match for me.");
        await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "I will show you the true power of darkness.");
        await Template.ƒS.Speech.tell(Template.characters.player, "You may be strong, but I will not give up.");
        await Template.ƒS.Speech.tell(Template.characters.player, "I possess the power of the celestial orb.");
        await Template.ƒS.Speech.tell(Template.characters.player, "I will defeat you and save this land.");
        await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "You truly think so?");
        await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "You have no idea what it requires to really defeat me.");
        await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "Guards, bring me the the prisoner.");
        await Template.ƒS.Character.animate(Template.characters.aiko, Template.characters.aiko.pose.default, Template.slideAnimation({
            _xStart: 110,
            _xEnd: 60,
            _yStart: 110,
            _yEnd: 110,
            _duration: 5
        }));
        await Template.ƒS.Speech.tell(Template.characters.player, "Aiko, are you alright?");
        await Template.ƒS.Speech.tell(Template.characters.aiko, `${Template.dataForSave.playerName}, you came to rescue me.`);
        await Template.ƒS.Speech.tell(Template.characters.aiko, "I knew you would come.");
        await Template.ƒS.Speech.tell(Template.characters.player, "I will get you out of here.");
        await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "You will do no such thing.");
        await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "You will have to make a choice.");
        await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "The celestial orb indeed has the power to defeat me.");
        await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "But it does not only require a lot of power, but also a great sacrifice.");
        await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "The orb requires a life to be used.");
        await Template.ƒS.Speech.tell(Template.characters.player, "If thats what it takes to save Aiko, I will do it.");
        await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "You are truly a brave warrior.");
        await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "But thats not how it works.");
        await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "The orb requires a life, but not yours.");
        await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "It requires the life of someone you truly love.");
        await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "Pure love is the only thing that can defeat me.");
        await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "So tell me, samurai...");
        await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "Are you willing to sacrifice the one you love to save the land?");
        let possibleOptions = {
            useOrb: "Use the Celestial Orb",
            saveAiko: "Save Aiko",
        };
        let decisionRequest = await Template.ƒS.Menu.getInput(possibleOptions, "inputChoices");
        switch (decisionRequest) {
            case possibleOptions.useOrb:
                await Template.ƒS.Speech.tell(Template.characters.aiko, "My love, you must do it.");
                await Template.ƒS.Speech.tell(Template.characters.aiko, "This is our destiny.");
                await Template.ƒS.Speech.tell(Template.characters.player, "But how can I go on without you?");
                await Template.ƒS.Speech.tell(Template.characters.aiko, "I will always be with you.");
                await Template.ƒS.Speech.tell(Template.characters.aiko, "Only due to our love, we can defeat the darkness.");
                await Template.ƒS.Speech.tell(Template.characters.player, "I will never forget you.");
                await Template.ƒS.Speech.tell(Template.characters.player, "My love for you will never die.");
                await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "No...");
                await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "This cannot be.");
                await Template.ƒS.Speech.tell(Template.characters.player, "You brought so much pain to this land.");
                await Template.ƒS.Speech.tell(Template.characters.player, "But now it is over.");
                if (Template.dataForSave.mana < 60) {
                    await Template.ƒS.Speech.tell(Template.characters.player, "What is happening?");
                    await Template.ƒS.Character.animate(Template.characters.player, Template.characters.player.pose.default, Template.colorAnimation({
                        _startColor: new Template.ƒ.Color(1, 1, 1, 1),
                        _endColor: new Template.ƒ.Color(0.5, 0.5, 0.5, 1),
                        _duration: 2,
                    }));
                    await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "Haha, you fool.");
                    await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "Such a strong warrior, but you lack the power to handle the orb.");
                    await Template.ƒS.Speech.tell(Template.characters.player, "No, this cannot be.");
                    await Template.ƒS.Character.animate(Template.characters.player, Template.characters.player.pose.default, Template.colorAnimation({
                        _startColor: new Template.ƒ.Color(0.5, 0.5, 0.5, 1),
                        _endColor: new Template.ƒ.Color(0, 0, 0, 1),
                        _duration: 2,
                    }));
                    Template.ƒS.Character.hideAll();
                    Template.ƒS.Sound.fade(Template.audio.ambience.darkFortress, 0, 4);
                    return Template.Location.EndingTwo;
                }
                else if (Template.dataForSave.quests.theLight.questState === 'completed') {
                    await Template.ƒS.Character.show(Template.characters.theLight, Template.characters.theLight.pose.default, Template.ƒS.positionPercent(70, 110));
                    await Template.ƒS.update(2);
                    await Template.ƒS.Speech.tell(Template.characters.theLight, `${Template.dataForSave.playerName}, Aiko. Your love is truly pure.`);
                    await Template.ƒS.Speech.tell(Template.characters.theLight, "You have proven yourself worthy.");
                    await Template.ƒS.Speech.tell(Template.characters.theLight, "Since you have helped me to restore my power, I am able to bring balance to this land.");
                    await Template.ƒS.Speech.tell(Template.characters.theLight, "Together we can use your love to defeat the darkness.");
                    await Template.ƒS.Speech.tell(Template.characters.theLight, "We can concentrate your love and with my power, use the celestrial orb without any sacrifice.");
                    await Template.ƒS.Speech.tell(Template.characters.theLight, "Are you ready?");
                    await Template.ƒS.Speech.tell(Template.characters.player, "I am ready.");
                    await Template.ƒS.Speech.tell(Template.characters.aiko, "Lets end this.");
                    await Template.ƒS.Speech.tell(Template.characters.theLight, "Close your eyes.");
                    Template.ƒS.Sound.fade(Template.audio.ambience.darkFortress, 0, 4);
                    return Template.Location.EndingFive;
                }
                else {
                    await Template.ƒS.Speech.tell(Template.characters.player, "With the power of the celestial orb, I will defeat you.");
                    await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "No...");
                    await Template.ƒS.Speech.tell(Template.characters.player, "Aiko, I will never forget you.");
                    await Template.ƒS.Speech.tell(Template.characters.aiko, "I know...");
                    await Template.ƒS.Location.show(Template.locations.endingTwo);
                    await Template.ƒS.update(3);
                    await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "Aaaarrrh...");
                    Template.ƒS.Character.hideAll();
                    Template.ƒS.Sound.fade(Template.audio.ambience.darkFortress, 0, 4);
                    return Template.Location.EndingFour;
                }
            case possibleOptions.saveAiko:
                await Template.ƒS.Speech.tell(Template.characters.player, "No...");
                await Template.ƒS.Speech.tell(Template.characters.player, "I cannot do it.");
                await Template.ƒS.Speech.tell(Template.characters.player, "I did not come this far to lose you.");
                await Template.ƒS.Speech.tell(Template.characters.aiko, "My love, we will find another way.");
                await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "Haha, I knew you would not have what it takes.");
                await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "You will never defeat me.");
                await Template.ƒS.Speech.tell(Template.characters.player, "It does not matter.");
                await Template.ƒS.Speech.tell(Template.characters.player, "There is nothing stronger than love.");
                await Template.ƒS.Speech.tell(Template.characters.player, "And if this is what it takes to save her, I will do it.");
                await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "Hahaha. You will regret this.");
                await Template.ƒS.Speech.tell(Template.characters.player, "I will never regret fighting for love.");
                await Template.ƒS.Speech.tell(Template.characters.player, "Aiko, come with me. We need to leave this place.");
                await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "You may have weakened me, but you will never defeat me.");
                await Template.ƒS.Speech.tell(Template.characters.kingAkuma, "I will return and destroy you all.");
                await Template.ƒS.Character.hide(Template.characters.aiko);
                await Template.ƒS.Character.hide(Template.characters.player);
                await Template.ƒS.update(1);
                Template.ƒS.Character.hideAll();
                Template.ƒS.Sound.fade(Template.audio.ambience.darkFortress, 0, 4);
                return Template.Location.EndingThree;
        }
    }
    Template.DarkFortress = DarkFortress;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function DestroyedVillage() {
        console.log("Village Destroyed Scene starting");
        console.log(Template.dataForSave);
        Template.handleMeterContainerVisibility({ _showMeterContainer: true });
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.play(Template.audio.ambience.destroyedVillage, 0.1, true);
        await Template.ƒS.Location.show(Template.locations.destroyedVillage);
        await Template.ƒS.update(Template.transitions.pix1.duration, Template.transitions.pix1.alpha, Template.transitions.pix1.edge);
        if (!Template.dataForSave.visitedScenes.includes(Template.Location.DestroyedVillage)) {
            Template.dataForSave.visitedScenes.push(Template.Location.DestroyedVillage);
            await Template.ƒS.Character.animate(Template.characters.player, Template.characters.player.pose.default, Template.slideAnimation({
                _xStart: -50,
                _xEnd: 0,
                _yStart: 110,
                _yEnd: 110,
                _duration: 2
            }));
            await Template.ƒS.Speech.tell(Template.characters.player, "Aiko, Grandfather, where are you?");
            await Template.ƒS.Character.animate(Template.characters.masterKazuki, Template.characters.masterKazuki.pose.default, Template.slideAnimation({
                _xStart: 130,
                _xEnd: 70,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            await Template.ƒS.Speech.tell(Template.characters.player, "Grandfather, are you alright?");
            await Template.ƒS.Speech.tell(Template.characters.player, "Where is Aiko? Is she safe?");
            await Template.ƒS.Speech.tell(Template.characters.masterKazuki, `I am sorry, ${Template.dataForSave.playerName}. Aiko is gone. She was taken by the dark forces.`);
            await Template.ƒS.Speech.tell(Template.characters.masterKazuki, "We fought bravely, but we were outnumbered. I was able to escape, but Aiko was captured.");
            await Template.ƒS.Speech.tell(Template.characters.masterKazuki, `I am sorry, ${Template.dataForSave.playerName}. I have failed you.`);
            await Template.ƒS.Speech.tell(Template.characters.player, "No, Grandfather. You did everything you could. I will find Aiko and bring her back.");
            await Template.ƒS.Speech.tell(Template.characters.masterKazuki, `Be careful, ${Template.dataForSave.playerName}. The dark forces are strong. You must be prepared for anything.`);
            await Template.ƒS.Speech.tell(Template.characters.masterKazuki, "You must find the ancient orb. Only with its power can you defeat King Akuma and the darkness.");
            await Template.ƒS.Speech.tell(Template.characters.player, "I will find the orb, defeat King Akuma and save Aiko. I promise.");
            await Template.ƒS.Speech.tell(Template.characters.masterKazuki, "The stories say that the orb is hidden somewhere in Yamato. Your journey will be long and dangerous.");
            await Template.ƒS.Speech.tell(Template.characters.masterKazuki, "Head to the sacred forest to begin your journey.");
            await Template.ƒS.Speech.tell(Template.characters.masterKazuki, `Go now, ${Template.dataForSave.playerName}. Find the orb and save Aiko.`);
            await Template.ƒS.Speech.tell(Template.characters.player, "I will not fail you, Grandfather. I will save Aiko and bring her back.");
        }
        else if (Template.dataForSave.quests.mountainPass.questState === 'accepted' && !Template.dataForSave.quests.mountainPass.hasInteractedWithRequiredCharacter) {
            await Template.ƒS.Character.animate(Template.characters.player, Template.characters.player.pose.default, Template.slideAnimation({
                _xStart: -50,
                _xEnd: 0,
                _yStart: 110,
                _yEnd: 110,
                _duration: 4
            }));
            await Template.ƒS.update(1);
            await Template.ƒS.Speech.tell(Template.characters.player, "Hm, I need to find a way to clear the blocked path on the mountain pass.");
            await Template.ƒS.Character.animate(Template.characters.masterKazuki, Template.characters.masterKazuki.pose.default, Template.slideAnimation({
                _xStart: 130,
                _xEnd: 65,
                _yStart: 110,
                _yEnd: 110,
                _duration: 4
            }));
            await Template.ƒS.update(1);
            await Template.ƒS.Speech.tell(Template.characters.masterKazuki, `${Template.dataForSave.playerName}, you are back. I hope your journey is going well and Aiko will be saved soon.`);
            await Template.ƒS.Speech.tell(Template.characters.player, "I am trying my best, Grandfather. But I am stuck here. I need to find a way to clear the blocked path on the mountain pass.");
            await Template.ƒS.Speech.tell(Template.characters.masterKazuki, "I see. You need help with that. Takeshi survived the attack and is here in the village. He is a strong warrior and knows the mountain pass well.");
            await Template.ƒS.Speech.tell(Template.characters.masterKazuki, "He might be able to help you.");
            await Template.ƒS.Character.show(Template.characters.takeshi, Template.characters.takeshi.pose.default, Template.ƒS.positionPercent(80, 110));
            await Template.ƒS.Character.animate(Template.characters.takeshi, Template.characters.takeshi.pose.default, Template.slideAnimation({
                _xStart: 130,
                _xEnd: 85,
                _yStart: 110,
                _yEnd: 110,
                _duration: 4
            }));
            await Template.ƒS.update(1);
            await Template.ƒS.Speech.tell(Template.characters.takeshi, `I am here to help you, ${Template.dataForSave.playerName}. I know the mountain pass well. Togheter we can find a way to clear the path.`);
            Template.dataForSave.quests.mountainPass.hasInteractedWithRequiredCharacter = true;
            await Template.ƒS.Speech.tell(Template.characters.takeshi, "Meet me at the mountain pass.");
            await Template.ƒS.Character.animate(Template.characters.takeshi, Template.characters.takeshi.pose.default, Template.slideAnimation({
                _xStart: 85,
                _xEnd: 130,
                _yStart: 110,
                _yEnd: 110,
                _duration: 4
            }));
            await Template.ƒS.update(1);
        }
        else {
            await Template.ƒS.Character.animate(Template.characters.player, Template.characters.player.pose.default, Template.slideAnimation({
                _xStart: -50,
                _xEnd: 0,
                _yStart: 110,
                _yEnd: 110,
                _duration: 4
            }));
            await Template.ƒS.update();
            await Template.ƒS.Speech.tell(Template.characters.player, "There is nothing I can do here. I should continue my journey.");
        }
        Template.ƒS.Speech.hide();
        let possibleLocations = {
            SacredForest: formatEnumValue(Template.Location.SacredForest),
        };
        let nextLocationRequest = await Template.ƒS.Menu.getInput(possibleLocations, "inputChoices");
        Template.ƒS.Sound.fade(Template.audio.ambience.destroyedVillage, 0, 4);
        switch (nextLocationRequest) {
            case possibleLocations.SacredForest:
                Template.ƒS.Character.hideAll();
                return Template.Location.SacredForest;
        }
    }
    Template.DestroyedVillage = DestroyedVillage;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function EnchantedLake() {
        console.log("EnchantedLake Scene starting");
        Template.handleMeterContainerVisibility({ _showMeterContainer: true });
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.play(Template.audio.ambience.enchantedLake, 0.6, true);
        await Template.ƒS.Location.show(Template.locations.enchantedLake);
        await Template.ƒS.update(Template.transitions.pix1.duration, Template.transitions.pix1.alpha, Template.transitions.pix1.edge);
        if (!Template.dataForSave.visitedScenes.includes(Template.Location.EnchantedLake)) {
            Template.dataForSave.visitedScenes.push(Template.Location.EnchantedLake);
        }
        await Template.ƒS.Character.animate(Template.characters.player, Template.characters.player.pose.default, Template.slideAnimation({
            _xStart: -50,
            _xEnd: 0,
            _yStart: 110,
            _yEnd: 110,
            _duration: 5
        }));
        if (Template.dataForSave.quests.yuna.questState === 'accepted' && Template.ƒS.Inventory.getAmount(Template.items.yunasAmulet) === 0) {
            await Template.ƒS.Character.animate(Template.characters.yuna, Template.characters.yuna.pose.default, Template.slideAnimation({
                _xStart: 115,
                _xEnd: 80,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            await Template.ƒS.Speech.tell(Template.characters.yuna, "Greetings, traveler. Have you found my amulet?");
            await Template.ƒS.Speech.tell(Template.characters.player, "I am sorry, but I have not found it yet.");
            await Template.ƒS.Speech.tell(Template.characters.yuna, "You will find my amulet in the Abandoned Temple. Please bring it back to me.");
        }
        if (Template.dataForSave.quests.yuna.questState === 'accepted' && Template.ƒS.Inventory.getAmount(Template.items.yunasAmulet) > 0) {
            Template.dataForSave.quests.yuna.questState = 'completed';
            await Template.ƒS.Character.animate(Template.characters.yuna, Template.characters.yuna.pose.default, Template.slideAnimation({
                _xStart: 115,
                _xEnd: 80,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            await Template.ƒS.Speech.tell(Template.characters.yuna, "Greetings, traveler. Have you found my amulet?");
            await Template.ƒS.Speech.tell(Template.characters.player, "Yes, I have found it.");
            await Template.ƒS.Speech.tell(Template.characters.yuna, "Thank you for finding my amulet.");
            await Template.ƒS.Speech.tell(Template.characters.yuna, "Here, take this as a reward.");
            Template.ƒS.Inventory.add(Template.items.manaGem);
            Template.ƒS.Inventory.add(Template.items.healthPotion);
            await Template.ƒS.Speech.tell("", "Mana Gem was added to your inventory.");
            await Template.ƒS.Speech.tell("", "Health Potion was added to your inventory.");
            await Template.ƒS.Speech.tell(Template.characters.yuna, "I wish you good luck on your journey.");
            await Template.ƒS.Speech.tell(Template.characters.yuna, "Maybe our paths will cross again.");
            await Template.ƒS.Character.animate(Template.characters.yuna, Template.characters.yuna.pose.default, Template.slideAnimation({
                _xStart: 80,
                _xEnd: 115,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            Template.ƒS.Character.hide(Template.characters.yuna);
            await Template.ƒS.update(1);
        }
        if (Template.dataForSave.quests.yuna.questState !== 'accepted' && Template.dataForSave.quests.theLight.questState === 'open') {
            await Template.ƒS.Speech.tell(Template.characters.player, "Whats that?");
            await Template.ƒS.Speech.tell(Template.characters.player, "I can feel a presence nearby.");
            await Template.ƒS.Character.show(Template.characters.theLight, Template.characters.theLight.pose.default, Template.ƒS.positionPercent(70, 110));
            await Template.ƒS.update(2);
            await Template.ƒS.Speech.tell(Template.characters.theLight, "Hello...");
            await Template.ƒS.Speech.tell(Template.characters.player, "Who are you?");
            await Template.ƒS.Speech.tell(Template.characters.theLight, "I am the Light. One of the ancient spirits of this land.");
            await Template.ƒS.Speech.tell(Template.characters.theLight, "I need your help.");
            await Template.ƒS.Speech.tell(Template.characters.player, "What do you need?");
            await Template.ƒS.Speech.tell(Template.characters.theLight, "Part of my spirit has been taken from me. I need you to find it and bring it back to me.");
            await Template.ƒS.Speech.tell(Template.characters.theLight, "Without it, I am forced to stay here and cannot bring balance to this land.");
            await Template.ƒS.Speech.tell(Template.characters.theLight, "Will you help me?");
            let decisionOptions = {
                accept: "Accept",
                decline: "Decline"
            };
            let questDecision = await Template.ƒS.Menu.getInput(decisionOptions, "inputChoices");
            if (questDecision === decisionOptions.accept) {
                Template.dataForSave.quests.theLight.questState = 'accepted';
                await Template.ƒS.Speech.tell(Template.characters.player, "Of course, I will help you.");
                await Template.ƒS.Speech.tell("", `Quest: ${Template.quests.theLight.name} was added.`);
                await Template.ƒS.Speech.tell(Template.characters.theLight, "Thank you. You will find my spirit in the Cursed Cave.");
                await Template.ƒS.Speech.tell(Template.characters.theLight, "Its a hidden place, guarded by dark creatures.");
                await Template.ƒS.Speech.tell(Template.characters.theLight, "My presence will guide you there.");
                Template.ƒS.Speech.hide();
                Template.ƒS.Character.hideAll();
                Template.ƒS.Sound.fade(Template.audio.ambience.enchantedLake, 0, 4);
                return Template.Location.CursedCave;
            }
            else {
                Template.dataForSave.quests.theLight.questState = 'declined';
                await Template.ƒS.Speech.tell(Template.characters.player, "I am sorry, but I cannot help you.");
                await Template.ƒS.Speech.tell(Template.characters.player, "I must continue my journey to defeat King Akuma and save my wife.");
                await Template.ƒS.Speech.tell(Template.characters.theLight, "So be it.");
                await Template.ƒS.Speech.tell(Template.characters.theLight, "Your fate is in your hands now.");
                Template.ƒS.Character.hide(Template.characters.theLight);
                await Template.ƒS.update(2);
            }
        }
        if (Template.dataForSave.quests.theLight.questState === 'accepted' &&
            Template.ƒS.Inventory.getAmount(Template.items.spiritEssence) > 0) {
            Template.dataForSave.quests.theLight.questState = 'completed';
            await Template.ƒS.Character.show(Template.characters.theLight, Template.characters.theLight.pose.default, Template.ƒS.positionPercent(70, 110));
            await Template.ƒS.update(2);
            await Template.ƒS.Speech.tell(Template.characters.theLight, "You have found my spirit. Thank you.");
            await Template.ƒS.Speech.tell(Template.characters.theLight, "With this, I can bring balance to this land once again.");
            await Template.ƒS.Speech.tell(Template.characters.theLight, "Here, take this as a reward.");
            Template.ƒS.Inventory.add(Template.items.manaGem);
            Template.ƒS.Inventory.add(Template.items.healthPotion);
            await Template.ƒS.Speech.tell("", "Mana Gem was added to your inventory.");
            await Template.ƒS.Speech.tell("", "Health Potion was added to your inventory.");
            await Template.ƒS.Speech.tell(Template.characters.theLight, "We will meet again...");
            Template.ƒS.Character.hide(Template.characters.theLight);
            await Template.ƒS.update(2);
        }
        await Template.ƒS.Speech.tell(Template.characters.player, "Lets continue the journey.");
        Template.ƒS.Speech.hide();
        let possibleLocations = {
            SacredForest: formatEnumValue(Template.Location.SacredForest),
        };
        // This is a placeholder for the actual implementation
        if (Template.dataForSave.quests.theLight.questState !== 'open' &&
            Template.dataForSave.quests.theLight.questState !== 'declined') {
            possibleLocations["CursedCave"] = formatEnumValue(Template.Location.CursedCave);
        }
        let nextLocationRequest = await Template.ƒS.Menu.getInput(possibleLocations, "inputChoices");
        Template.ƒS.Character.hideAll();
        Template.ƒS.Sound.fade(Template.audio.ambience.enchantedLake, 0, 4);
        switch (nextLocationRequest) {
            case possibleLocations.SacredForest:
                return Template.Location.SacredForest;
            case possibleLocations.CursedCave:
                return Template.Location.CursedCave;
        }
    }
    Template.EnchantedLake = EnchantedLake;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function EnemyCamp() {
        console.log("EnemyCamp Scene starting");
        Template.handleMeterContainerVisibility({ _showMeterContainer: true });
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.play(Template.audio.ambience.enemyCamp, 0.2, true);
        await Template.ƒS.Location.show(Template.locations.enemyCamp);
        await Template.ƒS.update(Template.transitions.pix1.duration, Template.transitions.pix1.alpha, Template.transitions.pix1.edge);
        await Template.ƒS.Character.animate(Template.characters.player, Template.characters.player.pose.default, Template.slideAnimation({
            _xStart: -50,
            _xEnd: 0,
            _yStart: 110,
            _yEnd: 110,
            _duration: 5
        }));
        if (!Template.dataForSave.visitedScenes.includes(Template.Location.EnemyCamp)) {
            Template.dataForSave.visitedScenes.push(Template.Location.EnemyCamp);
            await Template.ƒS.Speech.tell(Template.characters.player, "So, I have finally made it to the enemy camp.");
            await Template.ƒS.Speech.tell(Template.characters.player, "I must be careful. The enemies could be hiding everywhere.");
            await Template.ƒS.Speech.tell("...", "Hey, hey you!");
            await Template.ƒS.Speech.tell(Template.characters.player, "Huh? Where is that voice coming from?");
            await Template.ƒS.Speech.tell("...", "Here, the cage to your right.");
            await Template.ƒS.Character.show(Template.characters.merchant, Template.characters.merchant.pose.default, Template.ƒS.positionPercent(70, 110));
            await Template.ƒS.update(1);
            await Template.ƒS.Speech.tell(Template.characters.merchant, "I need your help. We where on our way to the Merchants Outpost, but we where ambushed by the dark forces.");
            await Template.ƒS.Speech.tell(Template.characters.merchant, "They have already killed all of my friends.");
            await Template.ƒS.Speech.tell(Template.characters.merchant, "I am the only one left and there is not much time left for me.");
            await Template.ƒS.Speech.tell(Template.characters.merchant, "Please help me. I need to get to the Merchants Outpost.");
            let possibleOptions = {
                help: "Help the merchant",
                leave: "Leave"
            };
            let nextLocationRequest = await Template.ƒS.Menu.getInput(possibleOptions, "inputChoices");
            switch (nextLocationRequest) {
                case possibleOptions.help:
                    await Template.ƒS.Speech.tell(Template.characters.player, "Dont worry, I will help you.");
                    Template.dataForSave.quests.merchant.questState = "accepted";
                    await Template.ƒS.Speech.tell("", `Quest: ${Template.quests.merchant.name} was added.`);
                    await Template.ƒS.Speech.tell(Template.characters.merchant, "Oh lord, thank you so much. I am forever in your debt.");
                    await Template.ƒS.Speech.tell(Template.characters.merchant, "You should find a key in the camp. One of the enemies must have it.");
                    await Template.ƒS.Speech.tell(Template.characters.merchant, "Please find it and free me.");
                    await Template.ƒS.Speech.tell(Template.characters.player, "I will find the key and free you.");
                    await Template.ƒS.Character.hide(Template.characters.merchant);
                    await Template.ƒS.update(1);
                    await Template.ƒS.Speech.tell(Template.characters.player, "I should find the key to free the merchant.");
                    await Template.ƒS.Character.animate(Template.characters.shadowSkeleton, Template.characters.shadowSkeleton.pose.default, Template.slideAnimation({
                        _xStart: 80,
                        _xEnd: 80,
                        _yStart: 200,
                        _yEnd: 110,
                        _duration: 5
                    }));
                    await Template.ƒS.Speech.tell(Template.characters.shadowSkeleton, "Ah, another foolish samurai. You will never leave this place alive!");
                    await Template.ƒS.Speech.tell(Template.characters.shadowSkeleton, "You will die by my hand!");
                    let winner = await Template.battleMode({
                        _fighterOne: Template.characters.player,
                        _fighterTwo: Template.characters.shadowSkeleton,
                        _currentlyPlayingAudio: {
                            _url: Template.audio.ambience.enemyCamp,
                            _volume: 0.2,
                            _loop: true
                        },
                        _hideEnemy: true,
                        _reward: Template.items.key,
                        _enemyReusable: true
                    });
                    if (winner.name !== Template.characters.player.name) {
                        Template.ƒS.Sound.fade(Template.audio.ambience.abandonedTemple, 0, 4);
                        return Template.Location.EndingOne;
                    }
                    await Template.ƒS.Speech.tell(Template.characters.player, "I have found the key. I should free the merchant now.");
                    await Template.ƒS.Character.show(Template.characters.merchant, Template.characters.merchant.pose.default, Template.ƒS.positionPercent(70, 110));
                    await Template.ƒS.update(1);
                    await Template.ƒS.Speech.tell(Template.characters.player, "I have found the key. Lets get you out of here.");
                    await Template.ƒS.Speech.tell(Template.characters.merchant, "Thank you so much. You saved my live.");
                    await Template.ƒS.Speech.tell(Template.characters.merchant, "Follow me. I will guide you to the Merchants Outpost.");
                    Template.dataForSave.quests.merchant.questState = "completed";
                    Template.ƒS.Character.hideAll();
                    Template.ƒS.Sound.fade(Template.audio.ambience.enemyCamp, 0, 4);
                    return Template.Location.MerchantsOutpost;
                case possibleOptions.leave:
                    Template.dataForSave.quests.merchant.questState = "declined";
                    await Template.ƒS.Speech.tell(Template.characters.player, "I am sorry, but I cannot help you.");
                    await Template.ƒS.Speech.tell(Template.characters.player, "I cannot risk my life for a stranger.");
                    await Template.ƒS.Speech.tell(Template.characters.player, "But I will pray for you and your friends.");
                    await Template.ƒS.Speech.tell(Template.characters.merchant, "So be it. I will wait for my end.");
                    Template.ƒS.Character.hide(Template.characters.merchant);
                    await Template.ƒS.update(2);
                    break;
            }
        }
        await Template.ƒS.Speech.tell(Template.characters.player, "This place is dangerous. I should leave as soon as possible.");
        Template.ƒS.Speech.hide();
        let possibleLocations = {
            mountainPass: formatEnumValue(Template.Location.MountainPass),
        };
        // This is a placeholder for the actual implementation
        if (Template.dataForSave.quests.merchant.questState === 'completed') {
            possibleLocations[`merchantsOutpost`] = formatEnumValue(Template.Location.MerchantsOutpost);
        }
        let nextLocationRequest = await Template.ƒS.Menu.getInput(possibleLocations, "inputChoices");
        Template.ƒS.Character.hideAll();
        Template.ƒS.Sound.fade(Template.audio.ambience.enemyCamp, 0, 4);
        switch (nextLocationRequest) {
            case possibleLocations.mountainPass:
                return Template.Location.MountainPass;
            case possibleLocations.merchantsOutpost:
                return Template.Location.MerchantsOutpost;
        }
    }
    Template.EnemyCamp = EnemyCamp;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function GameOver() {
        console.log("MountainPass Scene starting");
        Template.handleMeterContainerVisibility({ _showMeterContainer: false });
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.gameOver);
        await Template.ƒS.update(Template.transitions.pix1.duration, Template.transitions.pix1.alpha, Template.transitions.pix1.edge);
        Template.ƒS.Text.print("<h2>GAME OVER</h2><p>Thanks for playing the game. You can start a new game by refreshing the page or press R </p>");
    }
    Template.GameOver = GameOver;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function HiddenShrine() {
        console.log("HiddenShrine Scene starting");
        Template.handleMeterContainerVisibility({ _showMeterContainer: true });
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.play(Template.audio.ambience.hiddenShrine, 0.1, true);
        await Template.ƒS.Location.show(Template.locations.hiddenShrine);
        await Template.ƒS.update(Template.transitions.pix1.duration, Template.transitions.pix1.alpha, Template.transitions.pix1.edge);
        await Template.ƒS.Character.animate(Template.characters.player, Template.characters.player.pose.default, Template.slideAnimation({
            _xStart: -50,
            _xEnd: 0,
            _yStart: 110,
            _yEnd: 110,
            _duration: 5
        }));
        if (!Template.dataForSave.visitedScenes.includes(Template.Location.HiddenShrine)) {
            Template.dataForSave.visitedScenes.push(Template.Location.HiddenShrine);
            await Template.ƒS.Speech.tell(Template.characters.player, "So this must be the hidden shrine. I should be careful.");
            await Template.ƒS.Speech.tell(Template.characters.player, "All the stories I have heard about this place. I must be prepared for anything.");
            await Template.ƒS.Character.show(Template.characters.guardianSpirit, Template.characters.guardianSpirit.pose.default, Template.ƒS.positionPercent(80, 110));
            await Template.ƒS.update(1);
            await Template.ƒS.Speech.tell(Template.characters.guardianSpirit, "Welcome, traveler. You have found the hidden shrine.");
            await Template.ƒS.Speech.tell(Template.characters.player, "Who are you?");
            await Template.ƒS.Speech.tell(Template.characters.guardianSpirit, "I am the guardian spirit of this shrine. I have been waiting for you.");
            await Template.ƒS.Speech.tell(Template.characters.player, "Why me?");
            await Template.ƒS.Speech.tell(Template.characters.guardianSpirit, "You have been chosen to carry the light and restore balance to this land.");
            await Template.ƒS.Speech.tell(Template.characters.player, "What do you mean?");
            await Template.ƒS.Speech.tell(Template.characters.guardianSpirit, "The darkness has taken over the land. You must find the orb and bring peace and light back to the world.");
            await Template.ƒS.Speech.tell(Template.characters.player, "Where can I find the orb?");
            await Template.ƒS.Speech.tell(Template.characters.guardianSpirit, "The orb is hidden in this shrine. I will guide you to it.");
            await Template.ƒS.Speech.tell(Template.characters.guardianSpirit, "But first you must prove yourself worthy.");
            Template.dataForSave.quests.guardianSpirit.questState = "accepted";
            await Template.ƒS.Speech.tell("", `Quest: ${Template.quests.guardianSpirit.name} was added.`);
        }
        if (Template.ƒS.Inventory.getAmount(Template.items.celestialOrb) === 0) {
            await Template.ƒS.Character.show(Template.characters.guardianSpirit, Template.characters.guardianSpirit.pose.default, Template.ƒS.positionPercent(80, 110));
            await Template.ƒS.update(1);
            await Template.ƒS.Speech.tell(Template.characters.guardianSpirit, "Tell me, are you ready to prove your strength?");
            let guardianSpiritOptions = {
                ready: "I am ready.",
                notReady: "I am not ready.",
            };
            let guardianSpiritDecision = await Template.ƒS.Menu.getInput(guardianSpiritOptions, "inputChoices");
            switch (guardianSpiritDecision) {
                case guardianSpiritOptions.ready:
                    await Template.ƒS.Speech.tell(Template.characters.player, "I am ready.");
                    await Template.ƒS.Speech.tell(Template.characters.player, "May the light guide me.");
                    await Template.ƒS.Speech.tell(Template.characters.guardianSpirit, "Good. Let us begin.");
                    let winner = await Template.battleMode({
                        _fighterOne: Template.characters.player,
                        _fighterTwo: Template.characters.guardianSpirit,
                        _currentlyPlayingAudio: {
                            _url: Template.audio.ambience.hiddenShrine,
                            _volume: 0.1,
                            _loop: true
                        },
                        _hideEnemy: false,
                        _reward: Template.items.celestialOrb
                    });
                    if (winner.name !== Template.characters.player.name) {
                        Template.ƒS.Sound.fade(Template.audio.ambience.hiddenShrine, 0, 4);
                        return Template.Location.EndingOne;
                    }
                    Template.dataForSave.quests.guardianSpirit.questState = "completed";
                    await Template.ƒS.Speech.tell(Template.characters.guardianSpirit, "You have proven yourself worthy.");
                    await Template.ƒS.Speech.tell(Template.characters.guardianSpirit, "The orb is yours. Take it and bring light back to this land.");
                    await Template.ƒS.Speech.tell(Template.characters.guardianSpirit, "My time here is done. I will return to the spirit realm.");
                    await Template.ƒS.Speech.tell(Template.characters.guardianSpirit, "Now go, and fulfill your destiny.");
                    await Template.ƒS.Speech.tell(Template.characters.player, "I will not fail.");
                    break;
                case guardianSpiritOptions.notReady:
                    await Template.ƒS.Speech.tell(Template.characters.player, "I am not ready.");
                    await Template.ƒS.Speech.tell(Template.characters.guardianSpirit, "Very well. Return when you are ready.");
                    break;
            }
        }
        else {
            await Template.ƒS.Speech.tell(Template.characters.player, "I have already found the orb. I should continue my journey.");
        }
        Template.ƒS.Speech.hide();
        let possibleLocations = {
            mountainPass: formatEnumValue(Template.Location.MountainPass),
        };
        let nextLocationRequest = await Template.ƒS.Menu.getInput(possibleLocations, "inputChoices");
        Template.ƒS.Character.hideAll();
        Template.ƒS.Sound.fade(Template.audio.ambience.hiddenShrine, 0, 4);
        switch (nextLocationRequest) {
            case possibleLocations.mountainPass:
                return Template.Location.MountainPass;
        }
    }
    Template.HiddenShrine = HiddenShrine;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function MerchantsOutpost() {
        console.log("MerchantsOutpost Scene starting");
        Template.handleMeterContainerVisibility({ _showMeterContainer: true });
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.play(Template.audio.ambience.merchantsOutpost, 0.1, true);
        await Template.ƒS.Location.show(Template.locations.merchantsOutpost);
        await Template.ƒS.update(Template.transitions.pix1.duration, Template.transitions.pix1.alpha, Template.transitions.pix1.edge);
        if (!Template.dataForSave.visitedScenes.includes(Template.Location.MerchantsOutpost)) {
            Template.dataForSave.visitedScenes.push(Template.Location.MerchantsOutpost);
            await Template.ƒS.Character.show(Template.characters.player, Template.characters.player.pose.default, Template.ƒS.positionPercent(0, 110));
            await Template.ƒS.Character.show(Template.characters.merchant, Template.characters.merchant.pose.default, Template.ƒS.positionPercent(80, 110));
            await Template.ƒS.update(1);
            await Template.ƒS.Speech.tell(Template.characters.merchant, "Thanks again!");
            await Template.ƒS.Speech.tell(Template.characters.merchant, "Here, take this!");
            Template.ƒS.Inventory.add(Template.items.manaGem);
            await Template.ƒS.Speech.tell("", `${Template.items.manaGem.name} was added to your inventory`);
            await Template.ƒS.Speech.tell(Template.characters.merchant, "May it help you on your journey.");
            await Template.ƒS.Speech.tell(Template.characters.merchant, "I will stay here for a while. I wish you good luck on your journey.");
            await Template.ƒS.Character.animate(Template.characters.merchant, Template.characters.merchant.pose.default, Template.slideAnimation({
                _xStart: 80,
                _xEnd: 120,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            Template.ƒS.Character.hide(Template.characters.merchant);
            await Template.ƒS.update(1);
            await Template.ƒS.Speech.tell(Template.characters.player, "Another victory for humanity. But now I must continue my journey.");
        }
        else {
            await Template.ƒS.Character.animate(Template.characters.player, Template.characters.player.pose.default, Template.slideAnimation({
                _xStart: -50,
                _xEnd: 0,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            await Template.ƒS.Speech.tell(Template.characters.player, "There is nothing I can do here. I should continue my journey.");
        }
        let possibleLocations = {
            enemyCamp: formatEnumValue(Template.Location.EnemyCamp),
        };
        let nextLocationRequest = await Template.ƒS.Menu.getInput(possibleLocations, "inputChoices");
        Template.ƒS.Character.hideAll();
        Template.ƒS.Sound.fade(Template.audio.ambience.merchantsOutpost, 0, 4);
        switch (nextLocationRequest) {
            case possibleLocations.enemyCamp:
                return Template.Location.EnemyCamp;
        }
    }
    Template.MerchantsOutpost = MerchantsOutpost;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function MountainPass() {
        console.log("MountainPass Scene starting");
        Template.handleMeterContainerVisibility({ _showMeterContainer: true });
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.play(Template.audio.ambience.mountainPass, 0.35, true);
        await Template.ƒS.Location.show(Template.locations.mountainPass);
        await Template.ƒS.update(Template.transitions.pix1.duration, Template.transitions.pix1.alpha, Template.transitions.pix1.edge);
        if (!Template.dataForSave.visitedScenes.includes(Template.Location.MountainPass)) {
            Template.dataForSave.visitedScenes.push(Template.Location.MountainPass);
        }
        if (Template.dataForSave.quests.mountainPass.questState === 'open') {
            await Template.ƒS.Character.animate(Template.characters.player, Template.characters.player.pose.default, Template.slideAnimation({
                _xStart: -50,
                _xEnd: 0,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            await Template.ƒS.Speech.tell(Template.characters.player, "The road seems to be blocked.");
            await Template.ƒS.Speech.tell(Template.characters.player, "If only I could find a way to move this rock.");
            await Template.ƒS.Speech.tell(Template.characters.player, "I need to go back and find help.");
            Template.dataForSave.quests.mountainPass.questState = "accepted";
            await Template.ƒS.Speech.tell("", `Quest: ${Template.quests.mountainPass.name} was added.`);
        }
        else if (Template.dataForSave.quests.mountainPass.questState === 'accepted' && Template.dataForSave.quests.mountainPass.hasInteractedWithRequiredCharacter) {
            await Template.ƒS.Character.show(Template.characters.player, Template.characters.player.pose.default, Template.ƒS.positionPercent(0, 110));
            await Template.ƒS.update(1);
            await Template.ƒS.Character.show(Template.characters.takeshi, Template.characters.takeshi.pose.default, Template.ƒS.positionPercent(80, 110));
            await Template.ƒS.update(1);
            await Template.ƒS.Speech.tell(Template.characters.takeshi, "Lets clear the way.");
            await Template.ƒS.Speech.tell("", `With the help of ${Template.characters.takeshi.name}, you manage to move the rock and continue your journey.`);
            Template.dataForSave.quests.mountainPass.questState = "completed";
            await Template.ƒS.Speech.tell(Template.characters.player, "Thank you.");
            await Template.ƒS.Speech.tell(Template.characters.takeshi, "I will return back to the village to help rebuild, what they destroyed. I will pray for you my friend.");
        }
        else if (Template.dataForSave.quests.mountainPass.questState === 'accepted' && !Template.dataForSave.quests.mountainPass.hasInteractedWithRequiredCharacter) {
            await Template.ƒS.Character.animate(Template.characters.player, Template.characters.player.pose.default, Template.slideAnimation({
                _xStart: -50,
                _xEnd: 0,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            await Template.ƒS.Speech.tell(Template.characters.player, "The road is still blocked. I should find help.");
        }
        else if (Template.dataForSave.quests.defeatKingAkuma.questState === 'open' && Template.ƒS.Inventory.getAmount(Template.items.celestialOrb) > 0) {
            Template.dataForSave.quests.defeatKingAkuma.questState = 'accepted';
            await Template.ƒS.Character.animate(Template.characters.player, Template.characters.player.pose.default, Template.slideAnimation({
                _xStart: -50,
                _xEnd: 0,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            await Template.ƒS.Speech.tell("", `Quest: ${Template.quests.defeatKingAkuma.name} was added.`);
            await Template.ƒS.Speech.tell(Template.characters.player, "So I have finally made it.");
            await Template.ƒS.Speech.tell(Template.characters.player, "The dark fortress is just ahead.");
            await Template.ƒS.Speech.tell(Template.characters.player, "I must prepare myself for the final battle.");
            await Template.ƒS.Speech.tell(Template.characters.player, "I must defeat King Akuma and save the land.");
        }
        else {
            await Template.ƒS.Character.animate(Template.characters.player, Template.characters.player.pose.default, Template.slideAnimation({
                _xStart: -50,
                _xEnd: 0,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            await Template.ƒS.Speech.tell(Template.characters.player, "I have already been here. I should continue my journey.");
        }
        Template.ƒS.Speech.hide();
        let possibleLocations = {
            sacredForest: formatEnumValue(Template.Location.SacredForest),
        };
        // This is a placeholder for the actual implementation
        if (Template.dataForSave.quests.mountainPass.questState === 'completed') {
            possibleLocations[`enemyCamp`] = formatEnumValue(Template.Location.EnemyCamp);
            possibleLocations[`hiddenShrine`] = formatEnumValue(Template.Location.HiddenShrine);
        }
        if (Template.ƒS.Inventory.getAmount(Template.items.celestialOrb) > 0) {
            possibleLocations[`darkFortress`] = formatEnumValue(Template.Location.DarkFortress);
        }
        let nextLocationRequest = await Template.ƒS.Menu.getInput(possibleLocations, "inputChoices");
        Template.ƒS.Character.hideAll();
        Template.ƒS.Sound.fade(Template.audio.ambience.mountainPass, 0, 4);
        switch (nextLocationRequest) {
            case possibleLocations.sacredForest:
                return Template.Location.SacredForest;
            case possibleLocations.enemyCamp:
                return Template.Location.EnemyCamp;
            case possibleLocations.hiddenShrine:
                return Template.Location.HiddenShrine;
            case possibleLocations.darkFortress:
                return Template.Location.DarkFortress;
        }
    }
    Template.MountainPass = MountainPass;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function SacredForest() {
        console.log("SacredForest Scene starting");
        Template.handleMeterContainerVisibility({ _showMeterContainer: true });
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.play(Template.audio.ambience.sacredForest, 0.8, true);
        await Template.ƒS.Location.show(Template.locations.sacredForest);
        await Template.ƒS.update(Template.transitions.pix1.duration, Template.transitions.pix1.alpha, Template.transitions.pix1.edge);
        if (!Template.dataForSave.visitedScenes.includes(Template.Location.SacredForest)) {
            Template.dataForSave.visitedScenes.push(Template.Location.SacredForest);
            await Template.ƒS.Character.animate(Template.characters.player, Template.characters.player.pose.default, Template.slideAnimation({
                _xStart: -50,
                _xEnd: 0,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            await Template.ƒS.Speech.tell(Template.characters.player, "This is the sacred forest. I remember the stories my grandfather told me about this place.");
            await Template.ƒS.Speech.tell(Template.characters.player, "Its said that the forest is a place of great power. The spirits protect it from evil.");
            await Template.ƒS.Character.animate(Template.characters.yuna, Template.characters.yuna.pose.default, Template.slideAnimation({
                _xStart: 115,
                _xEnd: 80,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            await Template.ƒS.Speech.tell(Template.characters.yuna, "Greetings, traveler. I am Yuna, a mystical healer. I sense that you are on a quest.");
            await Template.ƒS.Speech.tell(Template.characters.player, "Yes, my village was attacked by the dark forces of King Akuma. They took my beloved wife Aiko. I must find her and bring her back.");
            await Template.ƒS.Speech.tell(Template.characters.yuna, "I am sorry to hear that. I will ask the spirits of the forest to guide you on your journey.");
            await Template.ƒS.Speech.tell(Template.characters.yuna, "But first, I need your help. I have lost my amulet, a powerful artifact.");
            await Template.ƒS.Speech.tell(Template.characters.yuna, "I need it to perform a ritual to protect the forest. Will you help me find it?");
            let questOptions = {
                accept: "Accept",
                decline: "Decline"
            };
            let questDecision = await Template.ƒS.Menu.getInput(questOptions, "inputChoices");
            if (questDecision === questOptions.accept) {
                Template.dataForSave.quests.yuna.questState = 'accepted';
                await Template.ƒS.Speech.tell(Template.characters.player, "I accept the quest.");
                await Template.ƒS.Speech.tell(Template.characters.yuna, "Thank you, traveler. The amulet is hidden in the Abandoned Temple. Please bring it back to me.");
                await Template.ƒS.Speech.tell("", `Quest: ${Template.quests.yuna.name} was added.`);
                await Template.ƒS.Speech.tell(Template.characters.yuna, "I will wait for you at the Enchanted Lake. May the spirits guide you.");
                await Template.ƒS.Character.animate(Template.characters.yuna, Template.characters.yuna.pose.default, Template.slideAnimation({
                    _xStart: 80,
                    _xEnd: 120,
                    _yStart: 110,
                    _yEnd: 110,
                    _duration: 5
                }));
                await Template.ƒS.Speech.tell(Template.characters.player, "Lets find the amulet and bring it back to Yuna.");
            }
            else {
                Template.dataForSave.quests.yuna.questState = 'declined';
                await Template.ƒS.Speech.tell(Template.characters.player, "I am sorry, but I cannot help you.");
                await Template.ƒS.Speech.tell(Template.characters.yuna, "I understand. Regardless, I will still ask the spirits to guide you on your journey.");
                await Template.ƒS.Speech.tell(Template.characters.yuna, "May you find your beloved wife and bring her back safely.");
                await Template.ƒS.Character.animate(Template.characters.yuna, Template.characters.yuna.pose.default, Template.slideAnimation({
                    _xStart: 80,
                    _xEnd: 120,
                    _yStart: 110,
                    _yEnd: 110,
                    _duration: 5
                }));
                await Template.ƒS.Speech.tell(Template.characters.player, "I need to keep moving. I must find the ancient orb and save Aiko.");
            }
        }
        else {
            await Template.ƒS.Character.animate(Template.characters.player, Template.characters.player.pose.default, Template.slideAnimation({
                _xStart: -50,
                _xEnd: 0,
                _yStart: 110,
                _yEnd: 110,
                _duration: 5
            }));
            await Template.ƒS.Speech.tell(Template.characters.player, "There is nothing I can do here. I should continue my journey.");
        }
        Template.ƒS.Speech.hide();
        let locationOptions = {
            DestroyedVillage: formatEnumValue(Template.Location.DestroyedVillage),
            EnchantedLake: formatEnumValue(Template.Location.EnchantedLake),
            AbandonedTemple: formatEnumValue(Template.Location.AbandonedTemple),
            mountainPass: formatEnumValue(Template.Location.MountainPass),
        };
        let nextLocation = await Template.ƒS.Menu.getInput(locationOptions, "inputChoices");
        Template.ƒS.Character.hideAll();
        Template.ƒS.Sound.fade(Template.audio.ambience.sacredForest, 0, 4);
        switch (nextLocation) {
            case locationOptions.DestroyedVillage:
                return Template.Location.DestroyedVillage;
            case locationOptions.EnchantedLake:
                return Template.Location.EnchantedLake;
            case locationOptions.AbandonedTemple:
                return Template.Location.AbandonedTemple;
            case locationOptions.mountainPass:
                return Template.Location.MountainPass;
        }
    }
    Template.SacredForest = SacredForest;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Village() {
        console.log("Village Scene starting");
        console.log(Template.dataForSave);
        Template.handleMeterContainerVisibility({ _showMeterContainer: false });
        await Template.ƒS.Speech.tell("", "Before you begin with your adventures, would you like to use a custom name for the hero (Hiroshi) of this story?");
        let namingOptions = {
            yes: "Yes",
            no: "No"
        };
        let namingDecision = await Template.ƒS.Menu.getInput(namingOptions, "inputChoices");
        if (namingDecision === namingOptions.yes) {
            await Template.ƒS.Speech.tell("", "Please enter your desired name.");
            Template.dataForSave.playerName = await Template.ƒS.Speech.getInput();
            Template.characters.player.name = Template.dataForSave.playerName;
        }
        Template.dataForSave.visitedScenes.push(Template.Location.Village);
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.fade(Template.audio.ambience.village, 0.05, 2, true);
        await Template.ƒS.Location.show(Template.locations.village);
        await Template.ƒS.update(Template.transitions.pix1.duration, Template.transitions.pix1.alpha, Template.transitions.pix1.edge);
        await Template.ƒS.Character.animate(Template.characters.player, Template.characters.player.pose.default, Template.slideAnimation({
            _xStart: -50,
            _xEnd: 10,
            _yStart: 110,
            _yEnd: 110,
            _duration: 5
        }));
        await Template.ƒS.Speech.tell(Template.characters.player, "Aiko, it is such a beautiful day, isnt it?");
        await Template.ƒS.Character.animate(Template.characters.aiko, Template.characters.aiko.pose.default, Template.slideAnimation({
            _xStart: 110,
            _xEnd: 60,
            _yStart: 110,
            _yEnd: 110,
            _duration: 5
        }));
        await Template.ƒS.Speech.tell(Template.characters.aiko, `Oh yes ${Template.characters.player.name}, it is a beautiful day. I am so happy to be here with you.`);
        await Template.ƒS.Speech.tell(Template.characters.aiko, "I love spending time with you. The village is so peaceful and quiet.");
        await Template.ƒS.Speech.tell(Template.characters.player, "I wish every day could be like this. Just you and me, together.");
        await Template.ƒS.Speech.tell(Template.characters.aiko, `Oh, me too. I love you so much ${Template.characters.player.name}.`);
        await Template.ƒS.Speech.tell(Template.characters.aiko, "But I know it wont be long before you have to leave again. You always long for more adventures.");
        await Template.ƒS.Speech.tell(Template.characters.player, "Oh my love. You know me too well. But as a samurai it is my duty to protect you and the village. And I will do whatever it takes to do so. That is all that matters to me.");
        await Template.ƒS.Character.animate(Template.characters.masterKazuki, Template.characters.masterKazuki.pose.left, Template.slideAnimation({
            _xStart: -50,
            _xEnd: 10,
            _yStart: 110,
            _yEnd: 110,
            _duration: 3
        }));
        await Template.ƒS.Speech.tell(Template.characters.masterKazuki, `${Template.dataForSave.playerName}, Aiko. I have been looking for you. I have urgent news.`);
        await Template.ƒS.Speech.tell(Template.characters.player, "Grandfather, what is it. You look very concerned.");
        await Template.ƒS.Speech.tell(Template.characters.aiko, "Is everthing alright, Master Kazuki?");
        await Template.ƒS.Speech.tell(Template.characters.masterKazuki, "We are in great danger. The village is under attack. King Akumas forces are attacking.  We must prepare for battle.");
        await Template.ƒS.Speech.tell(Template.characters.player, "What? But how is that possible? How where they able to get past the guards?");
        await Template.ƒS.Speech.tell(Template.characters.masterKazuki, "A question I can not answers yet.");
        await Template.ƒS.Speech.tell(Template.characters.masterKazuki, "But we must act fast. We must protect the village. We must protect the people.");
        await Template.ƒS.Character.animate(Template.characters.shadowSkeleton, Template.characters.shadowSkeleton.pose.default, Template.slideAnimation({
            _xStart: 80,
            _xEnd: 80,
            _yStart: 200,
            _yEnd: 110,
            _duration: 5
        }));
        await Template.ƒS.Speech.tell(Template.characters.shadowSkeleton, "We have come to destroy you all. You will not be able to stop us.");
        await Template.ƒS.Speech.tell(Template.characters.player, "Aiko, watch out.");
        await Template.ƒS.Speech.tell(Template.characters.player, "I will handle this. You and Master Kazuki must warn the others.");
        await Template.ƒS.Speech.tell(Template.characters.aiko, "We will. Be careful my love.");
        await Template.ƒS.Character.hide(Template.characters.aiko);
        await Template.ƒS.Character.hide(Template.characters.masterKazuki);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.shadowSkeleton, "I will crush you like a bug. Prepare to die.");
        await Template.ƒS.Character.animate(Template.characters.player, Template.characters.player.pose.default, Template.slideAnimation({
            _xStart: 10,
            _xEnd: 0,
            _yStart: 110,
            _yEnd: 110,
            _duration: 2
        }));
        await Template.ƒS.Speech.tell(Template.characters.player, "I will not let you harm the village. I will protect it with my life.").then(() => Template.ƒS.Text.print("<h2>Battle Mode</h2><p>You will enter the battle mode.</br> Press the Button to Attack. </br> The meter value will be used to determine the damage dealt or received. </br> Keep an eye on your health meter. If it reaches zero, you will lose the battle.</p>"));
        Template.ƒS.Speech.hide();
        Template.handleMeterContainerVisibility({ _showMeterContainer: true });
        ;
        let winner = await Template.battleMode({
            _fighterOne: Template.characters.player,
            _fighterTwo: Template.characters.shadowSkeleton,
            _currentlyPlayingAudio: {
                _url: Template.audio.ambience.village,
                _volume: 0.05,
                _loop: true
            },
            _hideEnemy: true,
            _reward: Template.items.gold,
            _enemyReusable: true
        });
        if (winner.name !== Template.characters.player.name) {
            Template.ƒS.Sound.fade(Template.audio.ambience.village, 0, 4);
            return Template.Location.EndingOne;
        }
        await Template.ƒS.Speech.tell(Template.characters.player, "I must hurry. I must find Aiko and Master Kazuki.");
        Template.ƒS.Speech.hide();
        Template.ƒS.Character.hideAll();
        Template.ƒS.Sound.fade(Template.audio.ambience.village, 0, 4);
        return Template.Location.DestroyedVillage;
    }
    Template.Village = Village;
})(Template || (Template = {}));
// Ending Trigger: Player helped the light to get its spirit back, which enables it to use the celestial orb to save humanity and his love
var Template;
// Ending Trigger: Player helped the light to get its spirit back, which enables it to use the celestial orb to save humanity and his love
(function (Template) {
    async function EndingFive() {
        console.log("EndingFive Scene starting");
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.fade(Template.audio.ambience.village, 0.05, 2, true);
        await Template.ƒS.Location.show(Template.locations.village);
        await Template.ƒS.update(Template.transitions.pix1.duration, Template.transitions.pix1.alpha, Template.transitions.pix1.edge);
        await Template.ƒS.Character.animate(Template.characters.player, Template.characters.player.pose.default, Template.slideAnimation({
            _xStart: -50,
            _xEnd: 0,
            _yStart: 110,
            _yEnd: 110,
            _duration: 4
        }));
        await Template.ƒS.Character.animate(Template.characters.masterKazuki, Template.characters.masterKazuki.pose.default, Template.slideAnimation({
            _xStart: 130,
            _xEnd: 70,
            _yStart: 110,
            _yEnd: 110,
            _duration: 4
        }));
        await Template.ƒS.Speech.tell(Template.characters.masterKazuki, `${Template.dataForSave.playerName}, you made it back.`);
        await Template.ƒS.Speech.tell(Template.characters.masterKazuki, "Where is Aiko? Did you find her?");
        await Template.ƒS.Character.animate(Template.characters.aiko, Template.characters.aiko.pose.left, Template.slideAnimation({
            _xStart: -30,
            _xEnd: 0,
            _yStart: 110,
            _yEnd: 110,
            _duration: 4
        }));
        await Template.ƒS.Speech.tell(Template.characters.aiko, "Yes, Master Kazuki. I am here. Hiroshi saved me.");
        await Template.ƒS.Speech.tell(Template.characters.masterKazuki, "Aiko, my dear. I am so glad you are safe.");
        await Template.ƒS.Speech.tell(Template.characters.masterKazuki, "Come, let us go. We have much to celebrate.");
        Template.ƒS.Character.hideAll();
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.tell("", "The darkness has been banished from the land and the people of Yamato are saved.");
        await Template.ƒS.Speech.tell("", "The village was rebuilt and the people are living in peace once again.");
        await Template.ƒS.Speech.tell("", "Hiroshi and Aiko were able to live happily ever after till the end of their days.");
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.fade(Template.audio.ambience.village, 0, 4);
        return Template.Location.GameOver;
    }
    Template.EndingFive = EndingFive;
})(Template || (Template = {}));
// Ending Trigger: Player decides to use the celestial orb in order to save humanity but sacrifices his love
var Template;
// Ending Trigger: Player decides to use the celestial orb in order to save humanity but sacrifices his love
(function (Template) {
    async function EndingFour() {
        console.log("EndingFour Scene starting");
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.fade(Template.audio.ambience.village, 0.05, 2, true);
        await Template.ƒS.Location.show(Template.locations.village);
        await Template.ƒS.update(Template.transitions.pix1.duration, Template.transitions.pix1.alpha, Template.transitions.pix1.edge);
        await Template.ƒS.Character.animate(Template.characters.player, Template.characters.player.pose.default, Template.slideAnimation({
            _xStart: -50,
            _xEnd: 0,
            _yStart: 110,
            _yEnd: 110,
            _duration: 4
        }));
        await Template.ƒS.Character.animate(Template.characters.masterKazuki, Template.characters.masterKazuki.pose.default, Template.slideAnimation({
            _xStart: 130,
            _xEnd: 70,
            _yStart: 110,
            _yEnd: 110,
            _duration: 4
        }));
        await Template.ƒS.Speech.tell(Template.characters.masterKazuki, `${Template.dataForSave.playerName}, you made it back.`);
        await Template.ƒS.Speech.tell(Template.characters.masterKazuki, "Whats wrong? You look troubled. Where is Aiko?");
        await Template.ƒS.Speech.tell(Template.characters.player, "Yes, Grandfather. I have returned. I found the Celestial Orb and I used it to save humanity.");
        await Template.ƒS.Speech.tell(Template.characters.player, "But in order to do so, I had to sacrifice Aiko. She is gone now.");
        await Template.ƒS.Speech.tell(Template.characters.masterKazuki, "... ");
        await Template.ƒS.Speech.tell(Template.characters.masterKazuki, "I am sorry, Hiroshi. I know how much you loved her.");
        await Template.ƒS.Speech.tell(Template.characters.masterKazuki, "But you did what you had to do. You saved humanity.");
        await Template.ƒS.Speech.tell(Template.characters.masterKazuki, "Im sure Aiko would have wanted you to do that.");
        await Template.ƒS.Speech.tell(Template.characters.player, "I hope so, Grandfather. I hope so.");
        await Template.ƒS.Speech.tell(Template.characters.masterKazuki, "You are a true samurai, Hiroshi. This is the way.");
        Template.ƒS.Character.hideAll();
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.tell("", "King Akuma was defeated and the darkness was banished from the land.");
        await Template.ƒS.Speech.tell("", "The people of Yamato were saved and the village was rebuilt.");
        await Template.ƒS.Speech.tell("", "But Hiroshi was never the same again.");
        await Template.ƒS.Speech.tell("", "He wandered the land, a broken man, haunted by the memory of Aiko.");
        await Template.ƒS.Speech.tell("", "Some say he still roams the forests and mountains, searching for peace.");
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.fade(Template.audio.ambience.village, 0, 2);
        return Template.Location.GameOver;
    }
    Template.EndingFour = EndingFour;
})(Template || (Template = {}));
// Ending Trigger: Player dies due to zero health
var Template;
// Ending Trigger: Player dies due to zero health
(function (Template) {
    async function EndingOne() {
        console.log("EndingOne Scene starting");
        Template.handleMeterContainerVisibility({ _showMeterContainer: false });
        Template.ƒS.Speech.hide();
        Template.ƒS.Character.hideAll();
        await Template.ƒS.Location.show(Template.locations.endingOne);
        await Template.ƒS.update(Template.transitions.pix2.duration, Template.transitions.pix2.alpha, Template.transitions.pix2.edge);
        await Template.ƒS.Character.show(Template.characters.player, Template.characters.player.pose.default, Template.ƒS.positionPercent(20, 110));
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.tell(Template.characters.player, "I have failed...");
        await Template.ƒS.Speech.tell(Template.characters.player, "Forgive me, Aiko...");
        await Template.ƒS.Speech.tell(Template.characters.player, "I was not strong enough to protect you...");
        await Template.ƒS.Speech.tell(Template.characters.player, "Maybe our paths will cross again in another life...");
        await Template.ƒS.Speech.tell("", `Due to zero health, ${Template.dataForSave.playerName} was defeated...`);
        Template.ƒS.Speech.hide();
        await Template.ƒS.Character.hide(Template.characters.player);
        await Template.ƒS.update(2);
        return Template.Location.GameOver;
    }
    Template.EndingOne = EndingOne;
})(Template || (Template = {}));
// Ending Trigger: Player decides to not use the celestial orb in order to save his love but dooms humanity
var Template;
// Ending Trigger: Player decides to not use the celestial orb in order to save his love but dooms humanity
(function (Template) {
    async function EndingThree() {
        console.log("EndingThree Scene starting");
        await Template.ƒS.Location.show(Template.locations.endingThree);
        await Template.ƒS.update(Template.transitions.pix2.duration, Template.transitions.pix2.alpha, Template.transitions.pix2.edge);
        await Template.ƒS.Speech.tell("", `${Template.dataForSave.playerName} and Aiko escaped the castle and returned to the village.`);
        await Template.ƒS.Speech.tell("", `The humans fought bravely but were no match for King Akuma and his army.`);
        await Template.ƒS.Speech.tell("", `The darkness consumed the land and the people of Yamato.`);
        await Template.ƒS.Speech.hide();
        await Template.ƒS.update(2);
        return Template.Location.GameOver;
    }
    Template.EndingThree = EndingThree;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function EndingTwo() {
        // player dies due to insufficient amount of mana when trying to use the celestial orb
        console.log("EndingTwo Scene starting");
        Template.handleMeterContainerVisibility({ _showMeterContainer: false });
        Template.ƒS.Speech.hide();
        Template.ƒS.Character.hideAll();
        await Template.ƒS.Location.show(Template.locations.endingTwo);
        await Template.ƒS.update(Template.transitions.pix2.duration, Template.transitions.pix2.alpha, Template.transitions.pix2.edge);
        await Template.ƒS.Character.show(Template.characters.player, Template.characters.player.pose.default, Template.ƒS.positionPercent(20, 110));
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.tell(Template.characters.player, "I have failed...");
        await Template.ƒS.Speech.tell(Template.characters.player, "Forgive me, Aiko...");
        await Template.ƒS.Speech.tell(Template.characters.player, "I was so close to saving you...");
        await Template.ƒS.Speech.tell("", `Due to insufficient mana, ${Template.dataForSave.playerName} was unable to use the Celestial Orb...`);
        await Template.ƒS.Speech.tell("", `The celestrial orb consumed ${Template.dataForSave.playerName} and trapped him in an eternal void...`);
        Template.ƒS.Speech.hide();
        await Template.ƒS.Character.hide(Template.characters.player);
        await Template.ƒS.update(2);
        return Template.Location.GameOver;
    }
    Template.EndingTwo = EndingTwo;
})(Template || (Template = {}));
var Template;
(function (Template) {
    // Function to display meter and button for attack/defense
    async function displayFightUi({ _isAttacking }) {
        let meterValue = 0;
        let increasing = true;
        let meter = document.getElementById("fight-value-display");
        let button = document.getElementById("fight-action-button");
        if (_isAttacking) {
            button.innerText = "Attack";
            button.disabled = false;
        }
        else {
            button.innerText = "Enemy Attack";
            button.disabled = true;
        }
        let meterInterval = setInterval(() => {
            if (increasing) {
                meterValue += 2;
                if (meterValue >= 100)
                    increasing = false;
            }
            else {
                meterValue -= 2;
                if (meterValue <= 0)
                    increasing = true;
            }
            meter.value = meterValue;
        }, 5);
        return new Promise((resolve) => {
            if (_isAttacking) {
                button.addEventListener("click", () => {
                    clearInterval(meterInterval);
                    resolve(meterValue);
                });
            }
            else {
                setTimeout(() => {
                    clearInterval(meterInterval);
                    resolve(meterValue);
                }, Math.random() * 5000); // Randomly trigger within 5 seconds
            }
        });
    }
    Template.displayFightUi = displayFightUi;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function battleMode({ _fighterOne, _fighterTwo, _currentlyPlayingAudio: { _url, _volume, _loop = true }, _hideEnemy = false, _reward, _enemyReusable = false }) {
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.fade(_url, 0, 4);
        Template.ƒS.Sound.fade(Template.audio.music.battle, 0.1, 2, true);
        let ememyOriginalHealth = _fighterTwo.health;
        const enemyMeterContainer = document.getElementById("enemy-health");
        if (!enemyMeterContainer) {
            console.error('Enemy meter container not found');
        }
        enemyMeterContainer.value = _fighterTwo.health;
        enemyMeterContainer.max = _fighterTwo.health;
        const fightDialog = document.getElementById('fight-ui');
        if (!fightDialog) {
            console.error('Fight dialog elements not found');
        }
        fightDialog.showModal();
        enemyMeterContainer.style.visibility = 'visible';
        while (Template.dataForSave.health > 0 && _fighterTwo.health > 0) {
            console.log("inside the loop");
            // Fighter One Attack Phase
            let playerOneAttackValue = await Template.displayFightUi({ _isAttacking: true });
            let defenseFactorFighterTwo = _fighterTwo.defense || 0;
            let damageToFighterTwo = Math.max(1, playerOneAttackValue * (1 - defenseFactorFighterTwo));
            _fighterTwo.health -= damageToFighterTwo;
            console.log(`${_fighterOne.name} attacks ${_fighterTwo.name} for ${playerOneAttackValue} damage. ${_fighterTwo.name} health: ${_fighterTwo.health}`);
            console.log(_fighterTwo.health);
            enemyMeterContainer.value = _fighterTwo.health;
            await Template.ƒS.update(1);
            if (_fighterTwo.health <= 0)
                break;
            // Fighter Two Attack Phase
            let playerTwoAttackValue = await Template.displayFightUi({ _isAttacking: false });
            let defenseFactorFighterOne = _fighterOne.defense || 0;
            let damageToFighterOne = Math.max(1, playerTwoAttackValue * (1 - defenseFactorFighterOne));
            Template.dataForSave.health -= damageToFighterOne;
            console.log(`${_fighterTwo.name} attacks ${_fighterOne.name} for ${playerTwoAttackValue} damage. ${_fighterOne.name} health: ${Template.dataForSave.health}`);
            await Template.ƒS.update(1);
        }
        let winner = Template.dataForSave.health > 0 ? _fighterOne : _fighterTwo;
        fightDialog.close();
        enemyMeterContainer.style.visibility = 'hidden';
        await Template.ƒS.Speech.tell("", `The winner is ${winner.name}`);
        if (_reward && winner.name === _fighterOne.name) {
            Template.ƒS.Inventory.add(_reward);
            await Template.ƒS.Speech.tell("", `${_reward.name} was added to your inventory`);
        }
        Template.ƒS.Sound.fade(Template.audio.music.battle, 0, 4);
        if (_enemyReusable) {
            console.log(ememyOriginalHealth);
            _fighterTwo.health = ememyOriginalHealth;
        }
        if (_hideEnemy) {
            Template.ƒS.Character.hide(_fighterTwo);
        }
        if (winner.name === _fighterOne.name) {
            Template.ƒS.Sound.fade(_url, _volume, 2, _loop);
        }
        await Template.ƒS.update(1);
        return winner;
    }
    Template.battleMode = battleMode;
})(Template || (Template = {}));
function formatEnumValue(value) {
    // Split the value at each point a lowercase letter is followed by an uppercase letter
    // and join the resulting array with a space
    return value
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        // Optionally, make the first letter of the result uppercase if desired
        .replace(/^./, str => str.toUpperCase());
}
function getRandomMysteriousSaying() {
    const sayings = [
        "The moon whispers to those who listen.",
        "In the shadow of the old tree, secrets linger.",
        "Stars are the eyes of the universe, watching over us.",
        "A forgotten path holds the key to untold mysteries.",
        "Whispers in the wind carry the truths of the ancient.",
        "The river knows the way, but it will not tell.",
        "Beneath the silent sands, a hidden truth awaits.",
        "In the heart of the storm, silence speaks the loudest.",
        "The night sky holds stories yet to be told.",
        "Where light and shadow meet, fate stands revealed."
    ];
    return sayings[Math.floor(Math.random() * sayings.length)];
}
var Template;
(function (Template) {
    Template.handleMeterContainerVisibility = ({ _showMeterContainer }) => {
        const meterContainer = document.getElementById("player-meter-container");
        if (meterContainer) {
            meterContainer.style.visibility = _showMeterContainer ? "visible" : "hidden";
        }
    };
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map