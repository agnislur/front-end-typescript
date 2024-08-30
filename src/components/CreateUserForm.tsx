import React, { useState } from 'react';
import { useAppDispatch } from '../reduxStore/hooks';
import { createUser } from '../reduxStore/slices/userSlice';

interface CreateUserFormProps {
  onClose: () => void; // Function to close the form
}

const CreateUserForm: React.FC<CreateUserFormProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    phone_number: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createUser(newUser));
    setNewUser({ name: '', email: '', phone_number: '', password: '' }); // Reset form setelah submit
    onClose(); // Close the form after submission
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={newUser.name}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={newUser.email}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
        <input
          type="text"
          name="phone_number"
          value={newUser.phone_number}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
        <input
          type="password"
          name="password"
          value={newUser.password}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Create User
      </button>
    </form>
  );
};

export default CreateUserForm;
