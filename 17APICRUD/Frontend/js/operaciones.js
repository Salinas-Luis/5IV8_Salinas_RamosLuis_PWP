function createNewItem(e){
    event.preventDefault;

    const name = document.getElementById('newIName').value;
    const price = parseFloat(document.getElementById('newIPrice').value);
    const stock = parseInt(document.getElementById('newIStock').value);
    const categoryid = document.getElementById('newICategoryId').value;

    let id = categoryId+1;

    const newItem = {
        categoryid: categoryid,
        name: name,
        price: price,
        stock: stock
    }

    fetch('/products', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newItem)
    })
    .then(response => response.json())
    .then(data =>{
        console.log('Producto creado', data)
    })
    .catch(error =>{
        console.error('Error al producto', error)
    })
}