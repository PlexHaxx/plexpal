module.exports = function(app) {
    var plex = require('../app/plex.js')();

    app.get('/', function(req, res) {
        var infoPromise = plex.basicInfo();
        var view = {};

        infoPromise.then(function(data) {
            view = JSON.parse(data);
            res.render('index', view);
        });

        infoPromise.catch(function(reason) {
            console.log(reason);
        });

    });
};

