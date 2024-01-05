import * as api from "../api/index";

export const profile = (setProfile) => {
  try {
    api
      .profile()
      .then((response) => {
        if (response.status === 200) {
          setProfile(response.data);
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  } catch (error) {
    console.log(error.status);
  }
};
