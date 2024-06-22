"use client"

import Image from "next/image";
import { Suspense } from "react";
import Fetch from "../componets/apos";
import { useState } from 'react';

export default function Home() {

  return (
    <Suspense fallback={"Loading..."}>
      <Fetch query={"https://api.nasa.gov/planetary/apod"} apikey={process.env.SECRET_KEY}/>
    </Suspense>
  );
}
