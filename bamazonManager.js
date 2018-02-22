var table = require('console.table');
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "dudewasup23",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  showItemList();
});

function showItemList(products){
  connection.query("SELECT  * FRom products", function(err,res) {
    if (err) throw err;
    console.table(res);
   runSearch();
  })
}


function runSearch(products) {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "add stock",
        "add new product",
        "show low inventory"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
        case "show low inventory":
        showLowInventory();
          break;

        case "add stock":
          addStock();
          break;

        case "add new product":
          addProduct();
          break;


      }
    });
}

function addStock(products) {
  inquirer
  .prompt ([
    {
    name: "choice",
    type: "input",
    message: "which item are you looking for?"
  }
  ])
  .then(function(answer) {
    var itemSelected = parseInt(answer.choice);
     console.log(itemSelected);
     var product = itemList(itemSelected, products);
     console.log(product);
      if (product) {
      showQuantityList()
    }

  })

}

// function showQuantityList(product) {
//    inquirer
//     .prompt ([
//       {
//         name: "quantity",
//         type: "input",
//         message: "how much stock do we need?"
//       }
//     ])
//     .then(function(answer){
//     var quantity = parseInt(answer.quantity)
//     console.log('inside quantity prompt', quantity);
//     connection.query(
//       "update products set stock_quantity = stock_quantity + " + quantity + "  where id =  " + products.id,
//       function(err,res) {
//         console.log(err,res);
// })
//   })
// }

function showLowInventory() {
  connection.query("SELECT  * FRom products where stock_quantity < 5", function(err,res) {
    if (err) throw err;
    console.table(res);

  })

}


function itemList(itemSelected, products) {
  for (i = 0; i < products.length; i++) {
    console.log(products.length);
    if (products[i].id === itemSelected) {
      return products[i];
    }
    console.log(itemSelected, products[i]);
  }
  return null;
}
