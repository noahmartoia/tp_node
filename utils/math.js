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
export const alphabet = function (tmb){
    return tmb.sort();
}

export const intToString = function (string){
    if(string=='100'){
        return 'cent';
    }else if(string=='11'){
        return 'onze'
    }else if(string=='12'){
        return 'douze'
    }else if(string=='13'){
        return 'treise'
    }else if(string=='14'){
        return 'quatorze'
    }else if(string=='15'){
        return 'quinze'
    }else if(string=='16'){
        return 'seise'
    }
    const lettre1 = ['',"un","deux","trois","quatre","cinq","six",'sept','huit','neuf']
    const lettre2 = ['dix','vingt','trente','quarente',"cinquente",'soixente','soixente-dix','quatrevingth','quatrevingth-dix']
    let lettre3 = '';
    if(string.length===1){
        for (let i = 0; i < lettre1.length; i++) {
            if(string[0]==i){
                return lettre1[i]
            }
        }
    }
    else if(string.length===2){
        for (let i = 0; i < lettre2.length; i++) {
            if(string[0]==i){
                lettre3+=lettre2[i-1]
            }
        }
        for (let i = 0; i < lettre1.length; i++) {
            if(string[1]==i){
                lettre3+='' + lettre1[i]
            }
        }
        return lettre3;
    }

}

export const objKey = function (obj){
    const tmb = [];
    for (let i = 0; i < obj.length; i++) {
        tmb.push(obj[i].name)
    }
    return tmb;
}

export const triNumber = function (tmb){
    return tmb.sort((e,a) => e-a).reverse()
}

export const voyelleToMaj = function (tmb){
    tmb.split('')
    const voyelle = ["a","e","y","u","i","o"];
    const newtmb = [];
    let verif = 0;
    for (let i = 0; i < tmb.length; i++) {
        for (let j = 0; j < voyelle.length; j++) {
            if(tmb[i]===voyelle[j]){
                verif++;
            }
        }
        if(verif===0){
            newtmb.push(tmb[i]);
        }else{
            newtmb.push(tmb[i].toUpperCase());
            verif=0;
        }
    }
    return newtmb.join('');
}

export const count = function (tmb){
    tmb.split('')
    const voyelle = ["a","e","y","u","i","o"];
    const newtmb = [];
    let countV = 0;
    for (let i = 0; i < tmb.length; i++) {
        for (let j = 0; j < voyelle.length; j++) {
            if(tmb[i]===voyelle[j]){
                countV++;
            }
        }
    }
    return countV;
}
export const consonneToMaj = function (tmb){
    tmb.split('')
    const voyelle = ["z","r","t","p","q","s","d","f","g","h","j","k","l","m","w","x","c","v","b","n"];
    const newtmb = [];
    let verif = 0;
    for (let i = 0; i < tmb.length; i++) {
        for (let j = 0; j < voyelle.length; j++) {
            if(tmb[i]===voyelle[j]){
                verif++;
            }
        }
        if(verif===0){
            newtmb.push(tmb[i]);
        }else{
            newtmb.push(tmb[i].toUpperCase());
            verif=0;
        }
    }
    return newtmb.join('');
}