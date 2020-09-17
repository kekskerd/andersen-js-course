export const parseJSON = (jsonStr, succesCallback, failureCallback) => {
  try {
    const result = JSON.parse(jsonStr);
    succesCallback(result);
  } catch (error) {
    failureCallback(error);
  }
};
export const succesCb = result => {
  console.log('Success parce!');
  console.log(result);
};

export const failureCb = error => {
  console.log('Failure parce!');
  console.log(error);
};
