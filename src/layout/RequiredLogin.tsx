import { useAtomValue } from 'jotai';
import { type ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { userAtom } from '../login/AdminLogin';

export const RequiredLogin = (): ReactElement => {
  const user = useAtomValue(userAtom);

  if (user === null) {
    console.warn('ログインしていません!!!!!!');
    return <Navigate to={`/login?redirect=${window.location.pathname}`} />;
  }

  return <Outlet />;
};
