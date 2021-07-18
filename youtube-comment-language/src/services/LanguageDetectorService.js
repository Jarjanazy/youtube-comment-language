const lngDetector = new (require('languagedetect'));

const getStringLanguage = function(string){
    const result = lngDetector.detect(string,1);
    if (typeof result !== 'undefined' && result.length != 0){
        console.log(result);
        return result[0][0];
    }
}

const getAllStringOfLanguage = function(strings, language){
    console.log("comparing "+ language);
    const result = strings
    .filter(s => getStringLanguage(s) === language);

    console.log(result);
    return result;
}

export default({
    getAllStringOfLanguage
});