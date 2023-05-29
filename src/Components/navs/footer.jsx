import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

function Footer() {
    const location = useLocation();
    var date = new Date();
    var [currentpage, setCurrentpage] = useState('')
    useEffect(() => {
        setCurrentpage(location.pathname)
    }, [location])
    return (
        <div className="bg-dark pt-3 pb-1  h-100 w-100" id='footer'>
            
            <div className="col-12 d-flex w-100 justify-content-center align-item-bottom">
                <p className="text-light "> {date.getFullYear()}</p>
            </div>
        </div>
    )

}

export default Footer;