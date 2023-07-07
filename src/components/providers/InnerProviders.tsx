import React from "react";
import { Toaster } from "react-hot-toast";
import InfoModal from "../modals/InfoModal";

const InnerProviders = () => {
  return (
    <>
      <InfoModal />
      <Toaster position="top-center" />
    </>
  );
};

export default InnerProviders;
