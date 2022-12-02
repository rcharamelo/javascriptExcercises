
class Afiliado {
    constructor(nombreApellido, edad, mail, cedula, ingresos) {
        this.nombreApellido = nombreApellido.toUpperCase();
        this.edad = edad;
        this.mail = mail.toUpperCase();
        this.cedula = cedula.toUpperCase();
        this.ingresos = ingresos;
    }
}

function agregarAfiliados(){
    let afliliaciones = [];
    let numeroAfiliaciones = parseInt(
        prompt("Ingrese la cantidad de Afiliaciones")
        );

        for(let index= 0; index < numeroAfiliaciones; index++);{
            let nombre = prompt("Ingrese nombre y apellido");
            let edad = comisionEdad();             //parseInt(prompt("Ingrese la edad"));
            let mail = prompt("Estado de cuenta por mail? (Si/No)");
            let cedula = prompt("Tiene foto de cédula? (Si/No)");
            let ingresos = parseInt(prompt("Ingrese el sueldo nominal"));

            let afiliadoARegistrar = new Afiliado(
                nombre, 
                edad, 
                mail, 
                cedula, 
                ingresos
            );

            afliliaciones.push(afiliadoARegistrar); 

    }
}

function comisionEdad(){
    //Sigue ejecutando el prompt a menos que ingrese un número
    let edad = parseInt(prompt("Ingrese la edad"));
    while(isNaN(edad)){
        edad = parseInt(prompt("Ingrese la edad"));
    }
    //De acuerdo a la franja etárea establece la comisión
    switch(true){
        case (edad >=18 && edad <=20): 
            comisionEdad =600;
        break;
        case (edad >=21 && edad <=25): 
            comisionEdad =500;
        break;
        case (edad >=26 && edad <=30):
            comisionEdad =200;
        break;
        case (edad >30 && edad<40):
            comisionEdad =0;
        default: 
            console.log("La edad no es válida, el afiliado debe tener más de 18 y menos de 40 años");
    }
    return comisionEdad;
}


function main(){
    let afiliado = Afiliado();
}