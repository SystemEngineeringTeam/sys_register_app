import { Box, Button, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { signInWithPopup, signOut, User } from 'firebase/auth';
import { auth, googleProvider } from '../firebase/firebase';
import GoogleButton from 'react-google-button'
import App from '../App';

const AdminLogin = () => {
      //型はUser型かnull
      const [user, setUser] = useState<User | null>(null); //ユーザー情報を保持


      // ログイン状態の監視
      useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
          if (authUser) {
            // ログインしている場合
            setUser(authUser);
          } else {
            // ログアウトしている場合
            setUser(null);
          }
        });
    
        // アンマウント時に監視解除
        return () => {
          unsubscribe();
        };
      }, []);

  const handleSignIn = async () => {
    try {
      // Googleログインポップアップを表示
      const result = await signInWithPopup(auth, googleProvider);
      // ログイン成功時の処理
      console.log("ログイン成功", result.user);
      // resultに入ってる情報を一つづつ確認する

      console.log("表示名", result.user?.displayName);
      console.log("メールアドレス", result.user?.email);
      console.log("プロフィール画像", result.user?.photoURL);
      console.log("ユーザーID", result.user?.uid);
      console.log("電話番号", result.user?.phoneNumber);
      console.log("メール認証", result.user?.emailVerified);
    } catch (error) {
      // エラーハンドリング
      console.error("ログインエラー", error);
    }
  };
    // ログアウト
    const handleSignOut = async () => {
        try {
          await signOut(auth);
        } catch (error) {
          console.error("ログアウトエラー:", error);
        }
      };

  return (
    <>
      {user ? (
        <div>
          <App userPoto ={user.photoURL}/>
        </div>
      ) : (
        <Box>
            <Box>
                Login
            </Box>
        
        <GoogleButton
        onClick={handleSignIn}
      />
      </Box>
            )}
    </>
  );
};

export default AdminLogin;
