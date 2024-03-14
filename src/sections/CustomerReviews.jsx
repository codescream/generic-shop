import CustomerCard from "../components/CustomerCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex-1 flex flex-col items-center">
        <h2 className="text-4xl font-palanquin font-semibold text-center">What Our <span className="text-coral-red">Customers</span> Say</h2>
        <p className="info-text text-center w-3/4 mt-3">
        Hear genuine stories from our satisfied customers about their exceptional experiences with us.
        </p>
      </div>
      <div className="flex-1 flex gap-60 mt-24 justify-center max-lg:flex-col max-lg:gap-10">
        {
          reviews.map((review, index) => (
            <CustomerCard key={index} {...review} />
          ))
        }
      </div>
    </div>
  )
}

export default CustomerReviews;