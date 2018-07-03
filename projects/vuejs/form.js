var vm = new Vue({
    el: '#app',
    data: {
        form: {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            plan: '',
            agreedTOS: 'No',
        }
    },
    methods: {
        submitForm: function() {
            console.log('Submitting form...');
            console.log(this.$data.form);
        },
    },
    computed: {
        
    },
    mounted: function(){ 
        this.$el.hidden = false;
    }
});