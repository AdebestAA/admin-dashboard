        import { IconType } from "react-icons";
import { SimpleIcon } from "simple-icons";


        // SIDE MENU TYPE
        export type sideBarMenuTypes = {
        id:number,
        name:string,
        link:string,
        icon:React.ElementType,

        }


        // STATS TYPE
        export type statsType = {
        id:number,
        name:string,
        value:number,
        icon:React.ElementType
        }

        //   PRODUCT LIST TYPE

        export type productsListType = { 
        id: number,
        name: string,
        price: number,
        category: string,
        available: number,
        sold: number
        }

        // USERS LIST TYPE
        export type UsersListType = {
        id: number,
        name: string,
        email: string,
        role: "Admin" | "Member",
        status: "Active" | "Inactive",
        };

        //       EACH CATEGORY TYPE
        type eachCategoryType = {
        label: string[];
        target: number[];
        revenue: number[];
        };


        // REVENUE VS TARGET TYPE
        export   type revenueVsTargetDataType = {
        thisWeek: eachCategoryType,
        thisMonth: eachCategoryType,
        lastMonth: eachCategoryType,
        lastSixMonths: eachCategoryType,
        }

        // NOTIFICATION SLICE TYPE 
        export type notificationSliceType = {
        id:number,
        name:string,
        status:boolean,
        }

        // SECURITYSLICE TYPE
        export type securitySliceType = {
        id:number,
        name:string,
        status:boolean,
        }
        
        // CONNECTED SOCIAL TYPES 
        export type connectedSocialsSliceType = {
        id:number,
        name:string,
        connected:boolean,
        icon:React.ElementType
        }
