addEventListener("DOMContentLoaded", function(){
    
    const form = document.getElementById('mainform');
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const tel = document.getElementById("tel");
    const pwd = document.getElementById("pwd");
    const message = document.getElementById("message");
    const terms = document.getElementById("user-terms");


    form.addEventListener('submit', function(e) {
        e.preventDefault()
        if(checkInputs()){
            showSuccessiveModal();
        }else{
            showFailModal();
        }

    });
    
    name.addEventListener('input', () => {
        ValidateField(name, name.value.trim() != '', 'Campo Obrigatório');
    });
    
    email.addEventListener('input', () => {
        ValidateField(email, isEmail(email.value.trim()), 'Email inválido');
    });
    
    tel.addEventListener('input', () => {
        ValidateField(tel, isPhone(tel.value.trim()), 'Telefone inválido');
    });
    
    pwd.addEventListener('input', () => {
        ValidateField(pwd, pwd.value.length > 6 , 'Campo Obrigatório');
    });
    
    message.addEventListener('input', () => {
        ValidateField(message, message.value.trim() != '', 'Campo Obrigatório');
    });


    function checkInputs(){
        isValid = true;
        
        document.querySelectorAll('.form-control').forEach((control) => {
            if (control.classList.contains('error')) {
                isValid = false;
            }
        });
        
        if(!terms.checked){
            return  false;
        }

        return isValid;

    

    }


   function ValidateField(input, condition, errorMessage){
        if(condition){
            setSuccess(input);
        }else{
            setError(input, errorMessage);
        }
    }




    function isEmail(email){
           return  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);  
    }

    function isPhone(telefone) {
        telefone = telefone.replace(/\D/g, '');

        //verifica se tem a qtde de numero correto
        if (!(telefone.length >= 10 && telefone.length <= 11)) return false;
    
        //Se tiver 11 caracteres, verificar se começa com 9 o celular
        if (telefone.length == 11 && parseInt(telefone.substring(2, 3)) != 9) return false;
    
        //verifica se não é nenhum numero digitado errado (propositalmente)
        for (var n = 0; n < 10; n++) {
            //um for de 0 a 9.
            //estou utilizando o metodo Array(q+1).join(n) onde "q" é a quantidade e n é o
            //caractere a ser repetido
            if (telefone == new Array(11).join(n) || telefone == new Array(12).join(n)) return false;
        }

        return true;
    }


    function setSuccess(input){
        const formControl = input.parentElement;
        const icon = formControl.querySelector('.icon');
        formControl.classList.remove('error');
        formControl.classList.add('success');
        icon.className = 'icon fas fa-check-circle';
    }

    function setError(input, errorMessage){
        const formControl = input.parentElement;
        const icon = formControl.querySelector('.icon');
        formControl.classList.remove('success');
        formControl.classList.add('error');
        icon.className = 'icon fas fa-times-circle';
        input.placeholder = errorMessage;
    }

    function showSuccessiveModal(){
        const modal = document.getElementById("successModal");
        modal.style.display = 'block';

        const closeBtn = document.querySelector(".close-button");
        closeBtn.onclick = function () {
            modal.style.display = 'none';
        };

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        };
    }

    function showFailModal(){

    }

    var inputs = document.getElementById("mainform");
    inputs.addEventListener(
        'focus', 
        (event) => { 
        event.target.classList.add("input-selected"); 
                },
        true);
    inputs.addEventListener(
        'blur',
        (event) => { 
            event.target.classList.remove("input-selected"); 
                    }, 
        true);
    inputs.addEventListener(
        'mouseenter', 
        (event) => { 
            event.target.classList.add("mouse-on-input"); 
                    }, 
        true);
    inputs.addEventListener(
        'mouseleave',
        (event) => { 
            event.target.classList.remove("mouse-on-input"); 
                    }, 
        true);

                

});