import { useState } from 'react';
import Input from './components/Input';
import List from './components/List';

function App() {
  const [items, setItems] = useState<string[]>([]);

  return (
    <>
      <Input setItems={setItems}/>
      <List items={items} />
    </>
  );
}

export default App;
