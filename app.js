new Vue({
	el: '#liren',
	data: {
		formOpened: false
	},

	methods: {
		showForm: function() {
			this.formOpened = true;
		},
		hideForm: function() {
			this.formOpened = false;
			this.resetNewLink();
		},
		resetNewLink: function() {
			this.newLink = {
				 title: '',
				 url: '',
				 desc: '',
			}
		}

	}
})