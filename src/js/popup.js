chrome.runtime.sendMessage({message: 'mainButtonAction'}, function() {
    console.log("send");
});
