import React,{useState, useEffect} from 'react'
import { View } from '../View';
// import Registration from '../Registration';

// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('books');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

let PostArray=[];

export const Home = () => {
  let filteredData = PostArray.filter(item => item?.username === JSON.parse(localStorage.getItem("currentValue"))?.uname);

  // main array of objects state || books state || books array of objects
  const [books, setbooks]=useState(getDatafromLS());

  // input field states
  const [title, setTitle]=useState('');



  // form submit event
  const handleAddBookSubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let book={
      postId:books.length+1,
      title:title,
      like:0,
      dislike:0
            }

   setbooks([...books,book]);
    setTitle('');
localStorage.setItem('books',JSON.stringify(books));
setCount(0);
setdislike(0);


  }

  // delete book from LS
  const deleteBook=(isbn)=>{
    const filteredBooks=books.filter((element,index)=>{
      return element.isbn !== isbn
    })
    setbooks(filteredBooks);
  }

  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('books',JSON.stringify(books));
  },[books])

  return (
 
 <>


<div className="mt-3 modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content p-3">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Add New Post</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className='form-container p-3'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddBookSubmit}>
            <label>Post Title</label>
            <textarea type="text" className='form-control' required
            onChange={(e)=>setTitle(e.target.value)} value={title}></textarea>
            <br></br>
           
     
                 <div class="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      
        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" >ADD </button>
      </div>
          </form>
        </div>
  
    </div>
  </div>
</div>


 <div className='text-center'>
     
      <button type="button" className="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Add Your Post Here</button>

      <div className='main'>
        <div className='view-container'>
          {books.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
          
                <tbody>
                  <View books={books} deleteBook={deleteBook}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md '
            onClick={()=>setbooks([])}>Remove All</button>
          </>}
          {books.length < 1 && <div>Add Your 1st Post To See The Result.</div>}
        </div>

      </div>
   
   </div>
    </>
 
  )
}

export default Home
