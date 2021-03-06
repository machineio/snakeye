fun.views.footer = Backbone.View.extend({

    events: {
        "click #age-minus": 'ageMinus',
        "click #age-plus": 'agePlus'
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

        var validAge = sessionStorage.getItem("validAge");

        if (validAge === null || JSON.parse(validAge.toLowerCase()) !== true){

            $('#ageModal').modal({
                'show': true,
                'backdrop': 'static',
                'keyboard': true
            });

        }
    },

    ageMinus: function(){
        console.log('get out of here!');
        sessionStorage.setItem('validAge', false);
    },

    agePlus: function(){
        console.log('let me in');
        sessionStorage.setItem('validAge', true);
        $('#ageModal').modal('hide');
    }

});