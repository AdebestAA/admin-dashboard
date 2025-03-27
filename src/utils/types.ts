import { IconType } from "react-icons";

export type sideBarMenuTypes = {
    id:number,
    name:string,
    link:string,
    icon:React.ElementType,

}


export type statsType = {
        id:number,
        name:string,
        value:number,
        icon:React.ElementType
}


export type productsListType = { 
        id: number,
        name: string,
        price: number,
        category: string,
        available: number,
        sold: number
}