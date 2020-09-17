/* eslint-disable import/prefer-default-export */
export const doubleFetch = () => {
  fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG')
    .then(response => response.json())
    .then(object => {
      if (object.getUsersData) {
        fetch('http://www.json-generator.com/api/json/get/cfVGucaXPC')
          .then(response => response.json())
          .then(data => console.log(data));
      }
    });
};
