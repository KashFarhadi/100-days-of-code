Vue.component( 'blog-post', {
    props: [ 'post' ],
    template:   '<div class="my-4" :class="\'post-\' + post.id">\
                    <h2>{{ post.title }}</h2>\
                    <div v-html="post.excerpt"></div>\
                </div>',
});

Vue.component( 'alert', {
    props: [ 'type' ],
    template:   '<div class="alert" :class="\'alert-\' + type ">\
                    <slot />\
                </div>',
});

var vm = new Vue({
    el: '#blog',
    data: {
        posts: [
            {
                id: 0,
                title: 'Top 10 WordPress Plugins',
                excerpt: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae hic ad velit libero nostrum laboriosam voluptatum amet sit voluptate modi.',
            },
            {
            	id: 1,
            	title: '15 Tips for Securing Your Web App',
            	excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nisi nam dolore sequi? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, delectus.',
            },
            {
                id: 2,
                title: 'Getting started with VueJS',
                excerpt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam deleniti accusamus voluptatum reprehenderit veritatis fuga ipsum, debitis quasi.',
            }
        ]
    },

    mounted: function() {
        this.$el.hidden = false;
    }

});
