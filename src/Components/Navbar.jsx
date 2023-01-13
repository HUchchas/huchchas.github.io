import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  const [transparent, setTransparent] = useState(true);
  const [shadow, setShadow] = useState(false);

  const changeTransparent = () => {
    if (window.scrollY > 80) {
      setTransparent(false);
      setShadow(true);
    } else {
      setTransparent(true);
      setShadow(false);
    }
  };

  window.addEventListener('scroll', changeTransparent);

  return (
    <div className={`flex w-full h-[80px] ${shadow ? 'shadow-2xl' : ''} transition duration-500 flex-row justify-between items-center pl-[10%] pr-[10%] 2xl:pl-[20%] 2xl:pr-[20%] text-black bg-white`}>

      <div className="flex text-black text-3xl font-bold"> HU </div>

      <div className="md:hidden">
        <MenuIcon />
      </div>

      <div className="hidden md:flex flex-row justify-between w-[32rem] text-black font-bold">
        <a href="/personal" className="hover:text-blue-500"> Personal </a>
        <a href="/portfolio" className="hover:text-blue-500"> Portfolio </a>
        <a href="/blog" className="hover:text-blue-500"> Blog </a>
        <a href="/contact" className="hover:text-blue-500"> Contact </a>
      </div>
    </div>
  )
}