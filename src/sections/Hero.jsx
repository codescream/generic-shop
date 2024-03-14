import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <div className="flex xl:flex-row flex-col min-h-screen w-full justify-center gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray leading-8 text-lg mt-6 mb-14 sm:max-w-sm">Discover stylish Nike Arrivals, quality comfort, and innovation for your active life.</p>
        <Button label={"Shop Now"} iconUrl={arrowRight} bgColor={"bg-coral-red"} color={"text-white"} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => 
          (
            <div key={stat.label}>
              <p className="font-palaquin text-4xl font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img 
          src={bigShoeImg} 
          alt="big shoe" 
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div 
          className="flex absolute gap-4 -bottom-16 left-20">
          {
            shoes.map((shoe) => 
            (
              <div key={shoe.bigShoe}>
                <ShoeCard
                  imgUrl={shoe}
                  bigShoeImg={bigShoeImg}
                  changeBigShoeImage={(img) => setBigShoeImg(img)}
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Hero;