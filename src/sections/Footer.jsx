import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <div className="flex flex-col gap-28">
      <div className="flex flex-col gap-28 justify-between md:flex-row">
        <div className="flex flex-1 flex-col gap-8">
          <a href="/">
            <img 
              src={footerLogo} 
              alt="nike"
              width={150}
              height={150}
              className="text-coral-red"
            />
          </a>
          <p className="flex text-slate-300 text-lg">
            Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex gap-5">
            {
              socialMedia.map((social, index) => (
                <img 
                  src={social.src}
                  alt={social.src} 
                  key={index}
                  className="rounded-full bg-white p-3"
                />
              ))
            }
          </div>
        </div>
        <div className="flex flex-[3_3_0%] gap-10 font-montserrat text-2xl font-semibold text-white justify-between flex-wrap">
          {
            footerLinks.map((footerlink) => (
              <div key={footerlink.title}>
                <h2 className="text-coral-red">{footerlink.title}</h2>
                  <ul className="mt-4 text-base text-slate-200 font-normal">
                    {
                      footerlink.links.map((li) => (
                        <li key={li.name} className="my-2 hover:text-slate-600 w-fit">
                          <a href={li.link}>{li.name}</a>
                        </li>
                      ))
                    }
                  </ul>
              </div>
            ))
          }
        </div>
      </div>
      <div className="flex flex-col gap-3 items-center justify-between text-base text-slate-200 sm:flex-row">
          <p className="cursor-pointer">© Copyright. All rights reserved.</p>
          <p className="cursor-pointer">Terms & Conditions</p>
      </div>
    </div>
  )
}

export default Footer;