const axios=require("axios")
const loginService=async()=>{
  const requestData={
    phoneNumber:"9026971112",
    password:"Parth"
  }
  try {
    const response = await axios.post('http://localhost:8000/auth/login/', requestData);
    console.log(JSON.stringify(response.data));
  } catch (error) {
    console.error('Axios error:', error);
  }
}

loginService();
