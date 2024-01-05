import * as api from "../api/index";

export const login = (formData, navigate) => {
  try {
    api
      .signin(formData)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("profile", JSON.stringify(response.data));
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  } catch (error) {
    console.log(error.status);
  }
};

export const register = (formData, navigate) => {
  try {
    api
      .signup(formData)
      .then((response) => {
        if (response.status === 201) {
          localStorage.setItem("profile", JSON.stringify(response.data));
          alert(response.data.message);
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  } catch (error) {
    console.log(error.status);
  }
};

// export const signin = (formData, navigate) => async (dispatch) => {
//   try {
//     //login the users
//     await api
//       .signin(formData)
//       .then((response) => {
//         if (!response.data.result.isPaid) {
//           navigate("/payment");
//           dispatch({ type: AUTH, data: response.data });
//         } else {
//           navigate("/QandA");
//           dispatch({ type: AUTH, data: response.data });
//         }
//       })
//       .catch((error) => {
//         alert(error.response.data.message);
//       });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const signup = (formData, navigate) => async (dispatch) => {
//   try {
//     //login the users
//     await api
//       .signup(formData)
//       .then((response) => {
//         if (response.status === 201) {
//           console.log(response.data);
//           dispatch({ type: AUTH, data: response.data });
//           navigate("/payment");
//           alert("Account Created Successfully");
//         }
//       })
//       .catch((error) => {
//         alert(error.response.data.message);
//       });
//   } catch (error) {
//     console.log(error);
//   }
// };
