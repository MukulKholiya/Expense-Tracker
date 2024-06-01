let items = [];
let totalExpense = 0;

document.getElementById('addItemButton').addEventListener('click', function() {
    document.getElementById('formContainer').style.display = 'block';
    document.getElementById('itemListContainer').style.display = 'none';
});

document.getElementById('showItemsButton').addEventListener('click', function() {
    document.getElementById('formContainer').style.display = 'none';
    document.getElementById('itemListContainer').style.display = 'block';
});

document.getElementById('submitItemButton').addEventListener('click', function() {
    const itemName = document.getElementById('itemName').value;
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);

    if (itemName && !isNaN(itemPrice) && itemPrice > 0) {
        items.push({ name: itemName, price: itemPrice });
        totalExpense += itemPrice;

        updateItemList();
        updateTotalExpense();

        // Reset input fields
        document.getElementById('itemName').value = '';
        document.getElementById('itemPrice').value = '';
    } else {
        alert('Please enter valid item name and price.');
    }
});

function updateItemList() {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name}: Rs.${item.price.toFixed(2)}`;
        itemList.appendChild(li);
    });
}

function updateTotalExpense() {
    document.getElementById('totalExpense').textContent = totalExpense.toFixed(2);
}
