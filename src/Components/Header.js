import React, { useEffect, useRef, useState } from 'react';
import { Menu } from 'primereact/menu';
import { InputText } from 'primereact/inputtext';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import JsonProducts from '../db/JsonProducts.json';
import ContentPage from '../Pages/ContentPage';
import { Divider } from 'primereact/divider';
import CategoryDropDown from '../Pages/CategoryDropDown';

const Header = () => {
    const [products, setProducts] = useState(JsonProducts);
    const [searchValue, setSearchValue] = useState('');
    const [searchData, setSearchData] = useState('');
    const [isShow, setIsShow] = useState(false);

    const op = useRef(null);
    const searchOverlay = useRef(null);
    const menuLeft = useRef(null);

    const handleSearch = (e) => {
        const searchText = e.target.value;
        setSearchValue(searchText);

        if (searchText) {
            setIsShow(true);
            searchOverlay.current.toggle(e);
        } else {
            setIsShow(false);
        }
    };

    const searchHandler = () => {
        setSearchData(searchValue);
    };

    const items = [
        {
            label: 'All India',
            icon: 'pi pi-map-marker',
            items: [
                {
                    label: 'Left',
                    icon: 'pi pi-fw pi-align-left',
                },
                {
                    label: 'Right',
                    icon: 'pi pi-fw pi-align-right',
                },
                {
                    label: 'Center',
                    icon: 'pi pi-fw pi-align-center',
                },
                {
                    label: 'Justify',
                    icon: 'pi pi-fw pi-align-justify',
                },
            ],
        },
    ];



    const [isOpen, setIsOpen] = useState(false);

    // const prevScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 100) {
                setIsOpen(true);
            } else if(currentScrollY===0) {
                setIsOpen(false);
                
            }
            
            // prevScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div >
            <div style={{zIndex:"2"}} className="header">
                <div className="grid">
                    <div style={{ paddingTop: '24px', paddingLeft: '30px' }} className="col-2">
                       <img style={{marginTop:"-20px"}} src='https://dir.indiamart.com/favicon.ico' alt='myMart-logo' />
                         <a href="#" className="myMart">
                            MyMart
                        </a>
                    </div>
                    <div className="col-6">
                        {isOpen && (
                            <span className="flex flex-row flex-wrap">
                                <span style={{ paddingTop: "14px", paddingLeft: "2px" }} className="p-input-icon-right flex align-items-center justify-content-center">
                                    <span className="flex align-items-center justify-content-center">
                                        <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
                                        <span onClick={event => menuLeft.current.toggle(event)} className="allIndiaDropdown1">
                                            <i style={{ paddingLeft: "5px" }} className="pi pi-map-marker" />
                                            <div style={{ marginTop: "-18px", paddingLeft: "20px" }}>
                                                <a href="#"
                                                    style={{ color: 'black', fontSize: '15px', paddingLeft: "10px", textDecoration: "none" }}
                                                    aria-controls="popup_menu_left"
                                                    aria-haspopup> All India
                                                </a>
                                            </div>
                                        </span>
                                    </span>
                                    <span style={{ paddingLeft: "4px" }}>
                                        <input type="text" style={{ height: "36px" }}
                                            value={searchValue}
                                            onChange={handleSearch}
                                            placeholder="Enter product"
                                        />
                                    </span>
                                    <OverlayPanel style={{ width: "280px" }} ref={searchOverlay}>
                                        {isShow && (
                                            <div>
                                                {Array.from(
                                                    new Set(
                                                        products.JProducts
                                                            .filter(item => item.categoryName.toLowerCase().includes(searchValue.toLowerCase()))
                                                            .map(item => item.categoryName)
                                                    )
                                                ).map((categoryName, index) => (
                                                    <div key={index} onClick={searchHandler}>
                                                        {categoryName}
                                                        <Divider />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </OverlayPanel>
                                    <span style={{ paddingLeft: "4px" }} onClick={searchHandler} className="flex align-items-center justify-content-center">
                                        <a style={{ backgroundColor: "#00a699", color: "white", height: "34px", width: "100px", textDecoration: "none", paddingTop: "8px" }} onClick={searchHandler}>
                                            <i style={{ paddingLeft: "14px" }} className="pi pi-search" /><b style={{ paddingLeft: "5px" }}>Search</b>
                                        </a>
                                    </span>
                                    <span className="flex align-items-center justify-content-center" style={{ paddingLeft: "15px" }}>
                                        <button style={{ backgroundColor: "white", color: "#2e3192", width: "150px", height: "36px" }} ><b>Get Search Price</b></button>
                                    </span>
                                </span>
                            </span>
                        )}
                    </div>
                    <div className="col-4">
                        <div style={{ paddingLeft: "75px" }} className="flex flex-row flex-wrap">
                            <span>
                                <i style={{ color: "white" }} className="pi pi-tags flex align-items-center justify-content-center w-4rem h-4rem border-round" />
                                <div style={{ marginTop: "-25px", color: 'white' }} >
                                    Shopping
                                </div>
                            </span>
                            <span>
                                <i style={{ color: "white" }} className="pi pi-home flex align-items-center justify-content-center w-4rem h-4rem border-round" />
                                <div style={{ marginTop: "-25px", color: 'white', paddingLeft: "20px" }}>
                                    Sell
                                </div>
                            </span>
                            <span >
                                <i style={{ color: "white" }} onClick={(e) => op.current.toggle(e)} className="pi pi-question flex align-items-center justify-content-center w-4rem h-4rem border-round" />
                                <div style={{ marginTop: "-25px", color: 'white', paddingLeft: "20px" }} onClick={(e) => op.current.toggle(e)}>
                                    Help
                                </div>
                                <OverlayPanel ref={op}>
                                    <li style={{ textDecoration: "none" }}>HI</li>
                                    <li style={{ textDecoration: "none" }}>Hello</li>
                                    <li style={{ textDecoration: "none" }}>Hello</li>
                                </OverlayPanel>
                            </span>
                            <span>
                                <i style={{ color: "white" }} className="pi pi-envelope flex align-items-center justify-content-center w-4rem h-4rem border-round" />
                                <div style={{ marginTop: "-25px", color: 'white', paddingLeft: "20px" }} >
                                    Messages
                                </div>
                            </span>
                            <span >
                                <i style={{ color: "white" }} onClick={(e) => op.current.toggle(e)} className="pi pi-user flex align-items-center justify-content-center w-4rem h-4rem border-round" />
                                <div onClick={(e) => op.current.toggle(e)} style={{ marginTop: "-25px", color: 'white', paddingLeft: "20px" }} >
                                    Sign in
                                </div>
                                <OverlayPanel ref={op}>
                                    <li style={{ textDecoration: "none" }}>HI</li>
                                    <li style={{ textDecoration: "none" }}>Hello</li>
                                    <li style={{ textDecoration: "none" }}>Hello</li>
                                </OverlayPanel>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{zIndex:"1"}} className='bg-img-searchbar'>
                <div style={{ textAlign: 'center', color: 'white', fontSize: "25px", marginTop: "-80px", zIndex: "2" }}>
                    Search for products & find verified sellers near you
                </div>
                <div  className='flex flex-row flex-wrap'>
                    {isOpen ? null : <span style={{ paddingLeft: "360px", paddingTop: "20px", paddingBottom: "50px" }} className='flex align-items-center justify-content-center'>
                        <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
                        <span onClick={event => menuLeft.current.toggle(event)} className="allIndiaDropdown">
                            <i style={{ paddingLeft: "5px" }} className="pi pi-map-marker" />
                            <div style={{ marginTop: "-23px", paddingLeft: "20px" }}>
                                <a href="#"
                                    style={{ color: 'black', fontSize: '15px', paddingLeft: "10px", textDecoration: "none" }}
                                    aria-controls="popup_menu_left"
                                    aria-haspopup> All India
                                </a>
                            </div>
                        </span>
                        <span style={{paddingLeft:"4px"}}>
                            <input type="text" style={{ height: "42px", width: "400px" }}
                                value={searchValue}
                                onChange={handleSearch}
                                placeholder="Enter product"
                            />
                        </span>
                        <OverlayPanel style={{ width: "280px" }} ref={searchOverlay} >
                            {isShow && (
                                <div>
                                    {Array.from(
                                        new Set(
                                            products.JProducts
                                                .filter(item => item.categoryName.toLowerCase().includes(searchValue.toLowerCase()))
                                                .map(item => item.categoryName)
                                        )
                                    ).map((categoryName, index) => (
                                        <div key={index} onClick={searchHandler}>
                                            {categoryName}
                                            <Divider />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </OverlayPanel>
                        <span style={{ paddingLeft: "4px" }} onClick={searchHandler} className="flex align-items-center justify-content-center" >
                            <a href='#' style={{ backgroundColor: "#058b80", color: "white", height: "40px", width: "120px", textDecoration: "none", paddingTop: "10px", paddingLeft: "10px" }}>
                                <i className="pi pi-search" /><b style={{ paddingLeft: "5px" }}>Search</b></a>
                        </span>
                    </span>
                    }
                </div>
                <div style={{backgroundColor:"white"}}>
                    <CategoryDropDown />
                </div>
            </div>
            <ContentPage searchData={searchData} searchValue={searchValue} />
        </div>
    );
};

export default Header;
