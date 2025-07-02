import { memo } from "react";
import { generatePath, Link } from "react-router-dom";
import productData from "../../../product.json";
import "./style.css";
import { ROUTERS } from "../../utils/router";

const getImage = (filename) => new URL(`../../assets/images/${filename}`, import.meta.url).href;

const ProductsPage = () => {
    return (
        <div className="container ctr__body">
            <ul className="row">
                {
                    productData?.map(item => (
                        <li key={item.path} className="col-12 col-sm-6 col-lg-3">
                            <Link to={generatePath(ROUTERS.PRODUCT, { id: item.path })}
                                style={{
                                    backgroundImage: `url(${getImage(item.bgImg)})`
                                }}>
                                <p>{item.name} - ${item.price}</p>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div >
    );
};

export default memo(ProductsPage);
