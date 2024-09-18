const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

const init = async () => {
  db.serialize(() => {
    db.run('DROP TABLE IF EXISTS order_data')
    db.run(
      'CREATE TABLE order_data(meal_id TEXT, large INTEGER, medium INTEGER, small INTEGER)'
    )
    db.run('INSERT INTO order_data VALUES("ME123", 1, 2, 3)');
    db.run('INSERT INTO order_data VALUES("ME500", 0, 3, 2)');
  });
};

const getAll = () => {
  return new Promise(function (resolve, reject)
  {
    db.all('SELECT * FROM order_data', (err: any, rows: unknown) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  })  
};

const getByMealId = () => {
  return new Promise(function (resolve, reject)
  {
    db.all('', (err: any, rows: unknown) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  })  
};


export { db, init, getAll, getByMealId  };