import { ROUTERS } from "./utils/router";
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/'
import MasterLayout from "./pages/theme/masterLayout";
import ProductsPage from "./pages/productsPage";
import ProductDetails from "./pages/productDetails";

const renderRouterUser = () => {
    const userRouters = [
        {
            path: ROUTERS.HOME,
            component: <HomePage />
        },
        {
            path: ROUTERS.PRODUCTS,
            component: <ProductsPage />
        },
        {
            path: ROUTERS.PRODUCT,
            component: <ProductDetails />
        }
    ];

    return (
        <MasterLayout>
            <Routes>
                {userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))}
            </Routes>
        </MasterLayout>
    );

}

const RouterCustom = () => {
    return renderRouterUser();
}

export default RouterCustom;