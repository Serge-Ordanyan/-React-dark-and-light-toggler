import React from 'react'
import moment from 'moment'
const Article = ({ title, fragment, date, author ,number}) => {
  return (
    <article className='post'>
      
      <h3 className='number_of_book'>{number} Book</h3>
      <h2>Tittle -   {title}</h2>
      
      <div className='post-info'>

        <span>date {moment(date).format('dddd Do, YYYY')}</span>
        <span>Author - {author}</span>
      </div>
      <p>fragment - {fragment}</p>
    </article>
  )
}

export default Article
