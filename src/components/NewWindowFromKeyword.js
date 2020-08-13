import React from "react";

const NewWindowFromKeyword = ({ tabList }) => {
  function clickHandler() {
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
