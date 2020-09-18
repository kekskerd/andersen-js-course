/* eslint-disable import/prefer-default-export */
export async function fooAsyncTask8(url) {
  try {
    const getUsers = await fetch(url);
    const [user] = await getUsers.json();
    console.log(user);
  } catch (err) {
    console.log(err);
  }
}
