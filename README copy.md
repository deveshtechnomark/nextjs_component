"use client"

import React from 'react';
import { Timepicker, Timepicker24 } from 'timepicker';
import "timepicker/dist/index.css";

const page = () => {
  return (
    <div className="container mx-auto">
      <Timepicker />
      <Timepicker24 />
      <div className="w-full h-full bg-yellow-500 rounded-full"></div>
    </div>
  )
}

export default page