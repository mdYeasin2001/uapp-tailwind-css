import React from 'react';
import phone from '../../../images/phone.png';
import phone2 from '../../../images/phone2.png';

const Features = () => {
    return (
        <div>
            <div className="container mx-auto px-10">
                <h2 className="text-4xl mb-5 text-center">Features</h2>
                <div className="flex flex-col md:flex-row py-10 content-center">
                    <div className="flex-1 self-center">
                        <h1 className="text-2xl font-medium mb-6">Easy To Use</h1>
                        <p className="text-xl mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut qui accusamus sapiente enim autem odit, obcaecati, quisquam veniam earum pariatur illo dolore inventore ducimus maiores est. Assumenda, amet? Placeat, voluptatem.</p>
                        <button className="uapp-btn-secondary hover:shadow-inner hover:border-gray-400 px-8 py-2 mr-2 rounded-3xl font-bold tracking-wide">READ MORE</button>
                    </div>
                    <div className="flex-1 self-center lg:ml-20">
                        <img style={{ maxHeight: '590px' }} src={phone} alt="app" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row py-10 content-center">
                    <div className="flex-1 self-center lg:ml-20">
                        <img style={{ maxHeight: '590px' }} src={phone2} alt="app" />
                    </div>
                    <div className="flex-1 self-center">
                        <h1 className="text-2xl font-medium mb-6">Modern Design</h1>
                        <p className="text-xl mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut qui accusamus sapiente enim autem odit, obcaecati, quisquam veniam earum pariatur illo dolore inventore ducimus maiores est. Assumenda, amet? Placeat, voluptatem.</p>
                        <button className="uapp-btn-secondary hover:shadow-inner hover:border-gray-400 px-8 py-2 mr-2 rounded-3xl font-bold tracking-wide">READ MORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;