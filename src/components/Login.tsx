import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useAppDispatch, useAppSelector } from '../reduxStore/hooks';
import { loginUser } from '../reduxStore/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll'; 

Modal.setAppElement('#root'); // Set the root element for accessibility

interface LoginProps {
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useAppSelector((state) => state.user);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Dispatch login action and check if login is successful
    dispatch(loginUser({ email, password }))
      .unwrap()
      .then(() => {
        navigate('/users');
      })
      .catch(() => {
        setError('Invalid email or password');
      });
  };

  // Redirect to UserList page if logged in
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/users');
    }
  }, [isLoggedIn, navigate]);

  return (
    <Modal
      isOpen={true} // This controls the visibility of the modal
      onRequestClose={onClose} // Close modal when overlay is clicked or escape key is pressed
      className="fixed inset-0 flex items-center justify-center z-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      contentLabel="Login Modal"
    >
      <div className="bg-white shadow-md rounded px-8 py-6 w-full max-w-sm relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-sky-500 text-white p-2 rounded mt-4 w-full hover:bg-sky-700"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <span>Don't have an account? </span>
          <Link to="/RegisterForm" className="text-blue-500 hover:underline">
            Register
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default Login;
