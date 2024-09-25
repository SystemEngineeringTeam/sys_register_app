import { useOrderCollection } from "../firebase/useOrderCollection";
import { order, orderCollection } from "../types";

// IDが一致するorder[]を取得する
export const sortingOrders = (id: number): order[] => {

    const {data} = useOrderCollection();

    if (!data) {
        return [];
    }

    const idToString = id.toString();

    // orderCollectionからIDが一致するorderを取得
    const orders = (data: orderCollection[]):order[] => {
    
        const order = data.find((order) => order.id === idToString);
        return order ? order.order : [];

    }


    return (
        orders(data)
    ); // ここに処理を追加してください



};