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
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase/firebase';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { teal } from '@mui/material/colors';
import GoogleButton from 'react-google-button';
import { atom, useAtom } from 'jotai';
import { userAtom } from './AdminLogin';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const idAtom = atom<string | null>(null);
const passwordAtom = atom<string | null>(null);

const LoginForm = () => {
  const [user, setUser] = useAtom(userAtom);
  const [id, setId] = useAtom(idAtom);
  const [password, setPassword] = useAtom(passwordAtom);
  const navigate = useNavigate();

  const redirectTo = new URLSearchParams(window.location.search).get('redirect');

  // ログイン状態の監視
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // ログインしている場合
        setUser(authUser);
        navigate(redirectTo ?? '/');
      } else {
        // ログアウトしている場合
        setUser(null);
      }
    });

    // アンマウント時に監視解除
    return () => {
      unsubscribe();
    };
  }, [user]);

  // idとpasswordを使ってログイン
  const handleLogin = async () => {
    try {
      if (id && password) {
        // Firebaseの認証メソッドを使ってログインする処理を追加することが推奨される。
        const uid = id;
        setUser({ uid, password });
        navigate(redirectTo ?? '/');
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

  return (
    <Grid>
      <Paper
        component="form"
        elevation={3}
        sx={{
          p: 4,
          height: '70vh',
          width: '280px',
          m: '20px auto',
        }}
      >
        <Grid alignItems="center" container direction="column">
          <Avatar sx={{ bgcolor: teal[400] }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography sx={{ m: '30px' }} variant="h5">
            Sign In
          </Typography>
        </Grid>
        <TextField
          fullWidth
          label="Username"
          onChange={(e) => {
            setId(e.target.value);
          }}
          required
          value={id ?? ''}
          variant="standard"
        />
        <TextField
          autoComplete="current-password"
          fullWidth
          label="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
          type="password"
          value={password ?? ''}
          variant="standard"
        />
        {/* ラベルとチェックボックス */}
        <FormControlLabel
          control={<Checkbox color="primary" name="checkboxA" size="small" />}
          label="パスワードを忘れました"
          labelPlacement="end"
        />
        <Box mt={3}>
          <Button
            color="primary"
            fullWidth
            onClick={handleLogin}
            type="button" // 変更: "submit"から"button"に
            variant="contained"
          >
            サインイン
          </Button>
          <Typography variant="caption">
            <Link href="#">パスワードを忘れましたか？</Link>
          </Typography>
          <Typography display="block" variant="caption">
            アカウントを持っていますか？
            <Link href="#">アカウントを作成</Link>
          </Typography>
        </Box>
        <Box sx={{ py: '30px' }}>
          <GoogleButton onClick={handleSignIn} />
        </Box>
      </Paper>
      {redirectTo != null && (
        <p
          style={{
            textAlign: 'center',
            color: 'gray',
            fontSize: '0.8rem',
          }}
        >
          保護されたページです。ログインしてください; 遷移先: (<code>{redirectTo}</code>)
        </p>
      )}
    </Grid>
  );
};

export default LoginForm;
