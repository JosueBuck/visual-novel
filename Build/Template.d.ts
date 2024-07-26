declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
declare namespace Template {
    function slideAnimation({ _xStart, _xEnd, _yStart, _yEnd, _duration }: {
        _xStart: number;
        _xEnd: number;
        _yStart: number;
        _yEnd: number;
        _duration?: number;
    }): ƒS.AnimationDefinition;
    function colorAnimation({ _startColor, _endColor, _duration }: {
        _startColor: ƒS.Color;
        _endColor: ƒS.Color;
        _duration: number;
    }): ƒS.AnimationDefinition;
}
declare namespace Template {
    let audio: {
        ambience: {
            village: string;
            destroyedVillage: string;
            sacredForest: string;
            abandonedTemple: string;
            enchantedLake: string;
            cursedCave: string;
            mountainPass: string;
            enemyCamp: string;
            merchantsOutpost: string;
            hiddenShrine: string;
            darkFortress: string;
        };
        music: {
            battle: string;
        };
        sfx: {
            attack: string;
            block: string;
            defeat: string;
            hit: string;
            menu: string;
            select: string;
            victory: string;
        };
    };
}
declare namespace Template {
    type Character = {
        name: string;
        origin: ƒS.ORIGIN;
        pose: {
            default: string;
        };
        health?: number;
        defense?: number;
    };
    const characters: {
        player: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
            };
            health: number;
            defense: number;
        };
        aiko: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
                left: string;
            };
        };
        kingAkuma: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
            };
            health: number;
            defense: number;
        };
        masterKazuki: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
                left: string;
            };
        };
        theLight: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
            };
        };
        takeshi: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
            };
        };
        yuna: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
            };
        };
        shadowSkeleton: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
            };
            health: number;
            defense: number;
        };
        hikari: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
            };
        };
        merchant: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
            };
        };
        guardianSpirit: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
            };
            health: number;
            defense: number;
        };
    };
}
declare namespace Template {
    type QuestState = 'open' | 'accepted' | 'completed' | 'declined';
    type Quest = {
        name: string;
        description: string;
        questState: QuestState;
        hasInteractedWithRequiredCharacter?: boolean;
    };
    let yuna: Quest;
    let theLight: Quest;
    let merchant: Quest;
    let mountainPass: Quest;
    let guardianSpirit: Quest;
    let defeatKingAkuma: Quest;
    let quests: {
        yuna: Quest;
        theLight: Quest;
        merchant: Quest;
        mountainPass: Quest;
        guardianSpirit: Quest;
        defeatKingAkuma: Quest;
    };
    let dataForSave: {
        playerName: string;
        health: number;
        mana: number;
        visitedScenes: Location[];
        quests: {
            yuna: Quest;
            theLight: Quest;
            merchant: Quest;
            mountainPass: Quest;
            guardianSpirit: Quest;
            defeatKingAkuma: Quest;
        };
    };
}
declare namespace Template {
    let items: {
        celestialOrb: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        yunasAmulet: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        spiritEssence: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        key: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        manaGem: {
            name: string;
            description: string;
            image: string;
            static: boolean;
            handler: () => void;
        };
        healthPotion: {
            name: string;
            description: string;
            image: string;
            static: boolean;
            handler: () => void;
        };
        gold: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
    };
}
declare namespace Template {
    enum Location {
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
    type Locations = {
        [key in Location]: ƒS.LocationDefinition;
    };
    let locations: Locations;
}
declare namespace Template {
    let gameMenu: ƒS.Menu;
    let menuIsOpen: boolean;
    const handleCloseMenu: () => void;
    let gameMenuButtons: {
        save: string;
        load: string;
        restart: string;
        inventory: string;
        help: string;
        quests: string;
        close: string;
    };
    function gameMenuButtonFunctionalities(_option: string): Promise<void>;
    function showQuests(): Promise<void>;
    function showHelp(): void;
}
declare namespace Template {
    type Transitions = {
        [key: string]: {
            duration: number;
            alpha: RequestInfo;
            edge: number;
        };
    };
    let transitions: Transitions;
}
declare namespace Template {
    function AbandonedTemple(): ƒS.SceneReturn;
}
declare namespace Template {
    function CursedCave(): ƒS.SceneReturn;
}
declare namespace Template {
    function DarkFortress(): ƒS.SceneReturn;
}
declare namespace Template {
    function DestroyedVillage(): ƒS.SceneReturn;
}
declare namespace Template {
    function EnchantedLake(): ƒS.SceneReturn;
}
declare namespace Template {
    function EnemyCamp(): ƒS.SceneReturn;
}
declare namespace Template {
    function GameOver(): ƒS.SceneReturn;
}
declare namespace Template {
    function HiddenShrine(): ƒS.SceneReturn;
}
declare namespace Template {
    function MerchantsOutpost(): ƒS.SceneReturn;
}
declare namespace Template {
    function MountainPass(): ƒS.SceneReturn;
}
declare namespace Template {
    function SacredForest(): ƒS.SceneReturn;
}
declare namespace Template {
    function Village(): ƒS.SceneReturn;
}
declare namespace Template {
    function EndingFive(): ƒS.SceneReturn;
}
declare namespace Template {
    function EndingFour(): ƒS.SceneReturn;
}
declare namespace Template {
    function EndingOne(): ƒS.SceneReturn;
}
declare namespace Template {
    function EndingThree(): ƒS.SceneReturn;
}
declare namespace Template {
    function EndingTwo(): ƒS.SceneReturn;
}
declare namespace Template {
    function displayFightUi({ _isAttacking }: {
        _isAttacking: boolean;
    }): Promise<number>;
}
declare namespace Template {
    type BattleModeProps = {
        _fighterOne: Character;
        _fighterTwo: Character;
        _currentlyPlayingAudio: {
            _url: RequestInfo;
            _volume: number;
            _loop?: boolean;
        };
        _hideEnemy?: boolean;
        _reward?: ƒS.ItemDefinition;
        _enemyReusable?: boolean;
    };
    export function battleMode({ _fighterOne, _fighterTwo, _currentlyPlayingAudio: { _url, _volume, _loop }, _hideEnemy, _reward, _enemyReusable }: BattleModeProps): Promise<Character>;
    export {};
}
declare function formatEnumValue(value: string): string;
declare function getRandomMysteriousSaying(): string;
declare namespace Template {
    const handleMeterContainerVisibility: ({ _showMeterContainer }: {
        _showMeterContainer: boolean;
    }) => void;
}
