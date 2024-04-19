'use client'

import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';


export default function SignUpPage() {

    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
      name: '',
      email: '',
      password: '',
    });
    const [loading, setLoading] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
  
      try {
        // Your existing code for fetching and handling the registration
        const response = await fetch('http://localhost:5000/api/createuser',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({name :credentials.name , email:credentials.email , password:credentials.password})
  
      })
      const json = await response.json();
      console.log(json);
  
      if(!json.success){
        alert("enter valid credentials")
      }
      if(json.success){
        // localStorage.setItem("authToken" , json.authToken);
        // console.log(localStorage.getItem("authToken"));
        navigate('/login');
      }
      } catch (error) {
        console.error('Error during registration:', error.message);
      } finally {
        setLoading(false);
      }
    };
  
    const onChange = (event) => {
      setCredentials({ ...credentials, [event.target.name]: event.target.value });
    };

  return (
    <section class="vh-100" style={{'background-color': '#eee'}}>
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
    <div class="card text-black" style={{'border-radius' : '25px'}}>
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4" onSubmit={handleSubmit}>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example1c">Your Name</label>
                      <input type="text" id="form3Example1c" name="name" class="form-control"  value={credentials.name}
            onChange={onChange}/>
                      
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example3c">Your Email</label>
                      <input type="email" id="form3Example3c" class="form-control" name="email"
            value={credentials.email}
            onChange={onChange} />
                     
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example4c" >Password</label>
                      <input type="password" id="form3Example4c" class="form-control" name="password"
            value={credentials.password}
            onChange={onChange}/>
                      
                    </div>
                  </div>

                  {/* <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example4cd">Repeat your password</label>
                      <input type="password" id="form3Example4cd" class="form-control" />
                      
                    </div>
                  </div> */}

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
