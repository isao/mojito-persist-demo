YUI.add('Counter', function(Y) {

    var date = +new Date();

    Y.mojito.controller = {
        index: function(ac) {
            var str = ['ts:', date, 'count:', ac.models.hits.get()].join(' ');
            date = +new Date();
            ac.done(str + "\n");
        }
    };

}, '0.0.1', {requires: ['mojito', 'hits']});
