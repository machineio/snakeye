fun.views.footer = Backbone.View.extend({

    events: {
        'click #age-minus': ageMinus,
        'click #age-plus': agePlus
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

        $('#ageModal').modal({
            'show': true,
            'backdrop': 'static',
            'keyboard': true
        });
    },

    ageMinus: function(){
        console.log('get out of here!');
    },

    agePlus: function(){
        console.log('let me in');
        $('#ageModal').modal('hide');
    }

});