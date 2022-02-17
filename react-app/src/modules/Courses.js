import axios from "axios";

const Courses = {
  basePath: "./data/courses.json",
  async index(category) {
    const { data } = await axios.get(this.basePath);
    if(category){
      const results = data.filter(course => course.category === category);
      return results;
    } else {
      return data;
    }
  }
};

export default Courses;
