import fs from 'fs';

const getMealPrice = () => {
    return new Promise( (resolve, reject) => {
        fs.readFile('./tmp/menu.json', 'utf-8', (err, data) => {
            resolve(data);
        });
    });
};

export {
    getMealPrice,
}