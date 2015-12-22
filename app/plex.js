module.exports = function() {
    function makeRequest(method, url) {
        var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

        var promise = new Promise(function(resolve, reject) {
            var request = new XMLHttpRequest();
            request.open(method, url);

            request.onload = function() {
                if (request.status >= 200 && request.status <= 300) {
                    resolve(request.responseText);
                } else {
                    reject(Error(request.statusText));
                }
            };

            request.onerror = function() {
                reject(Error(request.status));
            };

            request.setRequestHeader('Accept', null);
            request.setRequestHeader('Accept', 'application/json');
            request.send();
        });

        return promise;
    };

    var plex = {
        name : 'Plex Media Server',
        url: 'http://192.168.1.99:32400'
    };

    plex.basicInfo = function() {
        var infoPromise = makeRequest('GET', plex.url);
        return infoPromise;
    };

    return plex;
};

