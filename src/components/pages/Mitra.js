import Image from "next/image";
import { Container } from "../Container";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export function Mitra() {
    useEffect(() => {
      AOS.init();
    }, []);
  const data = [
    {
      imageUrl: "/images/GoFood.png",
    },
    {
      imageUrl: "/images/GrabFood.png",
    },
    {
      imageUrl: "/images/Zomato.png",
    },
    {
      imageUrl: "/images/Eats.png",
    },
  ];
  return (
    <Container color="white" className="pt-[56px] lg:pt-[120px]">
      <div className="flex flex-col justify-center items-center">
        <p
          className="text-[10px] leading-[15px] text-blackSecondary lg:text-[20px] lg:leading-[36px]"
          data-aos="fade-up"
          data-aos-duration="1000">
          Hangry! dapat kamu temukan di
        </p>
        <div
          className="flex flex-row justify-center items-center gap-x-[6px] pt-[6px] pb-[64px] lg:pt-[42px] lg:pb-[122px] lg:gap-x-[50px]"
          data-aos="fade-up"
          data-aos-duration="1000">
          {data.map(({ imageUrl }) => {
            return (
              <Image
                key={imageUrl}
                src={imageUrl}
                alt=""
                height={1500}
                width={1500}
                className="max-w-[78px] lg:max-w-[240px] lg:max-h-[64px]"
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}

export default Mitra;
