//Tugas4
// Buatlah program menggunakan method fetch untuk menampilkan semua name (hanya name nya saja) dari REST API dibawah ini
// https://jsonplaceholder.typicode.com/users
// Gunakan debugger console bawaan browser Chrome untuk melihat hasilnya


let link_url = "https://jsonplaceholder.typicode.com/users"
const getData = () => fetch(`${link_url}`)

getData()
    .then(Response => Response.json())
    .then(Result => Result.map((item) => {
        console.log(item.name)
    })
    )