//Use this file to define indexes for your queries
db.restaurants.createIndex({ "location.coordinates": "2dsphere" });
db.restaurants.createIndex({ borough: 1 });
