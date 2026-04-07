function validPasswd(pass: string): boolean {
    pass = pass.trim();
    if (!pass) return false;
    return /[A-Za-z0-9#@&]{8,}/.test(pass)
        && /[A-Za-z]+/.test(pass)
        && /[0-9]+/.test(pass)
        && /[@#&]+/.test(pass);
}

let pass1='amerca1@';
let pass2='amrca154682';
console.log('####')
console.log(`In: ${pass1}\t\tOut: ${validPasswd(pass1)}`);
console.log(`In: ${pass2}\t\tOut: ${validPasswd(pass2)}`);