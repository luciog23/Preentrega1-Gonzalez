let fondos = 1000000
let saldo = 0

function numeroDeCuenta() {
    let cuenta = parseInt(prompt("ingrese numero de cuenta"))
    console.log("su numero de cuenta es:" + " " + cuenta)
}
numeroDeCuenta()

function operacion() {
    let transaccion = (prompt("escribe deposito o retiro"))
    console.log(transaccion)
    if (transaccion === "deposito") {
        let deposito = parseInt(prompt("ingrese monto del deposito"))
        console.log(deposito)
        saldo = fondos + deposito
        fondos = saldo
    }
    if (transaccion === "retiro") {
        let retiro = parseInt(prompt("ingrese monto del retiro"))
        console.log(retiro)
        saldo = fondos - retiro
        fondos = saldo
    }
}
operacion()
let repetir = prompt("quiere hacer otra transaccion si / no")
while (repetir == "si") {
    operacion()
    repetir = prompt("quiere hacer otra transaccion si / no")
}
console.log("su saldo es:" + " " + saldo)

