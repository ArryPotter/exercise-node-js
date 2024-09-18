# Predefined Condition: 
## Initial Database 
There is a skeleton API code using Express that already connected with SQLite. SQLite is in memory mode, and the DB structure can be seen on src/db.ts. The database store flight’s booking data.  

DB Structure 
| Field Name  | Field Type |
|-------------|------------|
| Flight_no   | text       |
| adult       | integer    |
| child       | integer    |
| infant      | integer    |

For the price list, we can check on file tmp/flight-data.json. 
Sample: 
```json
{
  "flight_no": "AF 123", 
  "price": { 
    "currency": "USD", 
    "adult": "1200", 
    "child": "600", 
    "infant": "300" 
  } 
}
```

## Initial Code 
In src directory, there are 3 files : 
- db.ts : this file is used to store DB initialization. Further we can use this file to store code to communicate with DB. 
- flight.ts : this file is used to store function that will be used on index.ts. Currently we already have function to getFlightPrice that will get data from tmp/flight-data.json (as above). Candidate must not modify this API. Only to utilize it.  
- index.ts : contain API route and to which function the code is mapped. 

## Questions: 
Candidate run live coding to create run and testable API (using PostMan or Insomnia) using the provided code named “Nodejs-Bootcamp-Live-Coding". The test will be held 30 – 45 minutes. 
1. Create API to show the current booking data (which includes flight price and total price need to be paid) based on flight number. (Bonus point: asked to use PromiseAll function). Example, 
*The candidate input flight number: AF 123, result:*

| Flight Number  | AF 123        | Price (in USD)  |
|----------------|---------------|-----------------|
| Adult          | 2             | 2400            |
| Child          | 0             | 0               |
| Infant         | 1             | 300             |
| Total          | 3 passengers  | 2700            |


2. Create API so the candidate can change total number of each passenger type. 
