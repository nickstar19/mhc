import * as api from "../api/index";

export const viewHistory = (formData, setCollegeList) => {
  console.log("insideViewHistory API");
  console.log(formData);
  try {
    api
      .viewHistory(formData)
      .then((response) => {
        if (response.status === 200) {
          setCollegeList(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data.message);
      });
  } catch (error) {
    console.log(error.status);
  }
};
