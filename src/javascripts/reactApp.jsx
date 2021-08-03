import ReactDom from 'react-dom';
import * as React from 'react';

import Alert from './alert.tsx';
const App = props => {
  return (
    <div style={{ color: '#000' }}>
      Hello, React App!
      <Alert message="Success" />
    </div>
  );
};

//DOMにマウントする作業
const reactRoot = document.getElementById('react-root');

if (reactRoot) {
  ReactDom.render(<App />, reactRoot);
} else {
  console.log('Not root element found');
}
