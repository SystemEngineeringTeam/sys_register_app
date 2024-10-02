import { type User } from 'firebase/auth';
import { loadable } from 'jotai/utils';
import { atom } from 'jotai';
import { type developer } from '../types';

// ユーザーのログイン情報を保持するatom
export const userAtom = atom<User | null | developer>(null);
export const userAtomLoadable = loadable(userAtom);
