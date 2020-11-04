//Tugas3
// buatlah 2 program bebas dengan menggunakan promise seperti soal nomor 1


// const number = (num1, num2) => {
//     return new Promise((resolve, reject)=>{
//         if(typeof num1 === "number" && typeof num2 === "number"){
//             setTimeout(()=>{
//                 let result = num1 * num2
//                 resolve(result)
//             }, 3000)
//         }else{
//             const error = "inputan harus number"
//             reject(error)
//         }
//     })
// }

// number('a', 'b').then((res)=> {
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })



//tugas 2

const checkmyHobbies = (hobbi) => {
    return new Promise((resolve, reject) => {
            const myHobbies = ['makan', 'mancing', 'tidur', 'travelling', 'bermain']
            let cek = myHobbies.filter((item) => {
                return item === hobbi
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Ini bukan hobbi saya'))
            }
    })
}
checkmyHobbies('makan')
.then((result) => console.log(result [0]))
.catch((error) => console.log(error))


