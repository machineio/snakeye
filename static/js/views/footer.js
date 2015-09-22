fun.views.footer = Backbone.View.extend({

    events: {

    },

    initialize: function(options) {
        fun.containers.footer = this.$el;
    },
    
    render: function(){
        var template = _.template(
            fun.utils.getTemplate(fun.conf.templates.footer)
        );
        this.$el.html(template);
        this.$el.show();

        var validAge = localStorage.getItem("validAge");

        if (Boolean(validAge) != true){

            $('#ageModal').modal({
                'show': true,
                'backdrop': 'static',
                'keyboard': true
            });

        }
    }

});