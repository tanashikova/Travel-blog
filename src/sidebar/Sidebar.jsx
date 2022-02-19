import "./sidebar.css"

export default function Sidebar() {
    return (
            <div className="sidebar">
                <div className="sidebarItem">
                    <span className="sidebarTitle">ABOUT ME</span>
                    <div >
                    <img className="sidebarImg" src="/images/kyotoTower.jpg" alt=""/>
                    </div>
                    <p>Hi, I am Dina, a girl from Central Asia who loves traveling </p>
                </div>
                <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Countries</li>
                    <li className="sidebarListItem">Halal food</li>
                    <li className="sidebarListItem">Shopping</li>
                    <li className="sidebarListItem">Best Deals</li>
                </ul>
                </div>
                <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-instagram-square"></i>
                    <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                    <i className="sidebarIcon fa-brands fa-pinterest"></i>
                </div>
                 
                </div>
            </div>
    )
}
