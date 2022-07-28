# Restful API - Node.js Express.js MongoDB

Build a Restful API with Node.js, Express.js, and MongoDB. This repository contains a boilerplate for Restful API requests GET, POST, PATCH, and DELETE. This boilerplate is without UI all requests are tested with the POSTMAN tool. JSON Data is stored in MongoDB(cloud). The MongoDB schema is designed for a simple product that has 11 fields (a sample is given below).
 
 
 
 - Product JSON Sample, used for this repository.
  {
        "_id": "62e1767bc80df0cf2e929b6b",
        "id": 0,
        "title": "MACBOOK PRO 13-inch ---- Updated",
        "desc": "M2 is the next generation of Apple silicon. Its 8-core CPU lets you zip through everyday tasks like creating documents and presentations,         or take on more intensive workflows like developing in Xcode or mixing tracks in Logic Pro.",
        "img": "13pro-keyboard.jpg",
        "price": 320000,
        "priceQuantity": 320000,
        "quantity": 1,
        "category": "laptops",
        "popular": "yes",
        "Main Features": "8-Core CPU | 10-Core GPU",
        "date": "2022-07-27T17:31:39.052Z",
        "__v": 0
    }
    
  
    
  - Data stored to mongoDB cloud
  
 <img width="1207" alt="monogDB" src="https://user-images.githubusercontent.com/54082156/181512879-ec669146-93ae-4264-97e8-5a84a334ac31.png">

 
 - All requests tested through POSTMAN

 <img width="1669" alt="Screenshot 2022-07-28 at 6 12 40 PM" src="https://user-images.githubusercontent.com/54082156/181513701-48372b77-0ec6-4206-953c-a35237e40f87.png">

 
 
 .env - contain database details this file made public for learning purposes.
