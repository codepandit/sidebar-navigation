import React from 'react'
import "./generic-table-wrapper-style.scss";
import { ShortArrowIcon } from "../../assets/Icon";

function GenericTableWrapper(props) {
  return (
    <div className="table-wrapper">
      <div className="table-wrapper-header">
        <span className="table-wrapper-header-title">{props.title}</span>
        <span className="table-wrapper-header-icon">
          <ShortArrowIcon />
        </span>
      </div>
      { props.children }
    </div>
  );
}

export default GenericTableWrapper;