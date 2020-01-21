console.log("sending");
chrome.runtime.sendMessage({message: 'mainButtonAction'}, function() {
    console.log("send");
});
