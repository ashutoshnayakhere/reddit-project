import React,{useState} from 'react';
import './view.css';
import * as Icon from 'react-bootstrap-icons';

// import {Icon} from 'react-icons-kit'
// import {trash} from 'react-icons-kit/feather/trash'

export const View = ({books,deleteBook}) => {
    
    const [count, setCount] = useState(0);
    const [dislike, setdisLike] = useState(0);
    

  // Function to increment count by 1
  const incrementCount = () => {
    // Update state with incremented value
    setCount(count + 1);
    
  };
  const decrementCount = () => {
    // Update state with incremented value
    setdisLike(dislike + 1);
  };




    return books.map(book=>(
        <>
        <tr key={book.isbn}>
           
            {/* <td className='delete-btn'>
               
              

                <button type="button" class="btn btn-primary" onClick={incrementCount} >like</button>
          
              
            </td>    
            <td><input type='text' value={count} readOnly/></td> 

            <td className='delete-btn'>
               
            <button type="button" class="btn btn-warning" onClick={decrementCount} >dislike</button>
         
             
           </td>  */}

      
      
            {/* <td>{book.title}</td> */}
         
        </tr>            
 <div className='text-center col-lg-7 pt-5'>
 <table class="borderless table">
  <thead>
    {/* <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr> */}
  </thead>
  <tbody>
    <tr>
     
   

    </tr>
    <tr>

      <td > <button type="button" class="btn btn-primary" onClick={incrementCount} >Like</button></td>
            <td><input type='text' class="form-control count counts" value={count} disabled/></td>  
      <td><button type="button" class="btn btn-warning" onClick={decrementCount} >dislike</button></td>
      <td><input type='text' class="form-control count" value={dislike} disabled/></td>  
      <td><input type="text" class="form-control output" value={book.title} disabled/> </td>
    </tr>

  </tbody>
</table>
</div>
</>
))
}