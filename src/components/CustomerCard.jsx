import { star } from "../assets/icons";

const CustomerCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col justify-between  max-sm:w-full items-center gap-2 w-[380px]">
      <img 
        src={imgURL} 
        alt={customerName}
        width={120}
        height={120}
        className="rounded-full"
      />
      <p className="info-text text-center">{feedback}</p>
      <div className="w-5/6 flex justify-center gap-2.5">
        <img 
          src={star} 
          alt="rating"
          width={24}
          height={24}
        />
        <p className="font-monserrat text-xl text-slate-gray">({rating})</p>
      </div>
      <h3 className="text-3xl font-semibold font-montserrat">{customerName}</h3>
    </div>
  )
}

export default CustomerCard;