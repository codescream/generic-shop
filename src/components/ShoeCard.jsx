

const ShoeCard = ({ imgUrl, bigShoeImg, changeBigShoeImage }) => {
  return (
    <div className={`border-2 rounded-xl ${bigShoeImg === imgUrl.bigShoe ? "border-coral-red" : "border-transparent"} cursor-pointer max-sm:flex-1`}
    onClick={() => {
      if(bigShoeImg !== imgUrl.bigShoe) {changeBigShoeImage(imgUrl.bigShoe);}
    }}
    >
      <div className="flex bg-card bg-center justify-center items-center bg-cover sm:w-32 sm:h-32 rounded-xl max-sm:p-4">
        <img 
          src={imgUrl.thumbnail} 
          alt="thumbnail" 
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default ShoeCard;