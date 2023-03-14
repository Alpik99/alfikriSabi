const users = [{
    brand: 'mazda',
    pintu: 2,
    BBM: 'pertamax turbo'

},
{
    brand: 'avanza',
    pintu: 4,
    BBM: 'pertamax'
},
{
    brand: 'honda civic',
    pintu: 2,
    BBM: 'pertamax turbo'

}
]

let mobil = prompt("masukan jenis BBM ");
const usersMobil = users.filter((user) => user.BBM === mobil);

console.log(usersMobil)
