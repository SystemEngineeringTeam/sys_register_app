import { useAtomValue } from 'jotai';
import { ReactElement } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { userAtom } from '../login/AdminLogin';

export function RequiredLogin(): ReactElement {
  const user = useAtomValue(userAtom);

  if (user === null) {
    console.warn('ログインしていません!!!!!!');
    return <Navigate to={`/login?redirect=${window.location.pathname}`} />;
  }

  return <Outlet />;
}
