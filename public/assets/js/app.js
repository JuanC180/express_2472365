const lblUsuario = document.querySelector('#lblUsuario')
const lblPassword = document.querySelector('#lblPassword')


inicio();

function inicio(){
    document.addEventListener('submit', formulario)
}

function formulario(e){
    e.preventDefault();

    if(lblUsuario.value === '' || lblPassword.value === ''){
        if(lblUsuario.value === ''){
            lblUsuario.classList.add('lblError');
        }
        if(lblPassword.value === ''){
            lblPassword.classList.add('lblError');
        }
    }else{
        if(lblUsuario.classList.contains('lblError') || lblPassword.classList.contains('lblError') ){
            lblUsuario.classList.remove('lblError')           
            lblPassword.classList.remove('lblError')    
            
            alert(`Paso la validacion`);

            setTimeout(() =>{
                // window.location.replace('https://www.google.com');
                window.location.replace('/editar');
            },3000)
            
        }

    }
}

// console.log(lblUsuario.value)
// console.log(lblPassword.value)