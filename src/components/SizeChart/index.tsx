import axios from "axios";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import { ReactElement, useEffect, useRef, useState } from "react";
import { X } from "react-feather";
import { PuffLoader } from "react-spinners";
import { object, string } from "yup";

interface ISizeChart {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactElement;
}

function SizeChart({ open, setOpen, children }: ISizeChart) {
  const [show, setShow] = useState(open);

  useEffect(() => {
    console.log(open);
    setShow(open);
  }, [open]);

  useEffect(() => {
    if (!show) {
      setTimeout(() => {
        setOpen(false);
      }, 500);
    }
  }, [show]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setShow(false);
      // Click occurred outside the SizeChart
    }
  };

  return (
    <dialog open={open} className="z-10">
      <div
        className={`fixed top-0 left-0 w-full h-full backdrop-blur-lg ${
          show ? "fade-in" : "fade-out"
        }`}
        onClick={handleOverlayClick}
        style={{
          backgroundColor: "rgb(0 0 0 / 50%)",
        }}
      >
        <div
          className={`relative h-full bg-white border-r-black max-w-[30rem] ${
            show ? "slide-in-from-left" : "slide-out-to-left"
          }`}
        >
          <X
            className="absolute top-4 right-4 cursor-pointer"
            onClick={() => setShow(false)}
          />
          {children}
        </div>
      </div>
    </dialog>
  );
}

export default SizeChart;
