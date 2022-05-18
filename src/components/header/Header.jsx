import logo from './../img/logo.png'
import metka from './../img/metka.png'
import korzina from './../img/korzina.png'
// import headerStyle from './../headerStyle.header/Header.module.css'

function Header(){
    return <div className="header">
        <img src={logo} alt="" />
        <div className="menu">
            <a href="\">Products</a>
            <a href="\">Explore</a>
            <a href="\">Shop</a>
        </div>
        <div className="shop">
            <img src={metka} alt="" />
            <a href=""></a>
            <img src={korzina} alt="" />
        </div>
    </div>
}

export default Header