const fetchdata = () => {
  fetch("http://192.168.43.156:8000/api/userprofiles")
    .then((res) => {
      return res.json();
    })
    //
    .catch((err) => {
      console.log(err);
    })
    .then((a) => {
      console.log(a);
    });
};
fetchdata();
