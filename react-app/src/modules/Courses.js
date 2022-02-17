import axios from "axios";

const Courses = {
  basePath: "./data/courses.json",
  async index() {
    const { data } = await axios.get(this.basePath);
    return data;
  }
};

export default Courses;
