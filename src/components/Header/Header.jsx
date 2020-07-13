import React from 'react';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom'

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://cdn.shopifycloud.com/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png" alt=""/>
            
                {/* test credentials for github and testing */}
                <div className="testCredBlock">
                    <p><b>Use this email and password for test app</b></p>
                    <p>Email: free@samuraijs.com</p>
                    <p>Password: free</p>
                </div>
                {/*END test credentials for github and testing */}

            <div className={s.login_block}>
                { props.isAuth 
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                    : <NavLink to={'/login'}>Login</NavLink> }
                
            </div>
        </header>
    );
}

export default Header;