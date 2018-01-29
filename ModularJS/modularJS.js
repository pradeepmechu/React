
(function(){
    var people = {
        people:['Will','Laura'],
        init: function(){
            this.cacheDom();
            this.render();

        },
        cacheDom: function(){
            this.$el = $('#peopleModule');
            this.$button = this.$el.find('button');
            this.$input = this.$el.find('input');
            this.$ul = this.$el.find('ul');
            this.template = this.$el.find('#people-template').html();
        },
        render: function() {
            var data = {
                people: this.people,
            };
            this.$ul.html(Mustache.render(this.template, data));
        },

    };

    people.init();

})()