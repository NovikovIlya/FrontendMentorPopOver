import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Button, Popover } from 'antd';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  return (
    <>
      <Popover content={content} title="Title">
        <Button type="primary">Hover me</Button>
      </Popover>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
