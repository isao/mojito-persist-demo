YUI.add('hits', function(Y, NAME) {

    var count = 0;//persistant across requests

    Y.mojito.models[NAME] = {

        get: function() {
            if(count === Infinity) {
                count = 0;
            }
            return ++count;
        }

    };

}, '0.0.1', {requires: []});
