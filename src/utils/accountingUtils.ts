import { useOrderList } from "./OrderList";


export function totalAmount (id: string) {
    const order = useOrderList();

    function findItemById(id: string) {
        return order.data?.find(o => o.id === id);
    }

    const selectOrder = findItemById(id);

    if (!selectOrder) {
        return "No order found";
    }

    

    const total = selectOrder.item.reduce((acc, item) => {
        const itemPrice = item.price;
        const optionsPrice = item.options.reduce((acc, opt) => acc + opt.price, 0);
        return acc + itemPrice + optionsPrice;
    }, 0);
    


    return total;
}
