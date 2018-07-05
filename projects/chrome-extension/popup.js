// Get notes from Chrome's local storage
// Alternative can use .sync for chrome users cloud storage
chrome.storage.local.get(['notes'], function(res) {

    if (typeof res.notes === undefined ) {
        res.notes = '';
    }

    // Initialize Vue instance
    var vm = new Vue({
    	el: '#app',
    	data: {
            notes: res.notes,
            tmp: res.notes,
        },
        methods: {
            save: function() {
                if (! this.saved) {
                    chrome.storage.local.set({ 
                        'notes': this.notes
                    });
                    this.tmp = this.notes;
                }
            }
        },
        computed: {
            saved: function() {
                return this.tmp === this.notes;
            },
        },
    	mounted: function () {
            this.$el.hidden = false;
            console.log('Mounted');
    	}
    });

});

