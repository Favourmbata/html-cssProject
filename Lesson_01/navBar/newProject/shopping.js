

let total = 0;

function createElement(){
  return {
    shoppingCart: document.getElementsByTagName('tbody'),
    newRow: document.createElement('tr'),
    newItem: document.createElement('td'),
    newPrice: document.createElement('td')
  }
}



function getInput(){
  let item = document.getElementById('item');
  let price = document.getElementById('price');
  return {item,  price}
}

function addToCart(){
  let {item, price} = getInput();
  total += Number(price.value);

  if(item.value !== "" && price.value !== ""){

    showOnCart(item.value, price.value)

    item.value = "";
    price.value = "";
  }

}

function showOnCart(item, price){
  let {shoppingCart, newRow, newItem, newPrice} = createElement();

  newItem.innerHTML = item;
  newPrice.innerHTML = price;
  newRow.appendChild(newItem);
  newRow.appendChild(newPrice);
  shoppingCart[0].appendChild(newRow);

}

function removeFromCart(){
  let { item, price } = getInput();

  let { shoppingCart, newRow, newItem, newPrice } = createElement();
  newItem.innerHTML = item.value;
  newPrice.innerHTML = price.value;
  newRow.appendChild(newItem);
  newRow.appendChild(newPrice);

  for(let row of shoppingCart){
    if (JSON.stringify(newRow) === JSON.stringify(row)) {
      console.log("removing", item.value, price.value)
      row.childElement.parentElement.removeChild(() => {

      });
    }
  }

  item.value = "";
  price.value = "";
}

function getTotal(){
  showOnCart("Total", total);
}