/*
Possibili extra Bonus:
cliccando sui pallini visualizzeremo l'immagine corrispondente
*/

let container = new Vue({

    el: '.container',

    data: {

        immagini: [
            'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg',
            'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
            'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
            'https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg'
        ],
        indice: 0

    },

    methods: {

        immagineSuccessiva: function() {
            this.indice++;
            if (this.indice > this.immagini.length - 1) {
                this.indice = 0;
            }
        },

        immaginePrecedente: function() {
            if (this.indice > 0) {
                this.indice--;
            } else {
                this.indice = this.immagini.length - 1;
            }
        },

        cambiaIndice: function(indice_icona) {
            this.indice = indice_icona;
        }

    }
});