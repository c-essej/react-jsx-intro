"use strict";

/** renders three tweets */

function App() {
  return (
    <div>
      <Tweet
        name='jason'
        username='jason'
        date={new Date().toDateString()}
        message='first tweet' />

      <Tweet
        name='bob'
        username='bob'
        date={new Date().toDateString()}
        message='bobs tweet' />

      <Tweet
        name='robert'
        username='robert'
        date={new Date().toDateString()}
        message='roberts tweet' />
    </div>

  );
}