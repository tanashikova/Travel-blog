import "./topbar.css"

export default function  TopBar() {
    return (
        <div className="topclass">
           <div className="topLeft">
               <i className="topIcon fa-brands fa-instagram-square"></i>
               <i className="topIcon fa-brands fa-twitter-square"></i>
               <i className="topIcon fa-brands fa-pinterest"></i>
               </div>
           <div className="topCenter">
               <ul className="topList">
                   <li className="topListItem ">HOME</li>
                   <li className="topListItem ">ABOUT</li>
                   <li className="topListItem ">CONTACT</li>
                   <li className="topListItem ">WRITE</li>
                   <li className="topListItem ">LOGOUT</li>
               </ul>
               </div>
           <div className="topRight">
               < img className="topImg" src="/images/Snapseed.jpg" alt="profile picture"
               />
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
           </div>

        </div>
    )
}
