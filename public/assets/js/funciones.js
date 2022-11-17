

const producto = document.getElementById('producto');
const precio   = document.getElementById('precio');
const cantidad = document.getElementById('cantidad');
const subtotal = document.getElementById('subtotal')
const respues  = document.getElementById('respuesta')

const btnRegistrar = document.getElementById('btnRegistrar');

producto.addEventListener('blur', comprobar);
precio.addEventListener('blur', comprobar);
cantidad.addEventListener('blur', comprobar);

btnRegistrar.addEventListener('click', validarCampo)

function validarCampo(){
    if(producto.value === '' || precio.value === '' || cantidad.value === ''){
        alert('los campos deben llenar se')
    }else{
        calcular()
    }
}

function comprobar(){
    validar(this);
}

function validar(campo){
    calcular()
}

function calcular(){
    let valor = parseInt(precio.value) * parseInt(cantidad.value);

    if(isNaN(valor)){
        subtotal.value = 0;
    }else{
        subtotal.value = valor;
        mostrar();
    }
}

function mostrar(){
    respues.innerHTML = '<br>';
    respues.innerHTML = 'Registro Exitoso';
}

