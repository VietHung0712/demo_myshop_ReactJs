import { memo, useState } from "react";
import { FaSearch, FaFacebook, FaInstagram, FaTwitter, FaGithub, FaUser, FaMailBulk, FaShoppingCart, FaList } from "react-icons/fa";
import './style.css'
import { Link, useLocation } from "react-router-dom";
import { Fomatter } from "../../../utils/fomatter";
import { ROUTERS } from "../../../utils/router";
import banner from '../../../assets/images/l-intro-1679073677.jpg';

const Header = () => {
    const [isShowCategories, setShowCategories] = useState(true);
    const location = useLocation();
    const [menus] = useState([
        {
            name: "Home",
            path: ROUTERS.HOME
        },
        {
            name: "Product",
            path: ROUTERS.PRODUCTS,
            isShowSubMenu: false,
            child: [
                {
                    name: "Pork",
                    path: ""
                },
                {
                    name: "Beef",
                    path: ""
                },
                {
                    name: "Chicken",
                    path: ""
                },
                {
                    name: "Vegetable",
                    path: ""
                }
            ]
        },
        {
            name: "About us",
            path: ""
        },
        {
            name: "Contact",
            path: ""
        }
    ]);
    return (
        <header>
            <div className="header__top d-none d-sm-block">
                <div className="container">
                    <div className="row">
                        <div className="col-6 header__top_element">
                            <ul>
                                <li>
                                    <a href="" target="_blank" rel="noopener noreferrer">
                                        <FaMailBulk />
                                        <span>tranviethung712@gmail.com</span>
                                    </a>
                                </li>
                                <li><span>Welcome to shop</span></li>
                            </ul>
                        </div>
                        <div className="col-6 header__top_element header__top_right">
                            <ul>
                                <li>
                                    <a href="" target="_blank" rel="noopener noreferrer">
                                        <FaFacebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram />
                                    </a>
                                </li>
                                <li>
                                    <a href="" target="_blank" rel="noopener noreferrer">
                                        <FaTwitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="" target="_blank" rel="noopener noreferrer">
                                        <FaGithub />
                                    </a>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <FaUser />
                                        <span>Sign in</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-12">
                        <div className="header__logo">
                            <h1>Eve Shop</h1>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="header__menus">
                            <ul>
                                {
                                    menus?.map((item, key) => (
                                        <li key={key} className={location.pathname === item.path ? "active" : ""}>
                                            <Link to={item?.path}>{item?.name}</Link>{
                                                item.child && (
                                                    <ul className="header__menus_dropdown">
                                                        {
                                                            item.child?.map((child, childKey) => (
                                                                <li key={`${key}-${childKey}`}>
                                                                    <Link to={child?.path}>{child?.name}</Link>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                )
                                            }
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 d-sm-block d-none">
                        <div className="header__cart">
                            <div className="header__cart_price">
                                <span>
                                    {Fomatter(123)}
                                </span>
                            </div>
                            <ul>
                                <li>
                                    <Link to={""}>
                                        <FaShoppingCart />
                                        <span>3</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container d-none d-md-block">
                <div className="row categories__ctr">
                    <div className="col-3 categories__ctr_all">
                        <div onClick={() => setShowCategories(!isShowCategories)}>
                            <FaList />
                            Products List
                        </div>
                        <ul className={isShowCategories ? "" : "hidden"}>
                            <li>
                                <Link to={""}>Beef</Link>
                            </li>
                            <li>
                                <Link to={""}>Chicken</Link>
                            </li>
                            <li>
                                <Link to={""}>Vegetable</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-9 banner__ctr">
                        <div className="search__form">
                            <form action="">
                                <input type="text" placeholder="Search" />
                                <button type="submit"><FaSearch/></button>
                            </form>
                        </div>
                        <div className="banner__img">
                            <img src={banner} alt="Banner" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default memo(Header);