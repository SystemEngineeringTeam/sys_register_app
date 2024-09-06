// utils/processOrderCollection.ts
import { orderCollection } from '../types/index';

export const processOrderCollection = (orderCollections: orderCollection[]) => {
  return orderCollections.map(orderCollection => {
    return {
      id: orderCollection.id,
    }
})
}
