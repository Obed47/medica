import axios from "axios";

const fetchdata = () => {
  axios
    .get("http://192.168.1.101:8001/api/consultations")
    .then((res) => {
      console.log(res.data);
    })
    //
    .catch((err) => {
      console.log(err);
    });
};
fetchdata();
