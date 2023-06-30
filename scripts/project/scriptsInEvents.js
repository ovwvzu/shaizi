const sdkElem = document.createElement("script");
sdkElem.type = "text/javascript";
sdkElem.src ='';//’’ "https://sdk.crazygames.com/Construct3CrazySDK.js";
document.body.appendChild(sdkElem);

function showMessage(message) {
    document.title = message;
}
const scriptsInEvents = {
    async Gameplay_eventsheet_Event227_Act1(runtime, localVars) {
        // GAMESNACKS.gameOver();
    },
    async Gameplay_eventsheet_Event227_Act3(runtime, localVars) {
        // GAMESNACKS.sendScore(runtime.globalVars.ScoreValue);
    },
    async Gameplay_eventsheet_Event229_Act1(runtime, localVars) {
        // crazysdk.gameplayStop();
    },
    async Gameplay_eventsheet_Event229_Act2(runtime, localVars) {
        // crazysdk.happytime();
    },
    async Gameplay_eventsheet_Event231_Act1(runtime, localVars) {
        // GAMESNACKS.gameOver();
    },
    async Gameplay_eventsheet_Event231_Act3(runtime, localVars) {
        // GAMESNACKS.sendScore(runtime.globalVars.ScoreValue);
    },
    async Gameplay_eventsheet_Event233_Act1(runtime, localVars) {
        // crazysdk.gameplayStop();
    },
    async Gameplay_eventsheet_Event319_Act2(runtime, localVars) {
        // GAMESNACKS.gameOver();
    },
    async Gameplay_eventsheet_Event321_Act2(runtime, localVars) {
        // crazysdk.gameplayStop();
    },
    async Gameplay_eventsheet_Event323_Act2(runtime, localVars) {
        // GAMESNACKS.gameOver();
    },
    async Gameplay_eventsheet_Event325_Act2(runtime, localVars) {
        // crazysdk.gameplayStop();
    },
    async Gameplay_eventsheet_Event328_Act13(runtime, localVars) {
        // crazysdk.gameplayStart();
    },
    async Gameplay_eventsheet_Event346_Act4(runtime, localVars) {
        // await crazysdk.displayAd("rewarded");
    },
    async Gameplay_eventsheet_Event416_Act3(runtime, localVars) {
        // await crazysdk.displayAd("rewarded");
    },
    async Gameplay_eventsheet_Event452_Act1(runtime, localVars) {
        console.clear();
    },
    async Loading_eventsheet_Event6_Act6(runtime, localVars) {
        // showMessage(runtime.globalVars.Variable15);
    },
    async Mainmenu_eventsheet_Event11_Act6(runtime, localVars) {
        // crazysdk.gameplayStart();
    },
    async Mainmenu_eventsheet_Event34_Act11(runtime, localVars) {
        // showMessage(runtime.globalVars.Variable14);
    },
    async Mainmenu_eventsheet_Event68_Act4(runtime, localVars) {
        // await crazysdk.displayAd("rewarded");
    },
    async Function_Event15_Act4(runtime, localVars) {
        // await crazysdk.displayAd("midgame");
    },
    async Csv_evensheet_Event2_Act1(runtime, localVars) {
        // crazysdk.sdkGameLoadingStart();
    },
    async Csv_evensheet_Event4_Act2(runtime, localVars) {
        // GAMESNACKS.gameReady();
    },
    async Csv_evensheet_Event6_Act2(runtime, localVars) {
        // crazysdk.sdkGameLoadingStop();
    }
};
self.C3.ScriptsInEvents = scriptsInEvents;