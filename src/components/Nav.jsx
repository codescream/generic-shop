import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo}
           alt="logo" 
           width={130}
           height={29}
           />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-32 max-lg:hidden">
          {
            navLinks.map((link) => 
            (<li key={link.label}>
              <a href={link.href}
                className="font-monserrat leading-normal text-lg text-slate-gray"
              >{link.label}</a>
            </li>
            ))
          }
        </ul>
        <div className="lg:hidden cursor-pointer">
          <img
            src={hamburger} 
            alt="menu" 
            width={20}
            height={20}
          />
        </div>
      </nav>
    </header>
  )
}

export default Nav;