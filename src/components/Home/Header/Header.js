import React from 'react';
import phone from '../../../images/phone.png';

const Header = () => {
    
    return (
        <div className="header-area">
            <div className="container mx-auto px-10">
                <div className="flex flex-col md:flex-row py-10 content-center">
                    <div className="flex-1 self-center text-white">
                        <h1 className="text-5xl font-bold mb-6">APP LAND <br /> PROMOTE YOUR APP</h1>
                        <p className="text-xl mb-3">The Best Way To Promote Your App And Make A lot Of Selling, In HinataYou Will be Able To Use An Awesome, Clean And Responsive Design To Market Your App</p>
                        <button className="uapp-btn-primary px-8 py-2 mr-2 rounded-3xl font-medium tracking-wide">DOWNLOAD</button>
                        <button className="uapp-btn-primary px-8 py-2 ml-2 rounded-3xl font-medium tracking-wide">CONTACT US</button>
                    </div>
                    <div className="flex-1 self-center lg:ml-20">
                        <img className="mt-6 lg:mt-0" style={{ maxHeight: '590px' }} src={phone} alt="app" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;