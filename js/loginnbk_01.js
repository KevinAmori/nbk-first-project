cpf.addEventListener('keypress ', () => {
    let cpflength = cpf.value.length

    if(cpflength === 3 || cpflength === 7 || cpflength === 10) {
        cpf.value += '.'
    }

    print("boa noite")
});