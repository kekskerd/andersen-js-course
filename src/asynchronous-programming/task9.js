/* eslint-disable import/prefer-default-export */
const asyncBar = async () => 'Some string!';

export const fooAsyncTask9 = async () => {
  console.log(await asyncBar());
};
