const capitalizeWords = (sentence) => { //Con esta funcion devuelvo una frase con las iniciales de cada palabra en mayusculas
    let phrase = sentence.toLowerCase()
    return phrase.replace(/\b\w/g, function (match) {
        return match.toUpperCase();
    });
}
//console.log(capitalizeWords("HOLA MUNDO"))

export default capitalizeWords