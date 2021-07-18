const lngDetector = new (require('languagedetect'));

const getStringLanguage = function(string){
    const result = lngDetector.detect(string,1);
    if (typeof result !== 'undefined' && result.length != 0){
        return result[0][0];
    }
}

const getAllStringOfLanguage = function(strings, language){
    return strings
        .filter(s => getStringLanguage(s) === language);
}

export default({
    getAllStringOfLanguage
});