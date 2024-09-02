import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { signInWithPopup, signOut, User } from 'firebase/auth';
import { auth, googleProvider } from '../firebase/firebase';
import App from '../App';
import { loadable } from 'jotai/utils';
import { atom, useAtom } from 'jotai';
import { developer } from '../types';
import LoginForm from './LoginForm';




// ユーザーのログイン情報を保持するatom
export const userAtom = atom<User | null |developer>(null);
export const userAtomLoadable = loadable(userAtom);

const AdminLogin = () => {
  const [user, setUser] = useAtom(userAtomLoadable);

  const userData = user.state === 'hasData' ? user.data : null;
  console.log(userData);

  return (
<>
  { userData ? (
    <div>
      <App />
    </div>
  ) : (
    <Box>
      <LoginForm />
    </Box>
  )}
</>
  );
};

export default AdminLogin;
