namespace Template {

    export type QuestState = 'open' | 'accepted' | 'completed' | 'declined';

    export type Quest = {
        name: string;
        description: string;
        questState: QuestState;
        hasInteractedWithRequiredCharacter?: boolean;
    }

    export let yuna: Quest = {
        name: "Yuna's Quest",
        description: "Help Yuna to find her lost amulet.",
        questState: "open",
    }

    export let theLight: Quest = {
        name: "The Light",
        description: "Help the ancient spirit to restore its power.",
        questState: "open",
    }

    export let merchant: Quest = {
        name: "Merchant's Resque",
        description: "Resque the merchant from the enemy camp.",
        questState: "open",
    }

    export let mountainPass: Quest = {
        name: "Mountain Pass",
        description: "The path to continue the journey is blocked. Find a way to move the rock.",
        questState: "open",
        hasInteractedWithRequiredCharacter: false,
    }

    export let guardianSpirit: Quest = {
        name: "Guardian Spirit",
        description: "You have found the Guardian Spirit. Prove your worth to it to get the orb.",
        questState: "open",
    }

    export let defeatKingAkuma: Quest = {
        name: "Defeat King Akuma",
        description: "Defeat King Akuma to save the land.",
        questState: "open",
    }

    export let quests = {
        yuna: yuna,
        theLight,
        merchant,
        mountainPass,
        guardianSpirit,
        defeatKingAkuma,
    }

    export let dataForSave = {
        playerName: "Hiroshi",
        health: 100,
        mana: 0,
        visitedScenes: [] as Location[],
        quests: quests,
    };
}