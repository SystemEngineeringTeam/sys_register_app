import { order } from '@/types';
import { atom } from 'jotai';

export const orderAtom = atom<order>();

export const orderDataAtom = atom<order[]>([]);
