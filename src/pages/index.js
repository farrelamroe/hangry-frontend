import Image from "next/image";
import { Inter } from "next/font/google";
import { Navbar, Hero, Menu, Mitra, Bulk } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <Mitra />
      <Bulk />
    </>
  );
}
