import React from "react";
import { useSelector } from "react-redux";

const CoursesView = () => {
  const { coursesList } = useSelector(state => state);

  const coursesCollection = coursesList.map((course) => {
    return (
      <React.Fragment>
        
      </React.Fragment>
    )
  });

  return <div>

  </div>;
};

export default CoursesView;
