import dotenv from 'dotenv-safe';
import add from '@src/math/add';

dotenv.config();

console.log('Hello, world');
console.log(add(1, 3));
console.log(process.env.NAME);
