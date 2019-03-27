// Promise

const getCharacterData = () => {
  return new Promise(function(resolve, reject) {
    const error = false;
    if (!error) {
      setTimeout(() => {
        resolve({ id: 1, name: "Rick Sanchez" });
      }, 1000);
    } else {
      reject("Error in getting data :(");
    }
  });
};

// When calling a function that uses Promise, you must use .then and .catch
getCharacterData()
  .then(response => console.log(response))
  .catch(error => console.log(error));

// Fetch - uses promise
const url = "https://rickandmortyapi.com/api/charagdcgter/1";

fetch(url)
  .then(response => {
    return response.json(); // JSON method is called to recieve data
  })
  .then(data => {
    // then we can get the data
    console.log("data:", data);
  })
  .catch(error => {
    console.log("error");
  });
