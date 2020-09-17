/* eslint-disable import/prefer-default-export */
export const urls = [
  'http://www.json-generator.com/api/json/get/cevhxOsZnS',
  'http://www.json-generator.com/api/json/get/cguaPsRxAi',
  'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
  'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
  'http://www.json-generator.com/api/json/get/ceQMMKpidK',
];

export const parallelResponses = arr => {
  Promise.all(arr.map(url => fetch(url).then(response => response.json()))).then(values =>
    console.log(values)
  );
};

export const sequenceResponses = arr => {
  arr.reduce(
    (prom, url) =>
      prom
        .then(() => fetch(url))
        .then(response => response.json())
        .then(value => console.log(value)),
    Promise.resolve()
  );
};
