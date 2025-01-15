
const express = require('express');
const app = express();
// Load db here
import * as db from './db';

// middleware
app.use(express.json());

app.get('/', (req: any, res: any) => {
  res.end('Hello World');
});

// Just to make sure, the db call correctlly
app.get('/get-all', async (req: any, res: any) => {  
});

// 2. The API should return meal order and total price need to be paid. 
//

// Using promise all
app.get('put path in here', (req: any, res: any) => {
  
});

app.listen(3000, () => {
  db.init();
});

console.log('listening 3000');
