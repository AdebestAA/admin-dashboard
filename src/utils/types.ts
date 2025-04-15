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


export type UsersListType = {
        id: number,
        name: string,
        email: string,
        role: "Admin" | "Member",
        status: "Active" | "Inactive",
      };

        type eachCategoryType = {
        label: string[];
        target: number[];
        revenue: number[];
        };

        export   type revenueVsTargetDataType = {
       
        thisWeek: eachCategoryType,
        thisMonth: eachCategoryType,
        lastMonth: eachCategoryType,
        lastSixMonths: eachCategoryType,
        }
        export type notificationSliceType = {
                id:number,
                name:string,
                status:boolean,
                }