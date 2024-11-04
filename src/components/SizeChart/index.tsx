import axios from "axios";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import { ReactElement, useEffect, useMemo, useRef, useState } from "react";
import { X } from "react-feather";
import { PuffLoader } from "react-spinners";
import { object, string } from "yup";

interface ISizeChart {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactElement;
}

export default function SizeChart({ open, setOpen, children }: ISizeChart) {
  const [show, setShow] = useState(false);
  const [exiting, setExiting] = useState(false);

  const outerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const innerElement = outerRef.current?.querySelector(
      ".wp-block-group"
    ) as HTMLElement;

    const isOverflow =
      innerElement.scrollHeight > (outerRef.current?.clientHeight ?? 0);

    if (!outerRef.current) return;

    // Apply styles directly if ref is available
    if (isOverflow) {
      Object.assign(outerRef.current.style, {
        // ...outerRef.current.style,
        ...{
          display: "grid",
          placeItems: isOverflow ? "start center" : "center", // Center or top-center based on overflow
          overflow: "scroll",
        },
      });
      if (innerElement) {
        Object.assign(innerElement.style, {
          // ...(innerElement?.style ?? {}),
          ...{
            width: "90%",
            alignSelf: isOverflow ? "start" : "center",
          },
        });
      }
    }
  }, [outerRef, show]);

  useEffect(() => {
    setShow(open);
  }, [open, show]);

  useEffect(() => {
    if (!show && open) {
      setExiting(true);
      setTimeout(() => {
        setExiting(false);
        setOpen(false);
      }, 500);
    }
  }, [show]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setShow(false);
    }
  };

  return (
    <dialog open={open || exiting} className="z-10">
      <div
        className={`fixed top-0 left-0 w-full h-full backdrop-blur-lg ${
          !exiting ? "fade-in" : "fade-out"
        }`}
        onClick={handleOverlayClick}
        style={{
          backgroundColor: "rgb(0 0 0 / 50%)",
        }}
      >
        <div
          ref={outerRef}
          className={`relative h-full text-xs flex flex-col justify-center p-6 bg-white border-r-black max-w-[30rem] ${
            !exiting ? "slide-in-from-left" : "slide-out-to-left"
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
