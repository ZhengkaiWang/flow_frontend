import axios from "axios";

const fetchData = async (urls, callback) => {
  try {
    let rsp = await axios({
      url: urls,
      method: "GET"
    });
    callback(rsp.data);
  } catch (err) {
    console.log(err);
  }
};

export default fetchData;
