import React, { Component } from "react";
import NewWindowFromKeyword from "./NewWindowFromKeyword";
import ToitTab from "./ToitTab";

class ToitTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfTabs: [],
      filterInput: "",
    };
  }

  componentDidMount() {
    this.listOfTabs();
  }

  // make API call and push items to listOfTabs via tabsArray
  listOfTabs = () => {
    // eslint-disable-next-line no-undef
    chrome.windows.getAll({ populate: true }, (windowArray) => {
      console.log(windowArray);

      let tabsArray = [];
      windowArray.forEach((window) => {
        tabsArray = [...tabsArray, ...window.tabs];
      });

      this.setState({
        listOfTabs: tabsArray,
      });
    });
  };

  clickHandler = (tab) => {
    let tabId = tab.id;
    chrome.tabs.update(tabId, { active: true });
  };

  changeHandler = (e) => {
    this.setState({
      filterInput: e.target.value,
    });
  };

  render() {
    const { listOfTabs, filterInput } = this.state;

    const tabList = listOfTabs
      .filter(
        (tab) =>
          filterInput === "" ||
          tab.title.toLowerCase().includes(filterInput.toLowerCase()) ||
          tab.url.toLowerCase().includes(filterInput.toLowerCase())
      )
      .map((tab) => (
        <ToitTab
          tab={tab}
          clickHandler={() => {
            this.clickHandler(tab);
          }}
        />
      ));

    return (
      <div>
        <div className="filter-box">
          <input
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            placeholder="filter here..."
            type="text"
            value={filterInput}
            onChange={this.changeHandler}
          />
          <NewWindowFromKeyword tabList={tabList} />
        </div>
        <ul>{tabList}</ul>
      </div>
    );
  }
}
export default ToitTabs;
