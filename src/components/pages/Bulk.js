import Image from "next/image";
import { Container } from "../Container";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export function Bulk() {
  useEffect(() => {
    AOS.init();
  }, []);
  const data = [
    {
      text: "Beragam pilihan menu",
      syarat: false,
    },
    {
      text: "Semua menu diskon 20%",
      syarat: false,
    },
    {
      text: "Gratis biaya kirim",
      syarat: true,
    },
  ];
  return (
    <Container color="white">
      <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-x-[30px]">
        <Image
          src="/images/Image.png"
          alt=""
          width={1500}
          height={1500}
          className="max-w-[328px] max-h-[172px] object-cover rounded-[8px] lg:max-h-[400px] lg:max-w-[540px] block mx-auto"
          data-aos="fade-left"
          data-aos-duration="1000"
        />
        <div
          className="flex flex-col"
          data-aos="fade-right"
          data-aos-duration="1000">
          <p className="pt-[16px] text-[24px] leading-[36px] text-black font-bold lg:text-[40px] lg:leading-[60px]">
            Makin rame, makin hemat!
          </p>
          <p className="pt-[8px] text-[14px] leading-[21px] text-blackSecondary lg:text-[24px] lg:leading-[36px] lg:max-w-[540px]">
            Nikmati keuntungan dengan minimum pembelian 20 porsi menu apa aja.
            Cocok untuk hidangan segala acara!
          </p>
          <div className="pt-[8px] lg:pt-[24px]">
            {data.map(({ text, syarat }) => {
              return (
                <div
                  className="flex flex-row items-center justify-start gap-x-[10px] pt-[24px]"
                  key={text}>
                  <Image
                    src="/images/check.png"
                    alt=""
                    height={1000}
                    width={1000}
                    className="max-w-[16px] max-h-[16px] lg:max-w-[24px] lg:max-h-[24px]"
                  />
                  <div className="flex flex-col">
                    <p className="text-[14px] leading-[21px] font-bold text-black lg:text-[24px] lg:leading-[36px]">
                      {text}
                    </p>
                    {syarat && (
                      <p className="text-[12px] leading-[18px] text-blackSecondary pt-[2px] lg:text-[16px] lg:leading-[24px]">
                        *Syarat & ketentuan berlaku
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <button className=" text-[14px] leading-[21px] w-full bg-primary text-white rounded-[8px] h-[48px] font-bold mt-[24px] mb-[43px] lg:max-w-[255px] lg:h-[80px] lg:mt-[48px] lg:mb-[129px] lg:text-[24px] lg:leading-[36px]">
            Pesan sekarang
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Bulk;
