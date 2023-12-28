import Image from "next/image";
import { Container } from "../Container";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export function Hero() {
useEffect(() => {
  AOS.init();
}, []);
  return (
    <Container color="bg-grey" className="overflow-hidden">
      <div className="h-[360px] w-full mt-[48px] relative items-center lg:h-[500px] lg:mt-[96px]">
        <p
          className="pt-[81px] leading-[21px] font-bold font-inter text-black text-[14px] lg:text-[20px] lg:leading-[24.2px] lg:pt-[131px]"
          data-aos="fade-right"
          data-aos-duration="1000">
          Kamu laper atau haus?
        </p>
        <p
          className="mt-[8px] leading-[36px] font-bold w-[206px] font-inter text-black text-[24px] lg:text-[40px] lg:w-[524px] lg:leading-[60px] lg:mt-[16px]"
          data-aos="fade-right"
          data-aos-duration="1000">
          Tenang... ada Hangry! yang siap mengatasi
        </p>
        <div
          className="flex flex-row gap-x-[24.8px] pt-[24px] lg:pt-[40px]"
          data-aos="fade-right"
          data-aos-duration="1000">
          <Image
            src="/images/Button Playstore.png"
            alt=""
            height={1500}
            width={1500}
            className="h-[40px] w-[130px] hidden lg:block lg:w-[216px] lg:h-[64px]"
          />
          <Image
            src="/images/Button Apps Store.png"
            alt=""
            height={1500}
            width={1500}
            className="h-[40px] w-[130px] lg:w-[216px] lg:h-[64px]"
          />
        </div>
        <Image
          src="/images/handphone.png"
          alt=""
          height={15000}
          width={15000}
          className="lg:hidden absolute bottom-0 -right-[20px] h-[315px] w-[208px] lg:h-[710px]"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
        <Image
          src="/images/handphone-lg.png"
          alt=""
          height={15000}
          width={15000}
          className="hidden lg:block absolute -bottom-[300px] right-0 h-[415px] w-[198px] lg:h-[710px] lg:w-[500px] z-0"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
      </div>
    </Container>
  );
}

export default Hero;
