import React from "react";
import { useDispatch } from "react-redux";
import Courses from "../modules/Courses";

const CourseSections = () => {
  const dispatch = useDispatch();

  const filterCourses = async (event) => {
    let category = event.target.innerText;
    category = lowerCaseFirstLetter(category);
    const response = await Courses.index(category);
    dispatch({ type: "SET_COURSES_LIST", payload: response });
  };

  const lowerCaseFirstLetter = (string) => {
    return string.charAt(0).toLowerCase() + string.slice(1);
  };

  return (
    <ul className="center">
      <li
        data-cy="workshops-subheader"
        className="bold"
        onClick={filterCourses}
      >
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
