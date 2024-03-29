import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-fit md:w-full">
      <img 
        src={imgURL} 
        alt={name}
        width={280}
        height={280}
      />
      <div className="mt-8 w-5/6 flex justify-start gap-2.5">
        <img 
          src={star} 
          alt="rating"
          width={24}
          height={24}
        />
        <p className="font-monserrat text-xl text-slate-gray">(4.5)</p>
      </div>
      <h3 className="text-2xl my-2 font-semibold font-palanquin">{name}</h3>
      <p className="font-semibold text-coral-red font-montserrat">{price}</p>
    </div>
  )
}

export default PopularProductCard;