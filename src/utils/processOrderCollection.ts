// utils/processOrderCollection.ts
import { orderCollection } from '../types/index';

export const processOrderCollection = (orderCollections: orderCollection[]):{ id: string | null }[] => {

  const aryId: { id: string | null}[] = [];
  const aryWaitPeople: {id: string | null}[] = [];
  const aryCallPeople:{ id:string | null}[] = [];

return orderCollections.map((orderCollection,orderWait) => {
  console.log("id:"+orderCollection.id);
  console.log("boolean"+orderCollection.accounting)
  
  switch (orderCollection.accounting){
    case false:
      aryId.push({
        id:orderCollection.id
      })
      return {
        id:orderCollection.id
      };
     
     case true:
      if(orderCollection.cooking = false){
        aryWaitPeople.push({
          id:orderCollection.id
        })
      }

      console.log("aryWaitPeople:"+aryWaitPeople);
        return {
          id:orderCollection.id
        };


      default: 
      if(orderCollection.cooking = false){
        if(orderCollection.offer = false){
          aryCallPeople.push({
            id:orderCollection.id
          })
        }
      }

      console.log("aryCallPeople:"+aryCallPeople);
      return {
        id:orderCollection.id
      }
  }
})
}



