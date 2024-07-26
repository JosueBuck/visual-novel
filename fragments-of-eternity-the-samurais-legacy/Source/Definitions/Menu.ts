namespace Template {

    // Define the game menu
    export let gameMenu: ƒS.Menu;

    // Define state to check if the menu is open
    export let menuIsOpen: boolean = true;

    // function to handle toggling the game menu
    const handleToggleMenu = (): void => {
        if (menuIsOpen) {
            gameMenu.close();
            menuIsOpen = false;
        } else {
            gameMenu.open();
            menuIsOpen = true;
        }
    }

    // function to handle closing the game menu
    export const handleCloseMenu = (): void => {
        gameMenu.close();
        menuIsOpen = false;
    }

    // Define the buttons for the game menu
    export let gameMenuButtons = {
        save: "Save",
        load: "Load",
        restart: "Restart",
        inventory: "Inventory",
        help: "Help",
        quests: "Quests",
        close: "Close",
    }

    // Define the functionality for the game menu buttons
    export async function gameMenuButtonFunctionalities(_option: string): Promise<void> {
        switch (_option) {
            case gameMenuButtons.save:
                await ƒS.Progress.save();
                break;
            case gameMenuButtons.load:
                await ƒS.Progress.load();
                break;
            case gameMenuButtons.restart:
                window.location.reload();
                break
            case gameMenuButtons.inventory:
                await ƒS.Inventory.open();
                break;
            case gameMenuButtons.help:
                showHelp();
                break;
            case gameMenuButtons.quests:
                showQuests();
                break;
            case gameMenuButtons.close:
                handleCloseMenu();
                break;
            default:
                console.log("No functionality defined for this button.");
                break;
        }
    }

    // Add event listener for keypresses
    document.addEventListener("keydown", hndKeypress);
    async function hndKeypress(_event: KeyboardEvent): Promise<void> {
        switch (_event.code) {
            case ƒ.KEYBOARD_CODE.S:
                console.log("Save Scene");
                await ƒS.Progress.save();
                break;
            case ƒ.KEYBOARD_CODE.L:
                console.log("Load Scene");
                await ƒS.Progress.load();
                break;
            case ƒ.KEYBOARD_CODE.R:
                console.log("Restart Scene");
                window.location.reload();
                break
            case ƒ.KEYBOARD_CODE.I:
                console.log("Open Inventory");
                await ƒS.Inventory.open();
                break;
            case ƒ.KEYBOARD_CODE.H:
                console.log("Open Help");
                showHelp();
                break;
            case ƒ.KEYBOARD_CODE.Q:
                console.log("Open Quests");
                showQuests();
                break;
            case ƒ.KEYBOARD_CODE.M:
                console.log("Toggle Menu");
                handleToggleMenu();
                break;
            default:
                console.log("No functionality defined for this key.");
                break;
        }
    }

    export async function showQuests(): Promise<void> {
        console.log("Show Quests");
        ƒS.Text.setClass("questsModal");
        ƒS.Text.print(`<h2>Your Quests</h2><ul>${
            Object.values(dataForSave.quests).filter(quest => quest.questState === 'accepted').map(
                quest => 
                    `<li>
                        <h3>${quest.name}</h3>
                        <p>${quest.description}</p>
                    </li>`
            ).join("")
        }</ul>`);
    }

    export function showHelp(): void {
        ƒS.Text.print("<h2>Help</h2><p>Your on a quest for humanity and love. On your journey you may encounter many obstacles and challenges. You will meet friends and foes. You will have to make choices that will shape your destiny. Choose wisely and remember that your actions have consequences. Good luck on your journey.</p><p>Try to not loose all your health or you will die. Also keep an eye on your mana, since it might be needed at some point in the game.</p><p>Use the following keys to interact with the game:</p><ul><li>S: Save Game</li><li>L: Load Game</li><li>R: Restart Game</li><li>I: Open Inventory</li><li>H: Open Help</li><li>Q: Open Quests</li><li>M: Toggle Menu</li></ul>");
    }

}