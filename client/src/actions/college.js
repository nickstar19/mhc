import * as api from "../api/index";

export const getcolleges = (formData, setCollegeList) => {
  try {
    api
      .getcolleges(formData)
      .then((response) => {
        if (response.status === 200) {
          setCollegeList(response.data);
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  } catch (error) {
    console.log(error.status);
  }
};
