// import { useAtom } from "jotai";
// import { itemsAtom, orderAtom, optionsAtom } from '../firebase/FirebaseUtils';

// export function useOrderList() {
//     const [order] = useAtom(orderAtom);
//     const [items] = useAtom(itemsAtom);
//     const [options] = useAtom(optionsAtom);

//     switch (order.state) {
//         case 'loading':
//             console.log('Loading...');
//             return { status: 'loading', data: null };

//         case 'hasError':
//             console.log('Error');
//             return { status: 'error', data: null };

//         case 'hasData':
//             const result = order.data?.map((o) => {
//                 const relatedItems = items.state === 'hasData'
//                     ? items.data?.filter(i => o.items_id.includes(i.id)) || []
//                     : [];

//                 const itemDetails = relatedItems.map(item => {
//                     const relatedOptions = options.state === 'hasData'
//                         ? options.data?.filter(opt => item.options_id.includes(opt.id)) || []
//                         : [];

//                     return {
//                         name: item.name,
//                         price: item.price,
//                         options: relatedOptions.map(opt => ({
//                             name: opt.name,
//                             price: opt.price,
//                         })),
//                     };
//                 });

//                 return {
//                     id: o.id,
//                     item: itemDetails,
//                     accounting: o.accounting,
//                 };
//             });

//             return { status: 'success', data: result };

//         default:
//             return { status: 'idle', data: null };
//     }
// }
