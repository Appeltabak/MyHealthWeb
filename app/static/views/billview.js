var BillView = Backbone.View.extend({
	tagName: 'li',
	render: function(){
		this.$el.html( this.model.get('description'));
		return this;
	}
});