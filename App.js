import React, { Suspense, useState } from 'react';
import Child from './components/child/Child';

// const RemoteApp = React.lazy(() => import('app2/App'));

const users = [
  {
    id: 1,
    name: 'Rajesh',
    address: {
      stree: 'dfdd',
      doorNumber: '1'
    }
  },
  { id: 2, name: 'Santhosh' }
];

const App = () => {
  const [items, setItems] = useState(users);

  const modifiedUserhandler = (data, ...rest) => {
    console.log('data', data);
    console.log('rest arguments', rest);
    setItems(prev => [...prev, data]);
  };

  console.log(items);
  return (
    <div>
      {/* <div style={{
        margin:"10px",
        padding:"10px",
        textAlign:"center",
        backgroundColor:"greenyellow"
      }}>
        <h1>App1</h1>
      </div>
      <Suspense fallback={"loading..."}>
        <RemoteApp/>
      </Suspense> */}
      <Child items={items} modifiedUserhandler={modifiedUserhandler} />
    </div>
  );
};

export default App;
