// utils/processOrderCollection.ts
import { orderCollection } from '../types/index';
import { useState } from 'react';


export const processOrderCollection = (orderCollections: orderCollection[]):{ id: string | null }[] => {

  const aryId: { id: string | null}[] = [];
  const aryWaitPeople: {id: string | null}[] = [];
  const aryCallPeople:{ id:string | null}[] = [];
  const [id,setId] = useState<{id: string | null}[]>([]);
  const [waitPeople,setWaitPeople] = useState<{id: string | null}[]>([]);
  const [callPeople,setCallPeople] = useState<{id: string | null}[]>([]);

const ordernumber = ():{ id: string | null }[] => {

return orderCollections.map((orderCollection,orderWait) => {
  console.log("id:"+orderCollection.id);
  console.log("boolean"+orderCollection.accounting)
  
  switch (orderCollection.accounting){
    case false:
      
      //setId(() => [...id,{ id: orderCollection.id}]);
      // console.log("🚀 ~ returnorderCollections.map ~ setId:", setId)
      // console.log("🚀 ~ returnorderCollections.map ~ setId:", id)
      // console.log("🚀 ~ returnorderCollections.map ~ setId:", orderCollection.id)

      aryId.push({
        id:orderCollection.id
      })

       setId((aryId))


      console.log("🚀 ~ returnorderCollections.map ~ setId:", setId)
      console.log("🚀 ~ returnorderCollections.map ~ setId:", id)


      return {
        id:orderCollection.id
      };
     
     case true:
      if(orderCollection.cooking = false){

        setWaitPeople((waitpeople) => [...waitpeople,{id:orderCollection.id}])
        console.log("🚀 ~ returnorderCollections.map ~ setWaitPeople:", setWaitPeople)
        aryWaitPeople.push({
          id:orderCollection.id
        })
        setWaitPeople(aryWaitPeople)
      }

      console.log("aryWaitPeople:"+aryWaitPeople);
        return {
          id:orderCollection.id
        };


      default: 
      if(orderCollection.cooking = false){
        if(orderCollection.offer = false){

          setCallPeople((callpeople) => [...callpeople,{id: orderCollection.id}])
          console.log("🚀 ~ returnorderCollections.map ~ setCallPeople:", setCallPeople)

          aryCallPeople.push({
            id:orderCollection.id
          })
          setCallPeople(aryCallPeople)
        }
      }

      console.log("aryCallPeople:"+aryCallPeople);
      return {
        id:orderCollection.id
      }
  }
    
})
    


}

return ordernumber();
};

// const OrderNum = () => {
//   const [number,setNumber] = useState([]);

//   setNumber( se )


//   setNumber
// }
