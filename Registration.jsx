import React,{useState} from 'react'
import Login from './Login';

function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
   
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    
  
    function handleFormSubmit(e) {
        e.preventDefault();
    
        if (!name || !email || !password || !phone ) {
          setFlag(true);
        } else {
          setFlag(false);
          localStorage.setItem("YourEmail", JSON.stringify(email));
          localStorage.setItem(
            "YourPassword",
            JSON.stringify(password)
          );
          console.log("Saved in Local Storage");
    
        }
      }
    
  
      function handleClick() {
        setLogin(!login);
      }

    return (
  <>


<div className="container mt-5">
    <div className="row">
    
     
        {" "}
          {login ? (
            
        <form className="container" onSubmit={handleFormSubmit}>
        <h3 className="text-center text-inverse">Register Here</h3>
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-12">
               <div className="form-group">
                <label className="text-inverse" for="validationCustom01">First Name</label>
                <input type="text" className="form-control"  placeholder="First name"  onChange={(event) => setName(event.target.value)} required/>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-12">
              <div className="form-group">
                <label className="text-inverse" for="validationCustom02">Email Address</label>
                <input type="email" className="form-control"  placeholder="Email"  onChange={(event) => setEmail(event.target.value)} required/>
              </div>  
            </div>

            <div className="col-lg-6 col-sm-6 col-12 mt-4">
               <div className="form-group">
                <label className="text-inverse" for="validationCustom01">Phone Number</label>
                <input type="text" className="form-control"  placeholder="Phone Number"  onChange={(event) => setPhone(event.target.value)} required/>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6 col-12 mt-4">
               <div className="form-group">
                <label className="text-inverse" for="validationCustom01">Enter Your Password</label>
                <input type="text" className="form-control"  placeholder="Enter Your Password"  onChange={(event) => setPassword(event.target.value)} required/>
              </div>
            </div>
         
          </div>

     

          <div className="row">
            <div className="col-lg-12 col-sm-12 col-12 mb-4 mt-4 text-center">
                <button type="submit" className="btn btn-primary"  onClick={handleClick} >Submit form</button>
            </div>
          </div>  

          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
          ) : (
            
            <Login />
          )}
      
      </div>
      
    </div>  


  </>  
    );
}

export default Registration