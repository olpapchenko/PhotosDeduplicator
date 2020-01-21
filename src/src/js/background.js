  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message == 'mainButtonAction') {
        chrome.tabs.create({
          active: true,
          url:  'index.html'
        }, null);
    }
  });