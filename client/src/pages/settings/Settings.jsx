import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdate">Update Your Account</span>
                    <span className="settingsDelete">Delete Your Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile picture</label>
                    <div className="settingsPP">
                        <img className="settingsImg" src="/Images/ShibuyaCrossing.jpg" alt=""/>
                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-solid fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Dina the explorer"/>
                    <label>Email</label>
                    <input type="text" placeholder="dina@gmail.com"/>
                    <label>Password </label>
                    <input type="password" /> 
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            
            <Sidebar/>
        </div>
    )
}
