import './styles/main.css';

import { foo, createCb } from './asynchronous-programming/task1';
import { parseJSON, succesCb, failureCb } from './asynchronous-programming/task2';

//    TASK 1
console.log('======TASK 1=====');
foo(5, createCb('cb'));
foo(20, createCb('cb'));

console.log('======TASK 2=====');
parseJSON('{"x": 10}', succesCb, failureCb);
parseJSON('{x}', succesCb, failureCb);
