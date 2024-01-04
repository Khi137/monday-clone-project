import React from 'react';
import '../routes/Login.css';
import GoogleIcon from '../assets/images/icons8-google-48.png';

const Login = () => {
  return (
    <div className="flex min-h-screen">
      {/* Form đăng nhập bên trái */}
      <div className="w-3/5 bg-white-800 p-8 text-black signup-left">
        <h2 className="text-4xl mb-3 welcome">Welcome to monday.com</h2>
        <h2 className="text-3x2 mb-4 started">Get started - it's free. No credit card needed.</h2>
        <form>
          {/* Các trường đăng nhập */}
          <div className="mb-4 flex flex-col items-center">
            <button
              className="bg-white p-2 w-3/5 rounded-md flex items-center justify-center border border-gray-300 hover:border-gray-400 transition-all googleButton              "
              type="button"
            >
              <img
                src={GoogleIcon}
                alt="Google Logo"
                className="w-6 h-6 mr-2"
              />
              Continue with Google
            </button>
            {/* Dòng gạch ngang màu đen với chữ "Or" ở giữa */}
            <div className="flex items-center mt-4 mb-4 w-3/5">
              <hr className="flex-1 border-t border-gray" />
              <span className="mx-4 text-gray-400">Or</span>
              <hr className="flex-1 border-t border-gray" />
            </div>
            <input
              className="p-2 border rounded-md w-3/5"
              type="text"
              id="username"
              name="username"
              placeholder="name@company.com"
            />
          </div>
          {/* ... */}
          <button className="w-3/5 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-all" type="submit">
            Continue
          </button>
          <div className="terms w-full">
            <div className="w-full text-center mt-4 text-black-600">
              By proceeding, you argee to the
            </div>
            <div className="w-full text-center mt-4 text-black-600">
              <a className="text-blue-600" href="#">Terms and Services</a> and <a className="text-blue-600" href="#">Privacy Policy</a>
            </div>
          </div>

          {/* Dòng "Have account? Log in." */}
          <div className="w-full text-center mt-4 text-gray-700 login">
            <p> Already have an account? <a className="text-blue-600" href="#">Log in</a></p>
          </div>
        </form>
      </div>
      {/* Ảnh nền bên phải */}
      <div className="w-2/5 bg-cover bg-center signup-right"></div>
    </div>
  );
};

export default Login;
