namespace Template {

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

    export enum Location {
        Village = "village",
        DestroyedVillage = "destroyedVillage",
        SacredForest = "sacredForest",
        AbandonedTemple = "abandonedTemple",
        EnchantedLake = "enchantedLake",
        CursedCave = "cursedCave",
        MountainPass = "mountainPass",
        EnemyCamp = "enemyCamp",
        MerchantsOutpost = "merchantsOutpost",
        HiddenShrine = "hiddenShrine",
        DarkFortress = "darkFortress",
        EndingOne = "endingOne",
        EndingTwo = "endingTwo",
        EndingThree = "endingThree",
        EndingFour = "endingFour",
        EndingFive = "endingFive",
        GameOver = "gameOver"
    }
    
    // Adjust the Locations type to use the LocationKey enum for indexing
    export type Locations = {
        [key in Location]: ƒS.LocationDefinition;
    }
    
    // Define your locations using the LocationKey enum
    export let locations: Locations = {
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
    }

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
}