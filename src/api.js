import axios from "axios";

const dataReader = (url) => {
  axios
    .get(url)
    .then((resp) => resp.data)
    .then((result) => {
      return result;
    });
};

export default dataReader;
