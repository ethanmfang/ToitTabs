import React from "react";

const ToitTab = ({ tab, clickHandler }) => {
  return (
    <li>
      <button
        key={tab.id}
        className="tab-btn tooltip"
        onClick={clickHandler}
        type="button"
      >
        <div className="favIcon">
          <img src={tab.favIconUrl} alt="" />
        </div>
        <div className="tab-text">{tab.title}</div>
        <span className="tooltiptext">{tab.url}</span>
      </button>
    </li>
  );
};

export default ToitTab;
