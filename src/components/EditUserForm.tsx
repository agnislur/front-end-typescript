import React, { useState } from 'react';
import Modal from 'react-modal';
import { useAppDispatch } from '../reduxStore/hooks';
import { updateUser } from '../reduxStore/slices/userSlice';

Modal.setAppElement('#root'); // Set the root element for accessibility

interface EditUserFormProps {
  user: { id: string; name: string; email: string; phone_number: string; password: string };
  onClose: () => void;
}

const EditUserForm: React.FC<EditUserFormProps> = ({ user, onClose }) => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phone_number);
  const [password, setPassword] = useState(user.password);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Perform validation checks if needed
    if (!name || !email || !phoneNumber || !password) {
      setError('All fields are required.');
      return;
    }

    // Dispatch the update action and handle success or error
    dispatch(updateUser({ id: user.id, name, email, phone_number: phoneNumber, password }))
      .unwrap()
      .then(() => {
        onClose();
      })
      .catch(() => {
        setError('Error updating user.');
      });
  };

  return (
    <Modal
      isOpen={true} // This controls the visibility of the modal
      onRequestClose={onClose} // Close modal when overlay is clicked or escape key is pressed
      className="fixed inset-0 flex items-center justify-center z-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      contentLabel="Edit User Modal"
    >
      <div className="bg-white shadow-md rounded px-8 py-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>
        <h1 className="text-2xl font-bold mb-4 text-center">Edit User</h1>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>
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
            <label htmlFor="phoneNumber" className="block text-gray-700">Phone Number:</label>
            <input
              id="phoneNumber"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
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
            Save
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-500 text-white p-2 rounded mt-2 w-full hover:bg-gray-700"
          >
            Cancel
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default EditUserForm;
