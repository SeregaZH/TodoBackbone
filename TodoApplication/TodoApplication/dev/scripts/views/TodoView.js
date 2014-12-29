/**
 * Created by Sergey on 26.12.2014.
 */
define('views/TodoView',['jquery','underscore', 'backbone', 'global'], function($,_,Backbone, global){
    var TodoView = Backbone.View.extend({
        tagName: 'li',
        template: _.template($('#todoTemplate').html()),
        events: {
            'dblclick label': 'edit',
            'keypress .edit': 'updateOnEnter',
            'click .destroy': 'clear',
            'blur .edit': 'close',
            'click .toggle': 'toggle'
        },
        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
            this.listenTo(this.model, 'visible', this.visible);
            this.listenTo(this.model, 'hide', this.hide);
        },
        render: function() {
            this.$el.html( this.template( this.model.attributes ) );
            this.$el.toggleClass('completed', !this.model.get('IsActive'));
            this.$input = this.$('.edit');
            return this;
        },
        close: function() {
            var value = this.$input.val().trim();

            if ( value ) {
                this.model.save({ Name: value });
            }

            this.$el.removeClass('editing');
        },
        updateOnEnter: function( e ) {
            if ( e.which === global.constants.ENTER_KEY ) {
                this.close();
            }
        },
        clear: function(){
            this.model.destroy();
        },
        edit: function(){
            this.$el.addClass('editing');
            this.$input.focus();
        },
        toggle: function(){
            this.model.toggle();
        },
        visible: function(){
            this.$el.removeClass('hidden');
        },
        hide: function(){
            this.$el.addClass('hidden');
        }
    });

    return TodoView
});
