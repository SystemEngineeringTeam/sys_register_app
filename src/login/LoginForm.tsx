import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from '../firebase/firebase';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { teal } from '@mui/material/colors';
import GoogleButton from 'react-google-button';
import { atom, useAtom } from 'jotai';
import { userAtom } from './AdminLogin';
import { useEffect } from 'react';

const idAtom = atom<string | null>(null);
const passwordAtom = atom<string | null>(null);

const LoginForm = () => {
  const [user, setUser] = useAtom(userAtom);
  const [id, setId] = useAtom(idAtom);
  const [password, setPassword] = useAtom(passwordAtom);

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
  }, [setUser]);

  // idとpasswordを使ってログイン
  const handleLogin = async () => {
    try {
      if (id && password) {
        // Firebaseの認証メソッドを使ってログインする処理を追加することが推奨されます。
        const uid = id;
        setUser({ uid, password });
      } else {
        throw new Error('IDまたはパスワードが無効です');
      }
    } catch (error) {
      console.error('ログインエラー', error);
    }
  };

  // Googleログイン
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('ユーザーID', result.user?.uid);
    } catch (error) {
      console.error('ログインエラー', error);
    }
  };

  // ログアウト
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('ログアウトエラー:', error);
    }
  };

  return (
    <Grid>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          height: '70vh',
          width: '280px',
          m: '20px auto',
        }}
      >
        <Grid container direction="column" alignItems="center">
          <Avatar sx={{ bgcolor: teal[400] }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant={'h5'} sx={{ m: '30px' }}>
            Sign In
          </Typography>
        </Grid>
        <TextField
          label="Username"
          variant="standard"
          fullWidth
          required
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <TextField
          type="password"
          label="Password"
          variant="standard"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* ラベルとチェックボックス */}
        <FormControlLabel
          labelPlacement="end"
          label="パスワードを忘れました"
          control={<Checkbox name="checkboxA" size="small" color="primary" />}
        />
        <Box mt={3}>
          <Button
            type="button" // 変更: "submit"から"button"に
            color="primary"
            variant="contained"
            fullWidth
            onClick={handleLogin}
          >
            サインイン
          </Button>
          <Typography variant="caption">
            <Link href="#">パスワードを忘れましたか？</Link>
          </Typography>
          <Typography variant="caption" display="block">
            アカウントを持っていますか？
            <Link href="#">アカウントを作成</Link>
          </Typography>
        </Box>
        <Box sx={{ py: '30px' }}>
          <GoogleButton onClick={handleSignIn} />
        </Box>
      </Paper>
    </Grid>
  );
};

export default LoginForm;
