
function Hora () {
    setInterval (()=> apareceHora(), 2000)
}
function apareceHora(){
    let Data = new Date()
    let seg = Data.getSeconds()
    let min = Data.getMinutes()
    if (min < 10) {
        min = '0'+min
    }
    if (seg < 10){
        seg = '0'+seg
    }
    return console.log(`${Data.getHours()}:${min}:${seg}`)
}

Hora()
