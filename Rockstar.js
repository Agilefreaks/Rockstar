Rockstar = Backbone.Model.extend({
  initialize: function (options) {
    this.name = options.name;
    this.guitar = options.guitar;
    this.drums = options.drums;
  }
});