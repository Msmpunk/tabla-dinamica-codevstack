
let listaComida = [
    {
        nombre:'Milanesa',
        descripcion: 'Son Ricas',
        calificacion: 7
    },
    {
        nombre:'Tamales',
        descripcion: 'Son caros',
        calificacion: 10
    },
    {
        nombre:'Tacos',
        descripcion: 'Son buenos',
        calificacion: 10
    }  
];

function showTable (){
    let tbody = document.getElementById('food-table')
    let tableConent = '';

    for (let i = 0; i < listaComida.length; i++) {
        const element = listaComida[i];
        tableConent += `
        <tr>
            <td>${element.nombre}</td>
            <td>${element.descripcion}</td>
            <td>${element.calificacion}</td>
        </tr>
        `
    }  
    tbody.innerHTML = tableConent;
}

function addFood(){
    event.preventDefault();
    let foodName = document.getElementById('comida').value
    let foodDescription = document.getElementById('descripcion').value
    let foodRate = document.getElementById('calificacion').value
    
    let newFood = {
        nombre: foodName,
        descripcion: foodDescription,
        calificacion: foodRate
    }

    listaComida.push(newFood)
    console.log(listaComida)
    
}
