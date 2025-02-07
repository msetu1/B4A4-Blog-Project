import { UserRegister } from '../auth/auth.model';

const blockUser = async (userId: string) => {
  const result = await UserRegister.findByIdAndUpdate(
    userId,
    { isBlocked: true },
    { new: true },
  );
  return result;
};

// const deleteBlogByAdmin = async (id: string) => {
//   const receivedEmail = currentUserEmail;
//   const findUser = await UserRegister.findOne({ email: receivedEmail });
//   if (findUser?.role !== 'admin') {
//     throw new Error('You are not an admin !');
//   }
//   const result = await BlogPost.findByIdAndDelete(id);
//   return result;
// };

export const AdminService = {
  blockUser,
  // deleteBlogByAdmin,
};
