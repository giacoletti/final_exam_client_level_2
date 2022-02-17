import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const CoursesView = () => {
  const { coursesList } = useSelector((state) => state);

  const coursesCollection = coursesList.map((course, index) => {
    course.index = index + 1;
    return (
      <div data-cy={`course-section-${course.index}`}>
        <h2 data-cy={`course-header-${course.index}`}>{course.title}</h2>
        <p data-cy={`course-description-${course.index}`}>{course.description}</p>
        <p data-cy={`course-category-${course.index}`} className="capitalized">
          <span className="bold">Category: </span>
          {course.category}
        </p>
        <p data-cy={`course-instructors-${course.index}`}>
          <span className="bold">Instructors: </span>
          {course.instructors}
        </p>
        <p data-cy={`course-info-${course.index}`}>{course.info}</p>
        <p data-cy={`course-price-${course.index}`}>
          <span className="bold">Price: </span>
          {course.price}</p>
      </div>
    );
  });

  return <React.Fragment>{coursesCollection}</React.Fragment>;
};

export default CoursesView;
