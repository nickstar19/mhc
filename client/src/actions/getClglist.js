import * as api from "../api/index";

export const getClglist = (formData, setCollegeList) => {
  try {
    api
      .clglist(formData)
      .then((response) => {
        if (response.status === 200) {
          setCollegeList(response.data.colleges);
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  } catch (error) {
    console.log(error.status);
  }
};
