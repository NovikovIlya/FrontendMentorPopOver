import { useState } from 'react';
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
      <div>
        <div>
          Shift the overall look and feel by adding these wonderful
          touches to furniture in your home
        </div>
        <div>Ever been in a room and felt like something was missing? Perhaps
          it felt slightly bare and uninviting. I’ve got some simple tips
          to help you make any room feel complete.
        </div>
        <div>Michelle Appleton</div>
        <div>28 Jun 2020</div>
        <Popover content={content} title="Title">
          <Button type="primary">Hover me</Button>
        </Popover>
      </div>
    </>
  );
}

export default App;
