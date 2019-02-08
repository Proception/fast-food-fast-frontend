import React from "react";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return { data: state.data };
};

const ConnectedList = ({ data }) => (
  <ul className="list-group list-group-flush">
    {data.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);
const List = connect(mapStateToProps)(ConnectedList);
export default List;
