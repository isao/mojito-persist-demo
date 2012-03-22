YUI.add('Counter', function(Y) {

    Y.mojito.controller = {
        index: function(ac) {

            ac.done('count: ' + ac.models.hits.get() + "\n");

        }
    };

}, '0.0.1', {requires: ['mojito', 'hits']});
