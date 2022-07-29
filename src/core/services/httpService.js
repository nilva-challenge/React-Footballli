import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  console.log(error);
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500 &&
    error.response.status !== 401;

  const originalRequest = error.config;
  // console.log(originalRequest)

  if (error.response === undefined) {
    return;
  }
  try {
    if (error.response.status === 404) {
    }
  } catch (error) {}

  if (expectedError) {
    // console.log(error.response.data);
    // toast.error(error.response.data);
    try {
      // error.response.data.errors.map((e) => {
      //   toast.error(e.message);
      //   return 0;
      // });
    } catch (error) {}
  }

  if (error.response.status === 401) {
    console.log("401");
  }

  if (error.response.status === 404) {
    return;
  }

  if (error.response.status === 301) {
  }

  if (expectedError) {
  }

  if (error.response.status === 500) {
    // toast.error("Error 500")
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};
