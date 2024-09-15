import { options } from "../types";

export const processCustomizeChange = (customchange: options[]):{name: string, price: number}[] => {
    return customchange
    .map(options => {
        return{
            name:options.name,
            price:options.price,
        }
    })
}