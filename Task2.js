//Tugas2
// Buat program menggunakan callback function untuk melanjutkan dan menampilkan semua bulan menggunakan method map


const getmonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ['January', 'February', 'March', 'April', 'May', 'July', 'Agustus', 'September', 'October', 'November', 'Desember'];
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error('sorry Data Not Found'), [])
        }
    }, 1000)
}

const month = (massage, month) =>{
    if (massage != null){ 
       console.log(massage)
    }else {
        let result = month;
        result.map((item)=>{
            console.log(item)
        })

    }
    
} 
getmonth(month)
