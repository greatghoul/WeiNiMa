const filters = {
  urls: [
    '*://itunes.apple.com/app/id*'
  ],
  types: [
    'main_frame',
    'sub_frame'
  ]
};

function handler(details) {
  let url = details.url;

  if (url.indexOf('at=1001lbb6') != -1) {
    url = url.replace(/\?at=1001lbb6&?/ig, '?')
             .replace(/&at=1001lbb6/ig, '');
    // chrome.tabs.update(details.tabId, { url: url });
    return { redirectUrl: url };
  }
}

chrome.webRequest.onBeforeRequest.addListener(handler, filters, ['blocking']);
