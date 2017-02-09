const uuid = require('uuid');
const mongoose = require('mongoose');

// schema
const blogSchema = mongoose.Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  author: {
    firstName: String,
    lastName: String,
  }
});

//virtual
blogSchema.virtual('authorName').get(function() {
  return `${this.author.firstName} ${this.author.lastName}`.trim()});
// instance method to return some not all fields
blogSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    title: this.title,
    content: this.content,
    author: this.authorName
  };
}
const Blogs = mongoose.model('Blogs', blogSchema);
module.exports = {Blogs};
