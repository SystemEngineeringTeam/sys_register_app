// utils/processOrderCollection.ts
import { orderCollection } from '../types/index';

export const processOrderCollection = (orderCollections: orderCollection[]):{ id: string | null }[] => {
  return orderCollections
  .filter(orderCollection => orderCollection.accounting != true)
  .map(orderCollections => {
    return{
        id: orderCollections.id
    }
    } 
    
)
       

}
