import { encoded, translations } from './data.js'

console.log("Let's rock")
console.log(encoded, translations)

const getDecoded = (encoded, translations) => {
    const noDecoded = ['groupId', 'service', 'formatSize', 'ca'];
    return encoded.map(item => {
        const decodedItem = {};
        for (const key in item) {
            decodedItem[key] = noDecoded.includes(key) || !key.endsWith('Id') ?
                item[key] :
                item[key] !== null && translations.hasOwnProperty(item[key]) ? translations[item[key]] : item[key]
        }
        return decodedItem;
    });
};

const unicId = [];
encoded.forEach(item => {
    for (const key in item) {
        if (key.endsWith('Id') && !unicId.includes(item[key]) && translations[item[key]] === undefined && item[key] !== null) {
            unicId.push(item[key]);
        }
    }
});

const decoded = getDecoded(encoded, translations);
console.log(decoded);
console.log(unicId);
