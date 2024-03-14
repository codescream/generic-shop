import Button from "../components/Button";

const Subscribe = () => {
  return (
    <div className="max-container flex justify-between items-center gap-60 max-lg:flex-col max-lg:gap-10">
      <h2 className="text-4xl text-center flex-1 font-bold font-palanquin">Sign Up for <span className="text-coral-red">Updates</span> & Newsletter</h2>
      <div className="flex flex-1 justify-between rounded-full ring-1 ring-slate-900 pl-5 p-3 max-lg:w-3/4 max-sm:w-full">
        <input type="text" placeholder="subscribe@nike.com" className="outline-none flex-1" />
        <Button label={"Sign Up"} bgColor={"bg-coral-red"} color={"text-white"} />
      </div>
    </div>
  )
}

export default Subscribe;