namespace Template {

    export const handleMeterContainerVisibility = ({_showMeterContainer}: {_showMeterContainer: boolean}): void => {
        const meterContainer = document.getElementById("player-meter-container");
        if (meterContainer) {
            meterContainer.style.visibility = _showMeterContainer ? "visible" : "hidden";
        }
    }
}