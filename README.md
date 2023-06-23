"use client"

import React, { useState } from 'react';
import { Calendar,CalendarYear } from "calendar";
import "calendar/dist/index.css";

const page = () => {
  const [selected, setSelected] = useState('');

  return (
    <>
      <Calendar startYear={1990} endYear={2050} onSelectedDate={(value: string) => setSelected(value)} />
      <CalendarYear startYear={1990} endYear={2050} onSelectedDate={(value: string) => setSelected(value)} />
    </>
  )
}

export default page