import { useAtomValue } from 'jotai';
import { useOrderCollection } from '../firebase/useOrderCollection';
import { useState, useEffect } from 'react';
import { userAtom } from '@/login/AdminLogin';

export const processOrderCollection = (process: string): Array<{ id: string | null }> => {
  const user = useAtomValue(userAtom);

  if (!user) {
    throw new Error('User is not logged in');
  }
  const { data } = useOrderCollection(user);
  const orderCollections = data || [];
  const [aryAccountigId, setAryAccountigID] = useState<Array<{ id: string | null }>>([]);
  const [aryCookingId, setAryCookingID] = useState<Array<{ id: string | null }>>([]);
  const [aryOfferId, setAryOfferID] = useState<Array<{ id: string | null }>>([]);
  const [aryAllFinishID, setAryAllFinishID] = useState<Array<{ id: string | null }>>([]);

  useEffect(() => {
    // ちょっと遅延をを入れる
    window.setTimeout(test, 10);
    // 新しいIDを追加するためのセット
    function test() {
      const newAccountigIds = new Set<string | null>();
      const newCookingIds = new Set<string | null>();
      const newOfferIds = new Set<string | null>();
      const newFinishIds = new Set<string | null>();
      orderCollections.forEach((orderCollection) => {
        // console.log(`acc,cook,off`, orderCollection.accounting, orderCollection.cooking, orderCollection.offer);
        switch (orderCollection.accounting) {
          case false:
            newAccountigIds.add(orderCollection.id);
            break;

          case true:
            if (!orderCollection.cooking) {
              newCookingIds.add(orderCollection.id);
            } else
              switch (orderCollection.offer) {
                case false:
                  newOfferIds.add(orderCollection.id);
                  break;

                case true:
                  newFinishIds.add(orderCollection.id);
                  break;
              }
            break;
        }
      });
      // 状態を更新
      setAryAccountigID(Array.from(newAccountigIds).map((id) => ({ id })));
      setAryCookingID(Array.from(newCookingIds).map((id) => ({ id })));
      setAryOfferID(Array.from(newOfferIds).map((id) => ({ id })));
      setAryAllFinishID(Array.from(newFinishIds).map((id) => ({ id })));
    }
  }, [orderCollections]); // `data`が変更された時だけ実行される

  function getProcessArray(process: string) {
    switch (process) {
      case 'accounting':
        return aryAccountigId;

      case 'cooking':
        return aryCookingId;

      case 'offer':
        return aryOfferId;

      case 'finish':
        return aryAllFinishID;

      default:
        return [];
    }
  }

  return getProcessArray(process);
};
