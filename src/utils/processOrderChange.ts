import { items, options, orderCollection } from "../types";

export const processOrderChange = (processcollection: items[]):{name: string | null , price: number | null}[] => {
    return processcollection
    
    .map(items => {
        return {
            name:items.name || null,
            price:items.price || null,

        }
    })
}