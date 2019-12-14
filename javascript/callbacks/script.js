const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";

function getCharacter (id, callback) {

  const url = `${API_URL}${PEOPLE_URL.replace (":id", id)}`;

  $.get (url, { crossDomain: true }, callback).fail (
    () => console.log ("Error! Can't get the character "));
}

getCharacter (1, function (character) {
  console.log ("Hi, I am " + character.name);

  getCharacter (2, function (character) {
    console.log ("Hi, I am " + character.name);

    getCharacter (17, function (character) {
      console.log ("Hi, I am " + character.name);

      getCharacter (4, function (character) {
        console.log ("Hi, I am " + character.name);
      });
    });
  });
});
