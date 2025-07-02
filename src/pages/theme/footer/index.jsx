import { memo } from "react";
import { Link } from "react-router-dom";
import './style.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="footer__about_logo">Eve Shop</h1>
                    </div>
                    <div className="col-12">
                        <div className="footer__about">
                            <ul>
                                <li>Address: Bắc Ninh, Việt Nam</li>
                                <li>Phone: 0123456789</li>
                                <li>Email: tranviethung712@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default memo(Footer);