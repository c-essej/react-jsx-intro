"use strict";

/** renders three people */

function App() {
  return (
    <div>
      <Person
        name='jason'
        age='30'
        hobbies={['hiking', 'gaming']}
        />

      <Person
        name='bob'
        age='18'
        hobbies={['fishing', 'gaming']} />

      <Person
        name='robert'
        age='13'
        hobbies={['cooking', 'gaming']} />
    </div>

  );
}