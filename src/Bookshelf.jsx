import { useState } from 'react';
const Bookshelf = () => {
const [books, setBooks] = useState([
  { title: 'Fourth Wing', author: 'Rebecca Yarros' },
  { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
]);
const [newBook, setNewBook] = useState({ title: '', author: '' });

const handleInputChange = (event) => {
  console.log(newBook)
  setNewBook({ ...newBook, [event.target.name]: event.target.value });
  console.log(books)

};

const handleSubmit = (event) => {
  setBooks([...books,newBook]);
  setNewBook({title:'',author:''})
  event.preventDefault()
};

return(
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">title: </label>
        <input name="title" onChange={handleInputChange} />
        <label htmlFor="author">author: </label>
        <input name="author" onChange={handleInputChange} />
        <button type='submit'>Add Book</button>
      </form>
  </div>
  <div className="bookCardsDiv">
      { books.map((book,index)=>(
        <div key={index} className='bookCard'>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
        </div>
      ))}
  </div>
</div>)
}

export default Bookshelf