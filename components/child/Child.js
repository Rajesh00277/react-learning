import React from 'react';
import GrandChild from './GrandChild';

const Child = props => {
  console.log('Child Props', props);
  const { items, modifiedUserhandler } = props;
  const newUserHandler = data => {
    modifiedUserhandler(
      {
        ...data,
        id: Math.random()
      },
      'ghhj',
      'asdfg'
    );
  };
  return (
    <div>
      <h2>Child</h2>
      <GrandChild items={items} newUserHandler={newUserHandler} />
      {/* <GrandChild {...props} /> */}
    </div>
  );
};

export default Child;
