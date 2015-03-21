import React from 'react';
import component from 'reapp-component';

// decorate all your components
// https://github.com/reapp/reapp-component

const Component = component();

Component.addDecorator(spec => {
  // expose router context
  spec.contextTypes = Object.assign({
    router: React.PropTypes.func
  }, spec.contextTypes);

  // wrap createClass
  return React.createClass(spec);
})

export default Component;