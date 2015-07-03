fun.views.footer = Backbone.View.extend({

    events: {

    },

    initialize : function(options) {
        fun.containers.footer = this.$el;
    },
    
    render : function(){
        var template = _.template(
            fun.utils.getTemplate(fun.conf.templates.footer)
        );
        this.$el.html(template);
        this.$el.show();

        var account = localStorage.getItem("username", username);

        if (typeof account === undefined || account === null || account === ''){
            $('#ageModal').modal({
                'show': true,
                'backdrop': 'static',
                'keyboard': true
            });
        } else {
            console.log('check this stuff up');
        }
    }

});