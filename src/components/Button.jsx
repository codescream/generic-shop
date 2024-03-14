
const Button = ({ label, iconUrl, bgColor, color }) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${bgColor} rounded-full ${color}`}>
      {label}
      {
        iconUrl && <img 
                      src={iconUrl} 
                      alt="button"
                      className="ml-2 rounded-full w-5 h-5"
                    />
      }
      
    </button>
  )
}

export default Button