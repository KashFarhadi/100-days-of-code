Vue.component( 'todo', {
    props: [ 'desc' ],
    template: '<li class="list-group-item lead">{{ desc }}<span class="float-right"><button class="fas fa-trash-alt text-danger btn btn-link" @click="$emit(\'remove\')"></button></div></li>'
});

var vm = new Vue({
    el: '#app',
    data: {
        todos: [
            {
                id: 0,
                desc: 'Apples',
            },
            {
                id: 1,
                desc: 'Bananas',
            },
            {
                id: 2,
                desc: 'Carrots'
            }
        ],
        nextTodo: {
            id: 3,
            desc: '',
        }
    },
    
    methods: {
        addTodo: function() {
            if ( this.nextTodo.desc.trim().length ) {
                this.todos.push({
                    id: this.nextTodo.id++,
                    desc: this.nextTodo.desc,
                });
                this.nextTodo.desc = '';
            }
        }
    },

    mounted: function () {
        this.$el.hidden = false;
    },

});