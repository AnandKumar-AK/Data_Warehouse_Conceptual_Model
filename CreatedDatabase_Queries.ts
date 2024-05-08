//Connection MongoDB server
use food_and_drinks;

// Create a collection for retailers
db.createCollection("retailers");

// Insert retailer document
db.retailers.insertOne({
    "RetailerID": "R001",
    "Name": "Greenfield Grocers",
    "Address": "123 Greenfield Avenue",
    "Phone": "+1234567890",
    "Email": "greenfield@example.com",
    "Products": [
      {
        "ProductID": "P001",
        "Name": "Organic Apples",
        "Description": "Fresh organic apples",
        "Price": 2.99,
        "Stock": 100
      },
      {
        "ProductID": "P002",
        "Name": "Free-range Eggs",
        "Description": "Organic free-range eggs",
        "Price": 3.99,
        "Stock": 50
      }
    ]
  });

// retailers collection to find all documents
db.retailers.find();

// specific retailer by RetailerID
db.retailers.find({ "RetailerID": "R001" });

