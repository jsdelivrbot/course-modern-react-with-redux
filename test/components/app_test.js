import App from '../../src/components/app';
import { renderComponent } from '../test_helper';

describe( 'App', () => {
  let component;

  beforeEach( () => {
    component = renderComponent( App );
  } );

  it( 'renders something', () => {
    expect( component ).to.exist;
  } );
} );
