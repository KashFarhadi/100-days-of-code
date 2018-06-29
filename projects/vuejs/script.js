Vue.component('transaction', {
	props: ['item'],
	template: '<tr><td>#{{ item.id }}</td><td>{{ item.desc }}</td><td>${{ item.value }}</td></tr>'
});

Vue.component('alert', {
	template: '<div class="alert text-center"><div class="container"><slot /></div></div>'
});

var app = new Vue({
  el: '#app',
  data: {
    title: 'My App',
    users: [
      {
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
      }
    ],
    transactions: [
      {
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
      }
    ],
    time: 'Last updated: ' + new Date().toLocaleString(),
    notes: '',
    instanceUpdates: 0,
    warningMessage: '<strong>Attention:</strong>',
    dynamicId: 'banking',
    firstName: 'John',
    lastName: 'Smith',

    question: '',
    answer: 'Waiting on question...',

    navClass: 'navbar navbar-expand-lg',
    navThemeClass: 'navbar-light bg-light',
    dangerTextClass: 'text-danger',

    impactStyleObject: {
      fontSize: '18px',
      fontWeight: 100,
    },

    loggedIn: true,
  },

  watch: {
    question: function(newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...';
      this.debouncedGetAnswer();
    }
  },

  computed: {
    totalBalance() {
      return this.users.reduce((prev, curr) => prev + curr.balance, 0);
    },
    lowBalance() {
      return this.totalBalance < 500;
    },
    tooManyChars() {
      return this.notes.length > 140;
    },
    validChars() {
      return this.notes.length > 0 && this.notes.length <= 140;
    },
    validTextClass: function() {
      return {
        'text-danger': this.notes.length > 140,
        'text-muted': this.notes.length == false
      };
    },
    fullName: {
      get: function() {
        return this.firstName + ' ' + this.lastName;
      },
      set: function(newValue) {
        var parts = newValue.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[parts.length - 1];
      }
    }
  },

  methods: {
    resetBalances: function() {
      this.users.forEach(user => {
        user.balance = 0;
      });
    },
    fundBalances: function() {
      this.users.forEach(user => {
        user.balance = 500;
      });
    },
    saveNotes: function() {
      console.log('Saved notes:');
      console.log(this.notes);
      console.log('---');
    },
    getAnswer: function() {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark!';
        return;
      }
      this.answer = 'Thinking...';
      var vm = this;
      axios
        .get('https://yesno.wtf/api')
        .then(function(res) {
          vm.answer = _.capitalize(res.data.answer);
        })
        .catch(function(err) {
          vm.answer = 'Error: could not reach api: ' + err;
        });
    },
    logout: function() {
      this.loggedIn = false;
    },
    login: function() {
      this.loggedIn = true;
    }
  },

  // Lifecycle methods
  beforeCreate: function() {
    console.log('Creating instance');
  },
  created: function() {
    console.log('App initialized at ' + new Date().toLocaleString());
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
  },
  beforeMount() {
    console.log('Mounting instance to DOM');
  },
  mounted: function() {
    this.$el.hidden = false;
  },
  beforeUpdate() {
    console.log('Updating instance');
  },
  updated: function() {
    this.instanceUpdates++;
  },
  beforeDestroy() {
    console.log('Tearing down watchers, child components, and event listeners');
  },
  destroyed: function() {
    console.log('Instance destroyed');
  }
});

// Alternative way to mount instance if no el is provided in init options object
// app.$mount('#app');
