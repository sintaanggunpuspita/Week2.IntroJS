//Tugas1
// Buatlah sambungan program menggunakan then catch dan juga try catch untuk mengecek hari kerja dari kode Asynchronous dibawah dan jelaskan penggunaan then catch dan try catch dengan memberikan komentar di bawahnya:


const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

cekHariKerja('minggu')
.then((result) => console.log(result))
.catch((error) => console.log(error))

//then adalah mengeksekusi kondisi yang true
//catch adalah mengeksekusi kondisi yang false

const getcekHariKerja = async() => {
    try {
        let result = await cekHariKerja('minggu')
        console.log(result)
    } catch (error) {
        console.log(error.message)
    }
}

getcekHariKerja()
// try adalah untuk menguji apakah kode terjadi kesalahan
// cacth menangani eror yang ditangkep oleh try








