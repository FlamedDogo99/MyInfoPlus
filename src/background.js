let icon16 = chrome.runtime.getURL("logo/logo-16.png");
let icon48 = chrome.runtime.getURL("logo/logo-48.png");
let icon128 = chrome.runtime.getURL("logo/logo-128.png");
let gray16 = chrome.runtime.getURL("logo/gray-16.png");
let gray48 = chrome.runtime.getURL("logo/gray-48.png");
let gray128 = chrome.runtime.getURL("logo/gray-128.png");

chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        chrome.tabs.create({ url: chrome.runtime.getURL("instructions.html") });
    }
    chrome.tabs.query({url: 'https://prodmyinfo.montana.edu/*'}, (tabs) => tabs.forEach( tab => {
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            files: ['style.js'],
        })
        .then(() => {
            chrome.tabs.sendMessage(tab.id, {type: "refreshRequest"});
        });
    }));
});


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const toggleState = message.data
    switch(message.type) {
        case "setState":
        console.log("Setting icon state to " + (toggleState ? "normal" : "grayed") + " for " + sender.tab.url)
        chrome.action.setIcon({
            path: {
                "16": toggleState ? icon16 : gray16,
                "48": toggleState ? icon48 : gray48,
                "128": toggleState ? icon128 : gray128
            },
            tabId: sender.tab.id
        });
        break;
    default:
        console.error("Unknown message type", message.type)
    }
});


chrome.action.onClicked.addListener(function(tab){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {type: "getState"}, () => chrome.runtime.lastError);
    });
});
