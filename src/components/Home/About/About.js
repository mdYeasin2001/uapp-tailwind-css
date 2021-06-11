import React from 'react';
import icon1 from '../../../images/icon-1.png';
import icon2 from '../../../images/icon-2.png';
import icon3 from '../../../images/icon-3.png';
import icon4 from '../../../images/icon-4.png';
import icon5 from '../../../images/icon-5.png';
import icon6 from '../../../images/icon-6.png';

const About = () => {
    return (
        <div className="container mx-auto px-10 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                <div className="flex gap-4 hover:bg-gray-100 rounded p-2 hover:shadow-inner">
                    <div>
                        <img style={{width: '150px'}} src={icon1} alt="" />
                    </div>
                    <div>
                        <h3 className="font-medium text-2xl">Clean Code</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cum unde rem error sunt molestiae.</p>
                    </div>
                </div>
                <div className="flex gap-4 hover:bg-gray-100 rounded p-2 hover:shadow-inner">
                    <div>
                        <img style={{width: '150px'}} src={icon2} alt="" />
                    </div>
                    <div>
                        <h3 className="font-medium text-2xl">Color Changer</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cum unde rem error sunt molestiae.</p>
                    </div>
                </div>
                <div className="flex gap-4 hover:bg-gray-100 rounded p-2 hover:shadow-inner">
                    <div>
                        <img style={{width: '150px'}} src={icon3} alt="" />
                    </div>
                    <div>
                        <h3 className="font-medium text-2xl">Creative Design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cum unde rem error sunt molestiae.</p>
                    </div>
                </div>
                <div className="flex gap-4 hover:bg-gray-100 rounded p-2 hover:shadow-inner">
                    <div>
                        <img style={{width: '150px'}} src={icon4} alt="" />
                    </div>
                    <div>
                        <h3 className="font-medium text-2xl">Responsive Design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cum unde rem error sunt molestiae.</p>
                    </div>
                </div>
                <div className="flex gap-4 hover:bg-gray-100 rounded p-2 hover:shadow-inner">
                    <div>
                        <img style={{width: '150px'}} src={icon5} alt="" />
                    </div>
                    <div>
                        <h3 className="font-medium text-2xl">Fast Update</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cum unde rem error sunt molestiae.</p>
                    </div>
                </div>
                <div className="flex gap-4 hover:bg-gray-100 rounded p-2 hover:shadow-inner">
                    <div>
                        <img style={{width: '150px'}} src={icon6} alt="" />
                    </div>
                    <div>
                        <h3 className="font-medium text-2xl">Quick Start</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cum unde rem error sunt molestiae.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;