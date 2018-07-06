var vm = new Vue({
    el: '#app',
    data: {
        showExample1: false,
        showExample2: false,
        showExample3: false,
        transitionStatus: ''
    },
    mounted: function() {
        this.$el.hidden = false;
    }
});