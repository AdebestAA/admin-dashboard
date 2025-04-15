"use client"
import { appDispatch } from "@/store";
import { turnOff, turnOn } from "@/store/slices/NotificationSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

type typeToggleProps = {
status: boolean;
name:string
};

const ToggleButton: React.FC<typeToggleProps> = ({
    status,
    name
}) => {
 
const dispatch = useDispatch<appDispatch>()


  return (
    <button
      onClick={()=> {
        if (status) {
            dispatch(turnOff(name))
        }
        else{
            dispatch(turnOn(name))
        }
      }}
      className={`w-12 h-6 flex items-center cursor-pointer rounded-full p-1 transition-colors duration-300 ${
        status ? "bg-blue" : "bg-gray"
      }`}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          status ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );
};

export default ToggleButton;
