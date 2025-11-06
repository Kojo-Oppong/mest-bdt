"use client"; //Only for NextJS App Router

import dynamic from "next/dynamic";
import React from "react";

const NoSSR = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => <React.Fragment>{children}</React.Fragment>;

export default dynamic(() => Promise.resolve(NoSSR), {
  ssr: false,
});
