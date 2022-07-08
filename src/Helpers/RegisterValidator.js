const RegisterValidator = (values) => {
    const {email, password, repassword, role, region, country} = values
    let errors = {}

    !email && (errors.email = '*')
    !password && (errors.password = '*')
     role === 'none' && (errors.role = '*')
     country === 'none' && (errors.country = '*')
     region === 'none' && (errors.region = '*')

    if(email){
        if(email.length > 30 || email.length <  6)
            errors.email = '[6-30] caracteres.'
    }

    if(password){
        if(password.length > 15 || password.length < 6)
            errors.password = '[6-15] caracteres.'
        if(!password.match(/[aA0-zZ9]/))
            errors.password = 'Letras y numeros unicamente.'
        else if(!password.match(/[A-Z]{1}/))
            errors.password = 'Al menos debe haber una letra mayuscula.'
        else if(!password.match(/[0-9]{1}/))
            errors.password = 'Al menos debe haber un numero.'
    }

    if(password !== repassword)
        errors.repassword = 'Ambas deben ser iguales.'

    return errors
}

export default RegisterValidator