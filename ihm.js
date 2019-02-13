var service = require('./service');
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

exports.start = function() {

    menu();
}

var menu = function() {
        
    rl.question('*************************\n1. Rafraichir les données\n2. Lister les sessions\n99. Quitter\n', function(saisie) {

        switch(saisie) {

            case('1'):
                service.init(function(nb) {
                    console.log(nb, 'sessions trouvées.')
                });
                menu();
                break;

            case('2'):
                service.listerSessions(function(nb) {
                    str = nb.name + ' (' + nb.speakers + ')';
                    console.log(str);
                });
                menu();
                break;

            case('99'):

                rl.close();// attention, une fois l'interface fermée, la saisie n'est plus possible
                console.log('A bientôt');
                break;
            }
        });
    }
