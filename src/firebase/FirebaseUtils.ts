import { collection, getDocs } from "firebase/firestore";
import { atom } from 'jotai'
import { db } from "./firebase";

// firebaseのエラーを判定する関数
//型ガードを使用する
function isFirebaseError(
    err: unknown
  ): err is { code: string; message: string } {
    return typeof err === "object" && err !== null && "code" in err;
  }


//データを取得する関数

export const fetchOrder = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "order"));
        console.log(querySnapshot);

        const OrderData = querySnapshot.docs.map((doc) => {
            return {
                ...doc.data(),
                id: doc.id,
              };
            });

    return OrderData;


} catch (err) {        // エラー処理
    if (isFirebaseError(err)) {
      console.error("Firestore Error:", err);

    } else {
      console.error("一般的なエラー", err);
    }
  } finally {
    console.log("finally");

  }
};

export const orderAtom = atom(async () => await fetchOrder());