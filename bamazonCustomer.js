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
    pickAnItem(res);
  })
}

function pickAnItem(products) {
inquirer
  .prompt([
    {
    type: "input",
    name: "choice",
    message: "enter product"
  }
])
.then(function(answer) {
  var itemSelected = parseInt(answer.choice);
   console.log(itemSelected);
   var product = itemList(itemSelected, products);
   console.log(product);
    if (product) {
    showQuantityList(product)
  }
   else {
     console.log("product is not listed");
     showItemList();
   }
})

}

function showQuantityList(product) {
  inquirer
  .prompt ([
    {
    name: "quantity",
    type: "input",
    message: "how many do you want?"
  }
  ])
  .then(function(answer){
    var quantity = parseInt(answer.quantity)
    console.log('inside quantity prompt', quantity);
    if (quantity > product.stock_quantity) { console.log("we do not have enough stock");
    showItemList();
  }
  else {
    buy(product, quantity)
  }
})
}

function buy(product, quantity) {
  console.log(product.id);
  connection.query(
    "update products set stock_quantity = stock_quantity - " + quantity + "  where id =  " + product.id,
    function(err,res) {
      console.log(err,res);
      console.log("\n nice purchase" + quantity + " "  + product.product_name + "$ for $" + product.price*quantity);
      showItemList();
    }
  )
}

function itemList(itemSelected, products) {
  for (i = 0; i < products.length; i++) {
    if (products[i].id === itemSelected) {
      return products[i];
    }
    console.log(itemSelected, products[i]);
  }
  return null;
}
