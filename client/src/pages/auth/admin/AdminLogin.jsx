import React,{useState} from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Authentication/AuthContext";


const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] =useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError]=useState({})
  const navigate = useNavigate();
  const { login } = useAuth();

  const baseURL = process.env.REACT_APP_BASE_URL;
  const loginURL = `${baseURL}/auth/login?type=company`;

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    }

    // Validate password
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setError(newErrors);
    return isValid;
  };


  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    setIsLoading(true)

    await Axios.post(loginURL, formData).then((res) => {
      console.log(res.data.data.tokens.access.token, "res token");
      console.log(res.data.data.user.companyProfile.id, "res id");

      if (res.status === 200) {
        login(res.data.data.tokens.access.token, res.data.data.user.companyProfile.id, "admin" );
        setIsLoading(false)
        Swal.fire({
          title: 'Success!',
          text: 'Login succesfull!!!!!',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/dashboard/admin', { state: { formData: res.data.data} } )
          }
        }) 
      }else{
        setIsLoading(false)
        Swal.fire({
          title: 'Error!',
          text: 'Login failed!!!!!',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
    }).catch((err) => {
      console.log(err)
      setIsLoading(false)
      Swal.fire({
        title: 'Error!',
        text: 'Login failed!!!!!',
        icon: 'error',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          setFormData({
            email: "",
            password: "",
          })
          setIsLoading(false)
        }
      })

    })
  }



  return (
    <main className="w-full h-screen flex justify-center items-center">
      <form className="rounded-md w-[500px] p-5">
        <div className="logo flex justify-center items-center">
          <img src="https://tinyurl.com/3wuh45ve" alt="INSURE LOGO" />
        </div>
        <h1 className="font-bold mb-4 text-2xl lg:text-4xl">
            Welcome <span className="text-[--orange-bg]">Back</span> Admin
          </h1>
        {/* <div className="flex flex-col w-full my-2"> */}
          <input
            type="email"
            value={formData.email}  
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="px-2 w-full h-[40px] py-3 my-2 rounded-[3px] border border-blue-500 focus:outline-none"
            placeholder="Enter email address"
            required
          />
          {error.email && <p className="text-red-500 text-[12px]">{error.email}</p>}

          <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={(e) =>setFormData({ ...formData, password: e.target.value })}
            className={`w-full h-[40px] px-2 py-3 my-2 rounded-[3px] border border-blue-500 focus:outline-none" ${error.email ? 'border-red-500' : ''}`}
            placeholder="Enter password"
          />
          <span
              className="absolute right-4 top-4 cursor-pointer"
              onClick={handleTogglePassword}
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )}
            </span>
          {error.password && <p className="text-red-500 text-[12px]">{error.password}</p>}
        </div>
       
            <button
            onClick={handleSubmit}
            type="button"
            className={`w-full h-[40px] bg-orange-600 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-400 mb-8 ${error.password ? 'border-red-500' : ''}`}
            id="login-button"
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Login'}
          </button>
        <Link to="/auth/admin/forgetpassword" className='text-[12px] mt-5 pl-2'>Forgot password?</Link>
        
      </form>
    </main>
  ); 
};

export default AdminLogin;
