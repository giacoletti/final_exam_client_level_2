import React from "react";

const CourseSections = () => {
  return (
    <ul className="center">
      <li data-cy="workshops-subheader" className="bold">
        Workshops
      </li>
      <li data-cy="testing-subheader" className="bold">
        Testing
      </li>
      <li data-cy="vue-subheader" className="bold">
        Vue
      </li>
      <li data-cy="productivity-subheader" className="bold">
        Productivity
      </li>
      <li data-cy="node-subheader" className="bold">
        Node
      </li>
      <li data-cy="react-subheader" className="bold">
        React
      </li>
    </ul>
  );
};

export default CourseSections;
