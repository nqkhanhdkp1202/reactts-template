import React from 'react'
import { Outlet } from 'react-router-dom'
import { useEffect } from "react";
import { useLocation } from "react-router";
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';



export default function MainLayout() {
    const ScrollToTop = (props: any) => {
        const location = useLocation();
        useEffect(() => {
          window.scrollTo(0, 0);
        }, [location]);
      
        return <>{props.children}</>
      };

    return (
        <React.Fragment>
            <ScrollToTop >
            <Header />
            <Outlet />
            <Footer />
            </ScrollToTop>
        </React.Fragment>
    )
}