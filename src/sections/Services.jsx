import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const Services = () => {
  return (
    <div className="max-container flex justify-center flex-wrap gap-9 max-lg:flex-col max-md:w-full">
      {
        services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))
      }
    </div>
  )
}

export default Services;