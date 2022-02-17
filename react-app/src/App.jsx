import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CourseSections from "./components/CourseSections";
import CoursesView from "./components/CoursesView";
import Courses from "./modules/Courses";

const App = () => {
  const dispatch = useDispatch();

  const fetchCourses = async () => {
    const response = await Courses.index();
    dispatch({ type: "SET_COURSES_LIST", payload: response });
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="container">
      <h1 data-cy="course-list-header" className="center" onClick={fetchCourses}>
        COURSE LIST
      </h1>
      <CourseSections />
      <CoursesView />
    </div>
  );
};

export default App;
