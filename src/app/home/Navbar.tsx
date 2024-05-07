import useMediaQuery from '@/hooks/useMediaQuery';
import DesktopNavbar from './(navbar)/DesktopNavbar';
import React from 'react';
import MobileNavbar from './(navbar)/MobileNavbar';

const Navbar: React.FC = () => {
    const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');
    return <>{isAboveSmallScreens ? <DesktopNavbar /> : <MobileNavbar />}</>;
};

export default Navbar;
