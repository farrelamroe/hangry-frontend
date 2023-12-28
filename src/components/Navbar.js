"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { debounce } from "./utilities";

export function Navbar() {
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive((prev) => !prev);
  };
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);
  const navbarStyles = {
    position: "fixed",
    width: "100%",
    backgroundColor: "#FFFFFF",
    textAlign: "center",
    transition: "top 0.6s",
  };
  return (
    <>
      <div
        style={{ ...navbarStyles, top: visible ? "0" : "-120px" }}
        className="z-[110] h-[48px] lg:h-[96px]">
        <div className="relative top-[50%] flex h-full translate-y-[-50%] flex-row items-center justify-between px-5 shadow-md lg:px-[165px]">
          <Link href="/">
            <Image
              src="/images/Logo.png"
              width={1500}
              height={1500}
              alt=""
              className="my-auto block lg:max-w-[139px] max-w-[64px]"
            />
          </Link>
          <div className="relative z-40 hidden flex-row items-center justify-center gap-x-[48px] text-xl lg:flex">
            <Link href="/">
              <p className="hover:cursor-pointer hover:font-bold text-black">
                Tentang Kami
              </p>
            </Link>
            <div className="group relative z-50 text-sm">
              <button className=" font-inter text-xl text-black hover:font-bold">
                <span>Semua Outlet</span>
              </button>
            </div>
            <div className="group relative z-50 text-sm">
              <button className=" font-inter text-xl text-black hover:font-bold">
                <span>Promo</span>
              </button>
            </div>
            <div className="group relative z-50 text-sm">
              <button className=" font-inter text-xl text-black hover:font-bold">
                <span>Karier</span>
              </button>
            </div>
            <div className="group relative z-50 text-sm">
              <button className=" font-inter text-xl text-primary hover:font-bold">
                <span>Download App</span>
              </button>
            </div>
          </div>

          <svg
            width="24"
            height="24"
            viewBox="0 0 40 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggle}
            className="lg:hidden">
            <rect
              width={active ? "45" : "40"}
              height="5"
              fill="#252644"
              className={
                active
                  ? "translate-x-[10%] translate-y-[0%] rotate-45 duration-300"
                  : "rotate-0 duration-300"
              }
            />
            <rect
              y="16"
              width="40"
              height="5"
              fill="#252644"
              className={
                active
                  ? "translate-x-[100%] duration-300"
                  : "rotate-0 duration-300"
              }
            />
            <rect
              y="32"
              width={active ? "45" : "40"}
              height="5"
              fill="#252644"
              className={
                active
                  ? "translate-x-[-50%] translate-y-[25%] -rotate-45 duration-300"
                  : "rotate-0 duration-300"
              }
            />
          </svg>
        </div>
      </div>

      <div
        className={` fixed z-[110] flex h-screen w-screen flex-col items-start justify-start gap-x-5 gap-y-1 overflow-y-hidden bg-primary pt-24 text-xl text-white duration-1000 lg:hidden ${
          active ? "max-w-[75vw]" : "max-w-0"
        } ${visible ? "" : "translate-x-[-200%]"}`}>
        <div className="group relative">
          <button className=" pb-5 pl-20 font-inter text-xl text-white xs:pl-28 sm:pl-36 md:pl-44">
            <span>Tentang Kami</span>
          </button>
        </div>
        <div className="group relative">
          <button className=" whitespace-nowrap pb-5 pl-20 font-inter text-xl text-white xs:pl-28 sm:pl-36 md:pl-44">
            <span>Semua Outlet</span>
          </button>
        </div>
        <div className="group relative">
          <button className=" whitespace-nowrap pb-5 pl-20 font-inter text-xl text-white xs:pl-28 sm:pl-36 md:pl-44">
            <span>Promo</span>
          </button>
        </div>
        <div className="group relative">
          <button className="whitespace-nowrap pb-5 pl-20 text-start font-inter text-xl text-white xs:pl-28 sm:pl-36 md:pl-44">
            <span>Karier</span>
          </button>
        </div>
        <div className="group relative">
          <button className=" pb-5 pl-20 font-inter text-xl text-white xs:pl-28 sm:pl-36 md:pl-44">
            <span>Download App</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
