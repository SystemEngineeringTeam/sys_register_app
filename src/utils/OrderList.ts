import { useAtom } from "jotai";
import { itemsAtom, orderAtom, optionsAtom } from '../firebase/FirebaseUtils';

export function useOrderList() {
    const [order] = useAtom(orderAtom);
    const [items] = useAtom(itemsAtom);
    const [options] = useAtom(optionsAtom);

    if (order.state === 'loading') {
        console.log('Loading...');
        return { status: 'loading', data: null };
    }

    if (order.state === 'hasError') {
        console.log('Error');
        return { status: 'error', data: null };
    }

    if (order.state === 'hasData') {
        const result = order.data?.map((o) => {
            const order_id = o.id;
            const items_id = o.items_id;

            // orderに紐付けられたitemsを取得

            const relatedItems = items.state === 'hasData'&&items.data?.filter((i) => items_id.includes(i.id)) || [];

            // itemsに紐付けられたoptionsを取得
            const itemDetails = relatedItems.map((item) => {

                const relatedOptions = options.state === 'hasData'&& options.data?.filter((opt) => item.options_id.includes(opt.id)) || [];

                return {
                    name: item.name,
                    price: item.price,
                    options: relatedOptions.map((opt) => ({
                        name: opt.name,
                        price: opt.price,
                    })),
                };
            });

            return {
                id: order_id,
                item: itemDetails,
            };
        });

        return { status: 'success', data: result };
    }

    return { status: 'idle', data: null };
}


