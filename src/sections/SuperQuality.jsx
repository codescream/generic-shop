import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <div className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex items-start flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provde You <span className="text-coral-red">Super</span>
          <br />
          Quality
          <span className="text-coral-red"> Shoes</span>
        </h2>
        <p className="info-text mt-4 lg:max-w-lg">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your walking experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>

        <p className="info-text mt-6 lg:max-w-lg mb-5">Our dedication to detail and excellence ensures your total ergonomic satisfaction.</p>
        <Button label={"View Details"} bgColor={"bg-coral-red"} color={"text-white"}  />
      </div>
      <div className="flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-center">
        <img 
          src={shoe8} 
          alt="big shoe" 
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default SuperQuality;