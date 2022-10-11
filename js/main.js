// registro e inicio de sesion 
alert("Bienvenido al cotizador de HatakeSNFLWR, por favor registrese o inicie sesion  para continuar");

let username = prompt("Escribe un nombre de usuario:");
let password = prompt("Escribe una contraseña:");

alert("Registro correcto, inicia sesion");

function uservalid() {
    let storageuser = prompt("Ingresa tu usuario:");
    while (storageuser != username) {
        alert("Usuario incorrecto, intenta nuevamente:");
        storageuser = prompt("Ingresa tu usuario:");
    };
    return storageuser;
}

function passvalid() {
    let storagepass = prompt("Ingresa tu contraseña:");
    while (storagepass != password) {
        storagepass = prompt("Contraseña incorrecta, intenta de nuevo:");
    }
    return storagepass;
}

function login() {
    if (uservalid(), passvalid()) {
        return alert(`Bienvenido ${username}`);
    }
}

login();

// inicio del cotizador
let service = prompt("Dime el tipo de servicio: 'desarrollo', 'diseño' o 'ilustracion'");
const type = ['desarrollo', 'diseño', 'ilustracion'];

function development() {
    const pagetype = ['empresarial', 'personal'];
    const layouttype = ['si', 'no'];
    if (service == type[0]) {
        alert(`Bienvenido`);
        let page = prompt("El proposito del sitio es empresarial o personal?");
        const valuer = pagevalue();
        function pagevalue() {
            if ((page == pagetype[0])) {
                let value = 1.8;
                return value;
            }
            else {
                let value = 1;
                return value;
            }
        }
        let pages = prompt("Cuantas secciones tendria la pagina?");
        let layout = prompt("El sitio seria responsivo?");    
        const coster = layoutcost();
        function layoutcost() {
            if ((layout == layouttype[0])) {
                let cost = 1.6;
                return cost;
            }
            else {
                let cost = 1;
                return cost;
            }
        }
        let total = coster * valuer * pages * 6 * 4;
        alert(`El costo aproximado de tu sitio es de ${total} usd`);
    }

}

function design() {
    if (service == type[1]) {
        alert(`Por favor, llene esta solicitud y me contactare directamente lo mas pronto posible`);
        const inputObject = {
            mail: prompt("correo electronico"),
            num: prompt("numero de telefono"),
            com: prompt("Escriba los detalles de la comision."),
        };
        for (const property in inputObject) {
          console.log(property);
        }
    }
}

function illustration() {
    const hard = ['alto', 'medio', 'bajo'];
    if (service == type[2]) {
        let illus = prompt("Cuantas piezas se requieren ilustrar?");
        let reso = prompt("Indique la resolucion de las ilustraciones (alto, medio, bajo).");
        const diff = resolution();
        function resolution() {
            if ((reso == hard[0])) {
                let value = 1.8;
                return value;
            }
            else if ((reso == hard[1])) {
                let value = 1.4;
                return value;
            }
            else if ((reso == hard[2])) {
                let value = 1;
                return value;
            }
        }
        let detail = prompt("Indique el nivel de detalle (alto, medio, bajo).");
        const diffe = details();
        function details() {
            if ((detail == hard[0])) {
                let cost = 1.8;
                return cost;
            }
            else if ((detail == hard[1])) {
                let cost = 1.4;
                return cost;
            }
            else if ((detail == hard[2])) {
                let cost = 1;
                return cost;
            }
        }
        let total = illus * diff * diffe * 6 * 4;
        alert(`El costo aproximado de tu comision es de ${total} usd`);
    }
}


development();
illustration();
design();