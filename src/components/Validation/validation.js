const validation = (userData) => {
    const errors = {};

    if(!/\S+@\S+\.\S+/.test(form.email)){
        errors.email = 'el email ingresado no es valido';
    }
    // nombre de usuario no puede estar vacio
    if(!userData.email) {
        errors.email = 'debe ingrear un email';
    }
    // maximo 35 caracteres 
    if(userData.email.length > 35) {
        errors.email = 'el email no debe superar los 35 caracteres'
    }
    if(!/.*\d+.*/.test(userData.password)){
        errors.password = 'la contraseña debe contener al menos un número'
    }
    if(userData.password.length < 6 || userData.password.length > 10 ){
        errors.password = 'La contraseña debe tener un minimo de 6 caracteres o un maximo de 10'
    }

    return errors;
}

export default validation