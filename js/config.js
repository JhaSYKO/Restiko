var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyV3yJvN7T4rdlhW'
});
var base = Airtable.base('appVkRjVbMUIEoSHs');

$('#disconectUser').on('click', function(){
    localStorage.clear();
    window.location = 'index.html';
})