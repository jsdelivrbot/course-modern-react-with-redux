import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

// Field is another high-order-like component. It does all the logic but has
// no code to render a component

class CreatePost extends Component {
  render() {
    return (
      <form>
        <h1>Create Post</h1>
        <Field name="title" label="Title" component={this.renderField}/>
        <Field name="categories" label="Categories" component={this.renderField}/>
        <Field name="content" label="content" component={this.renderField}/>
      </form>
    );
  }

  // The field object contains event handlers that need to be wired up to jsx
  // field.input is a bunch of different event handlers and props
  // {...field.input} is a fancy bit of jsx that copies handlers from field.input into containing element

  //Note 2: Arbitrary props can be passed through from the Field component. These are just added on field
  // as additional props. In this case label was added.

  // Note: 3 There are two props that are automatically added. These are field.input and field.meta.error
  // the errors are those collected from validate. The assumption is that the field name and name in errors
  // object must be identical for errors to be passed in as field.meta.error
  renderField( field ) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        {field.meta.error}
      </div>
    );
  }
}

function validate( values ) {
  //values === {title: '...', categories: '...', content: '...'}
  const errors = {};
  if ( !values.title ) {
    errors.title = 'Enter a title';
  }
  if ( values.title  && values.title.length < 3 ) {
    errors.title = 'Title should be at least 3 characters';
  }
  if ( !values.categories ) {
    errors.categories = 'Enter some categories';
  }
  if ( !values.content ) {
    errors.content = 'No content present';
  }


  //If errors is empty then the form is fine to submit otherwise there is
  // an error and redux-form assumes form is invalid
  return errors;
}

// The form key is unique key - one for each different form.
// The strings have to be unique unless you want data from multiple forms to be merged.

//NOTE: { validate, form: 'CreatePostForm' } === { validate: validate, form: 'CreatePostForm' }
export default reduxForm( { validate, form: 'CreatePostForm' } )( CreatePost );
