import React, { useState } from 'react';
import '../CSS/CategoryDropDown.css';
import { Shirts, Suites, WomanWareDress } from '../ReusableTabviewData.js/Dress';

const CategoryDropDown = () => {
    const [activeTab, setActiveTab] = useState();

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="category-dropdown">
            <ul className="tab-list">
                <li className={`tab-item ${activeTab === 'home' ? 'active' : ''}`} onMouseOver={() => handleTabClick('home')}>
                    Water purifier
                </li>
                <li className={`tab-item ${activeTab === 'profile' ? 'active' : ''}`} onMouseOver={() => handleTabClick('profile')}>
                    Filter
                </li>
                <li className={`tab-item ${activeTab === 'contact' ? 'active' : ''}`} onMouseOver={() => handleTabClick('contact')}>
                    Solar water purifier
                </li>
            </ul>
            <div className="tab-content">
                <div className={`tab-pane ${activeTab === 'home' ? 'active' : ''}`}>
                    <div className="content-side-by-side">
                        <Shirts />
                        <Shirts />
                        <Shirts />
                        <Shirts />
                        <Shirts />
                    </div>
                </div>
                <div className={`tab-pane ${activeTab === 'profile' ? 'active' : ''}`}>
                    <div className="content-side-by-side">
                        <Suites />
                        <Suites />
                        <Suites />
                        <Suites />
                        <Suites />
                    </div>
                </div>
                <div className={`tab-pane ${activeTab === 'contact' ? 'active' : ''}`}>
                    <div className="content-side-by-side">
                        <WomanWareDress />
                        <WomanWareDress />
                        <WomanWareDress />
                        <WomanWareDress />
                        <WomanWareDress />
                    </div>
                </div>
                </div>
        </div>
    );
};

export default CategoryDropDown;
