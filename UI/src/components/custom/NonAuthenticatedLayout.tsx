import React, { FC } from "react";
import { Navigation } from "./Navigation";

type OwnProps = {
  children: React.ReactElement;
};

export const NonAuthenticatedLayout: FC<OwnProps> = ({ children }) => {
  return (
    <>
      
      <Navigation />
      <main className="mx-auto max-w-7xl p-4">{children}</main>
    </>
  );
};
