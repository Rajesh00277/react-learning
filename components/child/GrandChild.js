import React from 'react';

const GrandChild = ({ newUserHandler, ...restProps }) => {
  console.log('Rest', restProps);
  const clickHandler = e => {
    console.log('Event', e);
    e.preventDefault(); // stop refreshing the browser upon submit a form
    newUserHandler({
      name: 'new User'
    });
  };

  const containerHandler = () => {
    console.log('Container onclick called');
  };
  const parentDivHandler = () => {
    console.log('Parent onclick called');
  };
  const childHandler = () => {
    console.log('child onclick called');
  };
  const grandChildHandler = e => {
    e.stopPropagation(); //stop event bubble
    console.log('grand child onclick called');
  };
  return (
    <div onClick={containerHandler}>
      <h2>GrandChild</h2>
      <form onSubmit={clickHandler}>
        <button type='submit'>Create User</button>
      </form>
      <div onClick={parentDivHandler}>
        <div onClick={childHandler}>
          <div
            style={{
              backgroundColor: 'red',
              width: '200px',
              height: '100px',
              cursor: 'pointer'
            }}
            onClick={event => grandChildHandler(event)}
          >
            click me!
          </div>
        </div>
      </div>
      {/* <Comp {...restProps} /> */}
    </div>
  );
};

export default GrandChild;
