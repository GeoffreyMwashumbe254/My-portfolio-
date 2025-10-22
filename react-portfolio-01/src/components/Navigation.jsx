import React , { useState, useEffect } from 'react';
import {Menu, X} from 'lucide-react';


const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            const navHeight = 60;
            const elementPosition = element.offsetTop - navHeight;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
        closeMobileMenu(); // Close menu after clicking

    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll); 
        return () => window.removeEventListener('scroll', handleScroll);

    }, []);

    const navItems = [
        {href: '#about', label: 'About Me'},
        {href: '#projects', label: 'Projects'},
        {href: '#skills', label: 'Skills'},
        {href: '#contact', label: 'Contact'},
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className={`text-xl font-bold transition-colors cursor-pointer hover:opacity-80 ${isScrolled ? 'text-black' : 'text-white'} `} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                        Portfolio
                    </div>

                     {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <a key={item.href} href={item.href} className={`transition-colors ${isScrolled ? 'text-gray-600 hover:text-black' : 'text-gray-700 hover:text-black'}`} onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(item.href);
                            }}>
                                {item.label} 
                            </a>
                        ))}
                    </div>

                   
                    
                </div>

            </div>
        </nav>
    )

}

export default Navigation;