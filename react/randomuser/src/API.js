
const API = {

  getData: function (number = 0) {

    const url = `https://randomuser.me/api/?results=${number}`;
    return (fetch (url));
  }

};

export default API;