namespace Template {

    export type Character = {
        name: string,
        origin: ƒS.ORIGIN,
        pose: {
            default: string,
        },
        health?: number,
        defense?: number,
    }

    export const characters = {
        player: {
            name: "Hiroshi",
            origin: ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                default: "./Images/Characters/player.png",
            },
            health: 100,
            defense: 0.7
        },
        aiko: {
            name: "Aiko",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Images/Characters/aiko.png",
                left: "./Images/Characters/aiko_left.png",
            }
        },
        kingAkuma: {
            name: "King Akuma",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Images/Characters/king_akuma.png",
            },
            health: 100,
            defense: 0.6
        },
        masterKazuki: {
            name: "Master Kazuki",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Images/Characters/master_kazuki.png",
                left: "./Images/Characters/master_kazuki_left.png",
            }
        },
        theLight: {
            name: "The Light",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Images/Characters/the_light.png",
            }
        },
        takeshi: {
            name: "Takeshi",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Images/Characters/takeshi.png",
            }
        },
        yuna: {
            name: "Yuna",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Images/Characters/yuna.png",
            }
        },
        shadowSkeleton: {
            name: "Shadow Skeleton",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Images/Characters/shadow_skeleton.png",
            },
            health: 100,
            defense: 0.4
        },
        hikari: {
            name: "Hikari",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Images/Characters/hikari.png",
            }
        },
        merchant: {
            name: "Merchant",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Images/Characters/merchant.png",
            }
        },
        guardianSpirit: {
            name: "Guardian Spirit",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Images/Characters/guardian_spirit.png",
            },
            health: 100,
            defense: 0.5
        }
    };
}