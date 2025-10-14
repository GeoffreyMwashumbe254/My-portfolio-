import {useState, useEffect} from 'react';

export const useScrollToTop = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    useEffect(() => {
        //Add smooth scrolling to html
        document.documentElement.style.scrollBehavior = 'smooth';
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400); 
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            //cleanup smooth scrolling on unmount
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);
    return showScrollTop; 
};