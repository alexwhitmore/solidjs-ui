import type { Component } from 'solid-js';
import Example from './examples/clipboard.example'

const App: Component = () => {
  const clipboardValue = 'https://ark-ui.com'
  return (
    <div class='mx-auto flex justify-center items-center h-screen'>
      <Example />
    </div>
  );
};

export default App;
