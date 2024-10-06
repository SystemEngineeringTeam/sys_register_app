import { useOrderCollection } from '../firebase/useOrderCollection';
import { useState, useEffect } from 'react';

// idと一致する注文情報を取得
export const processOrderCollection = (process: string): Array<{ id: string | null }> => {
  const { data } = useOrderCollection();
  const orderCollections = data || [];

  const [aryAccountigId, setAryAccountigID] = useState<Array<{ id: string | null }>>([]);
  const [aryCookingId, setAryCookingID] = useState<Array<{ id: string | null }>>([]);
  const [aryOfferId, setAryOfferID] = useState<Array<{ id: string | null }>>([]);

  useEffect(() => {
    // 新しいIDを追加するためのセット
    const newAccountigIds = new Set<string | null>();
    const newCookingIds = new Set<string | null>();
    const newOfferIds = new Set<string | null>();

    orderCollections.forEach((orderCollection) => {
      switch (orderCollection.accounting) {
        case false:
          newAccountigIds.add(orderCollection.id);
          break;

        case true:
          if (!orderCollection.cooking) {
            newCookingIds.add(orderCollection.id);
          } else if (!orderCollection.offer) {
            newOfferIds.add(orderCollection.id);
          }
          break;
      }
    });

    // 状態を更新
    setAryAccountigID(Array.from(newAccountigIds).map((id) => ({ id })));
    setAryCookingID(Array.from(newCookingIds).map((id) => ({ id })));
    setAryOfferID(Array.from(newOfferIds).map((id) => ({ id })));
  }, [orderCollections]); // `data`が変更された時だけ実行される

  function getProcessArray(process: string) {
    switch (process) {
      case 'accounting':
        return aryAccountigId;

      case 'cooking':
        return aryCookingId;

      case 'offer':
        return aryOfferId;

      default:
        return [];
    }
  }

  return getProcessArray(process);
};
