export const divide = function (a,b){
    if (b===0){
        return "no";
    }
    return a / b;
}

export const somme = function (a,b){
    return a + b;
}

export const plusGrandDuTmb = function (tmb){
    if(typeof tmb !== "object"){
        return "pas un tableau";
    }
    let plus = tmb[0];
    for (let i = 0; i < tmb.length; i++) {
        if(tmb[i]>plus){
            plus=tmb[i];
        }
    }
    return plus;
}

export const voyelle = function (tmb){
    tmb.split('')
    const voyelle = ["a","e","y","u","i","o"];
    const newtmb = [];
    let verif = 0;
    for (let i = 0; i < tmb.length; i++) {
        for (let j = 0; j < voyelle.length; j++) {
            if(tmb[i]===voyelle[j]){
                verif++
            }
        }
        if(verif===0){
            newtmb.push(tmb[i]);
        }else{
            verif=0
        }
    }
    return newtmb.join('');
}
