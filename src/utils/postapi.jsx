import api from "../services/axios";

const postApi = (data) => {
  const result = api
    .post("", data)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      console.log(err);
    });

  return result;
};
export default postApi;
