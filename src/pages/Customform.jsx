import React,{useState} from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Link, useNavigate, useParams } from 'react-router-dom';


const Customform= () => {

  
  // Extract the query parameters from the location object
  
  
  // Get the value of the 'id' parameter
const {id}=useParams()
console.log(id)
    const navigate = useNavigate();
  
    
    const [credentials, setCredentials] = useState({
      name: "",
      type: "",
      amount: "",
      paymentMethod: "",
      description: "",
      date:new Date().toISOString()
    });
    const [loading, setLoading] = useState(false);

  
    const handleSubmit = async (e) => {
     e.preventDefault()
      setLoading(true);
  
      try {
        const response = await fetch(`http://localhost:5000/api/custompay/${id}`,{
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({ amount:credentials.amount,email:localStorage.getItem("email")})
        
  
      })
      const json = await response.json();
       console.log(json.success)
      if(!json.success){
        alert("enter valid credentials")
      }
      if(json.success){
        navigate('/loan');
      }
      } catch (error) {
        console.error('Error during transaction form:', error.message);
       
      } 
    };


  
    const onChange = (event) => {
      setCredentials({ ...credentials, [event.target.name]: event.target.value });
    };


  return (
    <div>
    <form class="px-7 h-screen grid justify-center items-center" onSubmit={handleSubmit}>
      <div class="grid gap-6" id="form">
      <FormLabel >Transaction Name</FormLabel>
        <div class="w-full flex gap-3">
       
          <input class="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-black" type="text" placeholder=""  name="name" 
            value={credentials.name}
            onChange={onChange}
          />

        </div>
      <FormLabel >Amount(In Indian Rupees only)</FormLabel>
        <div class="w-full flex gap-3">
       
          <input class="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-black" type="text" placeholder="₹" name="amount"
          value={credentials.amount}
            onChange={onChange} />

        </div>
        <FormLabel >Tranasction Type</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="paymentMethod"
        value={credentials.paymentMethod}
            onChange={onChange}>
        <FormControlLabel value="upi" control={<Radio />} label="UPI" />
        <FormControlLabel value="cash" control={<Radio />} label="Cash" />
        
      </RadioGroup>
        
        <div class="grid gap-6 w-full">
        <FormLabel >Description(If any)</FormLabel>
          <input class="p-3 shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid border-[#035ec5] focus:border-[1px]" type="description"  name="description"
          value={credentials.description}
            onChange={onChange} />
          <FormLabel >Date of Transaction</FormLabel>
          <input class="p-3 shadow-2xl   glass w-full text-black outline-none focus:border-solid focus:border-[1px]border-[#035ec5]" type="date" name="date"
            value={credentials.date}
            onChange={onChange}
          />
        </div>
        <button class="outline-none glass shadow-2xl  w-full p-3  bg-[#ffffff42] hover:border-[#035ec5] hover:border-solid hover:border-[1px]  hover:text-[#035ec5] font-bold" type="submit">Submit</button>
      </div>
    </form>
  </div>
  )
}

export default Customform