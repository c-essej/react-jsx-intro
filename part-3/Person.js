"use strict";

/** takes in name, age and hobbies
 * if the person is over 18, display go vote,
 * else, shows, you must be 18
 * if name longer than 8 character, disply the first 6
 * list their hobbies
*/
function Person ({name, age, hobbies}) {

   name = name.length > 8 ? name.slice(0, 6) : name;

  return (
    <div>
      <p>Learn some information about: { name }</p>
      <h3> {age >= 18 ? "Please go vote!" : "You must be 18"}</h3>

      <ul>
        Hobbies: {hobbies.map( hobby => <li>{ hobby }</li>) }
      </ul>

    </div>
  )
}