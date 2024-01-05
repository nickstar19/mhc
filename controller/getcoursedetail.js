import { coursedetails } from "../coursesdata.js";

const getCourseDetails = async (req, res) => {
  var course_name = req.body.course_name;
  console.log(course_name);
  const result = coursedetails.find(
    (obj) => obj["course_name"] === course_name
  );
  return res.json(result);
};
export default getCourseDetails;
