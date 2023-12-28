import { Container } from "@/components";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export function Menu() {
  useEffect(() => {
    AOS.init();
  }, []);
  const data = [
    {
      imageUrl: "/images/Image.png",
      name: "Ayam Koplo",
      location: "Nasi Geprek - Indonesia",
    },
    {
      imageUrl: "/images/Image.png",
      name: "San Gyu",
      location: "Beef Bowl · Jepang",
    },
    {
      imageUrl: "/images/Image.png",
      name: "Bude Sari",
      location: "Nasi Ayam - Indonesia",
    },
    {
      imageUrl: "/images/Image.png",
      name: "Kopi Dari|Pada",
      location: "Nasi Minuman - Indonesia",
    },
  ];
  return (
    <Container color="white">
      <p
        className="max-w-[286px] leading-[36px] font-bold text-[24px] pt-[40px] font-inter lg:text-[40px] lg:leading-[60px] lg:max-w-[1110px] lg:pt-[56px]"
        data-aos="fade-up"
        data-aos-duration="1000">
        Hangry! adalah restoran dengan beragam brand
      </p>
      <p
        className="max-w-[328px] leading-[21px] font-regular text-[16px] pt-[8px] font-inter text-blackSecondary lg:text-[24px] lg:leading-[36px] lg:max-w-[1110px]"
        data-aos="fade-up"
        data-aos-duration="1000">
        Kami menyajikan beragam brand untuk menemani setiap waktu santapmu
      </p>
      <div
        className="grid grid-cols-2 gap-x-[8px] gap-y-[24px] pt-[24px] lg:flex lg:flex-row lg:flex-wrap lg:gap-x-[30px] lg:pt-[32px] justify-center"
        data-aos="fade-up"
        data-aos-duration="1000">
        {data.map(({ imageUrl, name, location }) => {
          return (
            <div className="flex flex-col justify-start" key={imageUrl}>
              <Image
                src={imageUrl}
                alt=""
                height={1000}
                width={1000}
                className="w-[156px] h-[167px] object-cover rounded-[8px] shadow-[1px_1px_8px_1px_grey] lg:w-[350px] lg:h-[350px] lg:rounded-[16px]"
              />
              <div className="flex flex-row gap-x-[8px] items-center pt-[8px] lg:pt-[24px] lg:gap-x-[16px]">
                <p className="leadin-[21px] font-bold text-[14px] lg:text-[32px] lg:leading-[39px]">
                  {name}
                </p>
                <Image
                  src="/images/arrow-right.png"
                  alt=""
                  height={15000}
                  width={15000}
                  className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]"
                />
              </div>
              <p className="leading-[15px] text-[10px] text-blackSecondary pt-[4px] lg:text-[24px] lg:leading-[29px] lg:pt-[8px] font-regular">
                {location}
              </p>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default Menu;
