chrome.tabs.onCreated.addListener((tab) => {

    console.log(`You just created a tab with id: ${tab.id}`)
}); 