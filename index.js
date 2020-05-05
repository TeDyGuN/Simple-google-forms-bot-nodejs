var request = require('request');
// GOOGLE FORMS URL
// COPY URL FORM AND CHANGE /viewform for /formResponse
var url = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScP8ryjYty330MB3FWanRy_9b88o_UtTPcfq1dyn0-GoVheYg/formResponse';
// ANSWERS POOL
var q1 = ['Hombre', 'Mujer'];
var q2 = ['15 - 25', '26 - 35', '36 - 45', '45 - mas'];
var q3 = ['El Alto', 'La Paz'];
var q4 = ['Si', 'No', 'Aveces'];
var q5 = ['Si', 'No', 'Que es eso?'];
var q6 = ['Si', 'No', 'Puede ser'];
var q7 = ['Sabor', 'Calidad', 'Precio', 'Presentacion', 'Todas las anteriores'];
var q8 = ['Plazas', 'Súper mercados', 'Patios de comidas', 'Donde se pueda'];
var q9 = ['Vaso', 'Cono', 'Paleta'];
var q10 = ['Muy importante', 'Masomenos importante', 'Poco importante', 'No me importa cuanto pague']
var q11 = ['Si', 'No', 'Me da igual'];

// RANDOM ANSWER
// console.log(q1[Math.floor(Math.random() * 2)]);

// SEND WITH RANDOM ANSWER
var options = {
    'method': 'POST',
    'url': url +
        '?entry.823708827=' + q1[Math.floor(Math.random() * 2)] +
        '&entry.326816270=' + q2[Math.floor(Math.random() * 4)] +
        '&entry.846342707=' + q3[Math.floor(Math.random() * 2)] +
        '&entry.1367140403=' + q4[Math.floor(Math.random() * 3)] +
        '&entry.867457934=' + q5[Math.floor(Math.random() * 3)] +
        '&entry.1249662454=' + q6[Math.floor(Math.random() * 3)] +
        '&entry.1855720062=' + q7[Math.floor(Math.random() * 5)] +
        '&entry.717641918=' + q8[Math.floor(Math.random() * 4)] +
        '&entry.1201910469=' + q9[Math.floor(Math.random() * 3)] +
        '&entry.563699022=' + q10[Math.floor(Math.random() * 4)] +
        '&entry.964553484:=' + q11[Math.floor(Math.random() * 3)],
    'headers': {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': 'S=spreadsheet_forms=WFwwue00yunV5RKL2pNhX5dlKiXc_HgY; NID=203=BWYS4rF3hdtsZtqIeoJ1FKtgXggQW6Y-SR8P6xVmCkTlIKDh6OlFJOvWZl8QyGtfKHA5teHhfSCIiyowr3hyCmDE8lNHBxTaplhLrTTevNSwtl2P9wVhQfLI7flkPbDhnMEhDhSRXCQgjmlqWiLH3flG9qO4IhgiEheEjqBn_OA'
    },
    form: {

    }
};
function fetchData() {
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log('Done');
    });
}
// SEND MANY TIMES
for( i = 0; i < 50; i++) {
    fetchData();
    // SEND WITH TIMER
    // setInterval(fetchData,1000);
}

