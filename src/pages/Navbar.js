import React,{useEffect,useState} from 'react'
import "./Navbar.css"
import { FaBars } from 'react-icons/fa'; 

export default function Navbar() {
    const [showHeader, setShowHeader] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const [mobileMenuVisible,setMobileMenuVisible] = useState(false);

  const handleScroll = () => {
    console.log(document.body.getBoundingClientRect().top);
    setScrollPos(document.body.getBoundingClientRect().top);
    setShowHeader(document.body.getBoundingClientRect().top > scrollPos);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

   const navItems = [
    { id: 1, label: 'HOME', href: '#' },
    { id: 2, label: 'CASE STUDIES', href: '#' },
    { id: 3, label: 'SERVICES', href: '#' },
    { id: 4, label: 'PROCESS', href: '#' },
    { id: 5, label: 'ABOUT', href: '#' },
    { id: 6, label: 'CONTACT', href: '#' },
  ];
  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };
  return (
    <div className={`container ${showHeader ? 'headerVisible' : 'headerHidden'}`}>
      <a href='#' className='logo'>
        <span>THE HONEST COMPANY</span>
      </a>
      <button className='burger-button' onClick={toggleMobileMenu}>
        <FaBars />
      </button>
      <ul className={`navbar ${mobileMenuVisible ? 'mobile-menu-visible' : ''}`}>
        {navItems.map((item) => (
          <li key={item.id}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
      <div className='button'>
        <h2>LET'S TALK</h2>
        <span className='pen-icon'>✎</span>
      </div>
    </div>
  );
  
}