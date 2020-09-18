import './styles/main.css';

import { foo, createCb } from './asynchronous-programming/task1';
import { parseJSON, succesCb, failureCb } from './asynchronous-programming/task2';
import { delay } from './asynchronous-programming/task3';
import { doubleFetch } from './asynchronous-programming/task4';
import { parallelResponses, sequenceResponses, urls } from './asynchronous-programming/task5';
import { getResolvedPromise } from './asynchronous-programming/task6';
import { fooAsync } from './asynchronous-programming/task7';
import { fooAsyncTask8 } from './asynchronous-programming/task8';
import { fooAsyncTask9 } from './asynchronous-programming/task9';
import { Musician } from './asynchronous-programming/task10';

(async () => {
  console.log('======TASK 1=====');
  foo(5, createCb('cb'));
  foo(20, createCb('cb'));

  console.log('======TASK 2=====');
  parseJSON('{"x": 10}', succesCb, failureCb);
  parseJSON('{x}', succesCb, failureCb);

  console.log('======TASK 3=====');
  await delay(1500).then(value => console.log(`Done with ${value}`));

  //   console.log('======TASK 4=====');
  await doubleFetch();

  // ('======TASK 5 PARALLEL=====');
  await parallelResponses(urls);
  // ('======TASK 5 SEQUENCE=====');
  await sequenceResponses(urls);

  console.log('======TASK 6=====');
  await getResolvedPromise(500)
    .then(value => {
      if (value > 300) {
        throw new Error('Ошибка');
      }
    })
    .catch(er => console.log(er.message))
    .finally(() => console.log('This is finally!'));

  console.log('======TASK 7=====');
  await fooAsync();

  console.log('======TASK 8=====');
  await fooAsyncTask8('https://jsonplaceholder.typicode.com/users');

  console.log('======TASK 9=====');
  await fooAsyncTask9();

  console.log('======TASK 10=====');
  const musician = new Musician('https://jsonplaceholder.typicode.com/albums');
  musician.getAlbums().then(albums => console.log(albums));
})();
