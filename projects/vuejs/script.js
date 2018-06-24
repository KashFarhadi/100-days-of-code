Vue.component('transaction', {
	props: ['item'],
	template: '<tr><td>#{{ item.id }}</td><td>{{ item.desc }}</td><td>${{ item.value }}</td></tr>'
});

var app = new Vue({
	el: '#app',
	data: {
		title: 'Accounts',
		users: [{
				id: 0,
				name: 'Jonny',
				balance: 25
			},
			{
				id: 1,
				name: 'Bob',
				balance: 5
			},
			{
				id: 2,
				name: 'Jane',
				balance: 500
			},
		],
		transactions: [{
				id: 0,
				userId: 0,
				value: 50,
				desc: 'Superstore'
			},
			{
				id: 1,
				userId: 0,
				value: 15,
				desc: 'Spotify'
			},
			{
				id: 2,
				userId: 2,
				value: 60,
				desc: 'Bell'
			},
		],
		time: 'Last updated: ' + new Date().toLocaleString(),
		notes: '',
		instanceUpdates: 0,
    },
    
	computed: {
		totalBalance() {
			return this.users.reduce((prev, curr) => prev + curr.balance, 0);
		},
		lowBalance() {
			return this.totalBalance < 500;
		}
    },
    
	methods: {
		resetBalances: function () {
			this.users.forEach((user) => {
				user.balance = 0;
			});
		}
	},

	// Lifecycle methods
	beforeCreate: function () {
		console.log('Creating instance');
	},
	created: function () {
		console.log('App initialized at ' + new Date().toLocaleString());
	},
	beforeMount() {
		console.log('Mounting instance to DOM');
	},
	mounted: function () {
		this.$el.hidden = false;
	},
	beforeUpdate() {
		console.log('Updating instance');
	},
	updated: function () {
		this.instanceUpdates++;
	},
	beforeDestroy() {
		console.log('Tearing down watchers, child components, and event listeners');
	},
	destroyed: function () {
		console.log('Instance destroyed');
	},
});

// Alternative way to mount instance if no el is provided in init options object
// app.$mount('#app');
