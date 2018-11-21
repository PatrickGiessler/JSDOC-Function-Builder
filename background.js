// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.commands.onCommand.addListener(function(command) {
  console.log('onCommand event received for message: ', command);
  function modifyDOM() {
      //You can play with your DOM here or check URL against your regex
      console.log('Tab script:');
      console.log(document.body);
      return document.body.innerHTML;
  }

  //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor="red"'
    });
  });
});
