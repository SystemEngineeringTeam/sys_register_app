import { PartialWithFieldValue, QueryDocumentSnapshot } from "firebase/firestore";

function converter<T>() {
    return {
      toFirestore: (data: PartialWithFieldValue<T>) => data,
      fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as T,
    };
  }

export const useItems = () => {
    const [items, setItems] = useState<items[] | null>(null);
  
    const user = useAtomValue(userAtom);
  
    if (!user) {
      throw new Error('User is not logged in');
    }
  
    const colRef = collection(db, 'shop_user', user.uid, 'items').withConverter(converter<items>());
  
    useEffect(() => {
      const unsb = onSnapshot(colRef, (snapshot) => {
        snapshot.docChanges().forEach(async (change) => {
          const docSnapshot = change.doc;
          const Docdata = docSnapshot.data();
  
          const newData: items = {
            id: docSnapshot.id,
            name: Docdata.name as string,
            category_id: Docdata.category_id as string,
            price: Docdata.price as number,
            visible: Docdata.visible as boolean,
            imgUrl: Docdata.imgUrl as string,
          };
  
          // 追加時
          if (change.type === 'added') {
            setItems((prevItems) => [...(prevItems || []), newData]);
          }
  
          // 変更時
          if (change.type === 'modified') {
            setItems((prevItems) => {
              if (!prevItems) return prevItems;
              return prevItems.map((items) => {
                if (items.id === docSnapshot.id) {
                  return newData;
                }
                return items;
              });
            });
          }
  
          // 削除時
          if (change.type === 'removed') {
            setItems((prevItems) => {
              if (!prevItems) return prevItems;
              return prevItems.filter((items) => items.id !== docSnapshot.id);
            });
          }
        });
      });
  
      return unsb;
    }, []);
  
    return items;
};