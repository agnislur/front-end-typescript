// // src/components/UserList.tsx
// import React, { useEffect, useState } from 'react';
// import { useAppDispatch, useAppSelector } from '../reduxStore/hooks';
// import CreateUserForm from '../components/CreateUserForm';
// import EditUserForm from '../components/EditUserForm';
// import { fetchUsers, deleteUser } from '../reduxStore/slices/userSlice';
// import { User } from '../reduxStore/slices/userSlice';

// const RegisterForm: React.FC = () => {
//   const dispatch = useAppDispatch();
//   const { users, status, error } = useAppSelector((state) => state.user);

//   const [showCreateForm, setShowCreateForm] = useState(false);
//   const [showEditForm, setShowEditForm] = useState(false);
//   const [currentUser, setCurrentUser] = useState<User | null>(null);

//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   const toggleCreateForm = () => {
//     setShowCreateForm(!showCreateForm);
//   };

//   const toggleEditForm = (user: User) => {
//     setCurrentUser({ ...user, password: '' }); // Tambahkan password kosong jika tidak ada
//     setShowEditForm(!showEditForm);
//   };

//   const handleEdit = (user: User) => {
//     toggleEditForm(user);
//   };

//   const handleDelete = (id: string) => {
//     dispatch(deleteUser(id));
//   };

//   if (status === 'loading') {
//     return <div>Loading...</div>;
//   }

//   if (status === 'failed') {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-semibold mb-4">User List</h1>

//       <button
//         onClick={toggleCreateForm}
//         className="mb-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//       >
//         {showCreateForm ? 'Close Create Form' : 'Create User'}
//       </button>

//       {showCreateForm && <CreateUserForm onClose={toggleCreateForm} />}

//       {showEditForm && currentUser && (
//         <EditUserForm user={currentUser} onClose={() => setShowEditForm(false)} />
//       )}

//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.id}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.name}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.phone_number}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm">
//                 <button
//                   onClick={() => handleEdit(user)}
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(user.id)}
//                   className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RegisterForm;
