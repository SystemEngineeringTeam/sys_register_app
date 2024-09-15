import { items, options } from "../types";

export const processCustomize = (customize: options[]):{name: string | null}[] => {
    return customize
    .map(items => {
        return {
            name:items.name || null,
        }
    })
}