"use strict";

/**Tweet component which takes as props the username of the user who wrote the
 * tweet, the name of the user who wrote the tweet, the date of the tweet, and
 * the message being tweeted. */


function Tweet( { username, name, date, message }) {
  return (
    <div className='tweet'>
      <ul>{ username }</ul>
      <ul>{ name } </ul>
      <ul>{ date } </ul>
      <ul>{ message } </ul>
    </div>
  )
}