import React from 'react';

export default props => {
  // Should return props.children if props.test is true
  return props.test && props.children
}
