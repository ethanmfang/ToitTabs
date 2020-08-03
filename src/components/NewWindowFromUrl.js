import React, { Component } from "react";

class NewWindowFromUrl extends Component {
  constructor(props) {
    super(props);

    this.state = {
        listOfUrls: []
    };
  }

  clickHandler = () => {
    console.log("URL window initiated");
    console.log( this.props.tabList.map((tab) => tab.props.tab.url))
    
    let urlArray = [];
    urlArray = this.props.tabList.map((tab) => tab.props.tab.url)
    this.setState({
        listOfUrls: urlArray
    })
  };



  render() {
      const { listOfUrls } = this.state;

      const urlList = listOfUrls.map((tab) => <div>{tab.url}</div>)
    return (
      <div>
        <div>{urlList}</div>
        <button className="url-button" onClick={this.clickHandler}>
            URL
        </button>
      </div>
    );
  }
}

export default NewWindowFromUrl;
