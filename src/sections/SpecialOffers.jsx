import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <div className="flex justify-between items-center max-lg:flex-col-reverse gap-10 w-full max-container">
      <div className="flex-1">
        <img 
          src={offer} 
          alt="offer" 
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex items-start flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Special </span>Offer
        </h2>
        <p className="info-text mt-4 lg:max-w-lg">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>

        <p className="info-text mt-6 lg:max-w-lg mb-5">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className="flex gap-4 mt-7">
          <Button label={"Shop Now"} iconUrl={arrowRight} bgColor={"bg-coral-red"} color={"text-white"}  />
          <Button label={"Learn more"} bgColor={"bg-transparent"} color={"text-slate-gray"} />
        </div>
      </div>
    </div>
  )
}

export default SpecialOffers;