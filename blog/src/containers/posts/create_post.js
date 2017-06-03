import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { savePost } from '../../actions/index';

// Field is another high-order-like component. It does all the logic but has
// no code to render a component

class CreatePost extends Component {
  onSubmit( values ) {

    // As CreatePost was passed to <Route />, the router components have added a bunch
    // of props to interact with router. The next line is an example of one
    //this.props.history.push( '/' );

    this.props.savePost( values.title, values.categories, values.content, () => this.props.history.push( '/' ) );
  }

  render() {
    // handleSubmit is passed in from reduxForm and will call the function it is passed
    // when all the validation passes
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit( this.onSubmit.bind( this ) )}>
        <h1>Create Post</h1>
        <Field name="title" label="Title" component={this.renderField}/>
        <Field name="categories" label="Categories" component={this.renderField}/>
        <Field name="content" label="content" component={this.renderField}/>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link className="btn btn-danger" to="/">Cancel</Link>
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
    const { meta: { touched, error } } = field;
    // Rather than using field.meta.touched we can use touched
    // Rather than using field.meta.error we can use error
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">{touched ? error : ''}</div>
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
  if ( values.title && values.title.length < 3 ) {
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
export default reduxForm( { validate, form: 'CreatePostForm' } )( connect( null, { savePost } )( CreatePost ) );
