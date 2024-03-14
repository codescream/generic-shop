
const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-full sm-min-w-[350px] rounded-[20px] shadow-3xl px-10 py-16">
      <div className="w-11 h-11 flex bg-coral-red rounded-full justify-center items-center">
        <img 
          src={imgURL} 
          alt={label} 
          width={24}
          height={24}
        />
      </div>
      <h2 className="text-3xl font-palanquin mt-4 font-semibold">{label}</h2>
      <p className="info-text mt-4">{subtext}</p>
    </div>
  )
}

export default ServiceCard;