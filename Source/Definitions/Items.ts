namespace Template {

    export let items = {
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
                let mana = dataForSave.mana + 30;
                mana > 100 ? 100 : mana;
                dataForSave.mana = mana;                
                return
            }
        },
        healthPotion: {
            name: "Health Potion",
            description: "A potion that restores health.",
            image: "./Images/Items/health_potion.png",
            static: false, // Can be consumed
            handler: () => {
                let health = dataForSave.health + 40;
                health > 100 ? 100 : health;
                dataForSave.health = health;
                return
            }
        },
        gold: {
            name: "Gold",
            description: "A valuable currency used for trading and purchasing items, found in various locations throughout the land.",
            image: "./Images/Items/gold.png",
            static: true // Can not be consumed but traded
        }
    }
}