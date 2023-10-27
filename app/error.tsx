"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log("error", error);
  return (
    <>
      <div>An unexpected error has occurred</div>
      <button onClick={() => reset()} className="btn">
        Retry
      </button>
    </>
  );
};

export default ErrorPage;
