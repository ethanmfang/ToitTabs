import React from "react";

const NewWindowFromKeyword = ({ tabList }) => {
  function clickHandler() {
    //console.log("Keyword Window Initiated");
    //console.log(tabList);

    //log URLS from keyword
    //let tabUrls = tabList.map((tab) => console.log(tab.props.tab.url));

    //log tab IDs from keyword
    tabIds = [];
    let tabIds = tabList.map((tab) => tab.props.tab.id);

    chrome.windows.create({ tabId: tabIds[0] }, function (newWindow) {
      chrome.tabs.move(tabIds, { windowId: newWindow.id, index: 0 });
      console.log(newWindow);
    });
  }
  return (
    <button
      title="from list below"
      className="keyword-button"
      onClick={clickHandler}
    >
      Create Window
    </button>
  );
};

export default NewWindowFromKeyword;
