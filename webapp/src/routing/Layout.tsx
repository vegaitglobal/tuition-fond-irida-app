import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <nav>
                <Link to="/">Pocetna</Link>
                <Link to="o-nama">O Nama</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/kontakt">Kontakt</Link>
            </nav>
            <Outlet />
            <div>Footer</div>
        </>
    );
};
