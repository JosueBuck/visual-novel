namespace Template {
    export async function GameOver(): ƒS.SceneReturn {
        console.log("MountainPass Scene starting");
        handleMeterContainerVisibility({ _showMeterContainer: false });
        
        ƒS.Speech.hide();
        
        await ƒS.Location.show(locations.gameOver);
        await ƒS.update(transitions.pix1.duration, transitions.pix1.alpha, transitions.pix1.edge);

        ƒS.Text.print("<h2>GAME OVER</h2><p>Thanks for playing the game. You can start a new game by refreshing the page or press R </p>");
    }
}