import { signOut, User } from 'firebase/auth';
import { loadable } from 'jotai/utils';
import { atom, useSetAtom } from 'jotai';
import { developer } from '../types';
import { auth } from '../firebase/firebase';

// ユーザーのログイン情報を保持するatom
export const userAtom = atom<User | null | developer>(null);
export const userAtomLoadable = loadable(userAtom);


