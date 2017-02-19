function navigateHandler(details) {
  const url = details.url.replace(/\?at=1001lbb6&?/ig, '?').replace(/&at=1001lbb6/ig, ''); 
  chrome.tabs.update(details.tabId, { url: url });
}

chrome.webNavigation.onBeforeNavigate.addListener(navigateHandler, {
  url: [{ urlContains: 'itunes.apple.com/app/id', queryContains: 'at=1001lbb6' }]
});
