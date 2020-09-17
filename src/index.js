import './styles/main.css';

// import { foo, createCb } from './asynchronous-programming/task1';
// import { parseJSON, succesCb, failureCb } from './asynchronous-programming/task2';
// import { delay } from './asynchronous-programming/task3';
// import { doubleFetch } from './asynchronous-programming/task4';
import { parallelResponses, sequenceResponses, urls } from './asynchronous-programming/task5';

// console.log('======TASK 1=====');
// foo(5, createCb('cb'));
// foo(20, createCb('cb'));

// console.log('======TASK 2=====');
// parseJSON('{"x": 10}', succesCb, failureCb);
// parseJSON('{x}', succesCb, failureCb);

// console.log('======TASK 3=====');
// delay(1500).then(value => console.log(`Done with ${value}`));

// console.log('======TASK 4=====');
// doubleFetch();

console.log('======TASK 5 PARALLEL=====');
parallelResponses(urls);
console.log('======TASK 5 SEQUENCE=====');
sequenceResponses(urls);
