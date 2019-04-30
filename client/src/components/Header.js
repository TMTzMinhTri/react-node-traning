import React from 'react'

export default class Header extends React.Component {
    render() {
        return(
            <nav>
                <div className='nav-wrapper'>
                    <a className ='left brand-logo'>Tiny Shop</a>
                    <ul className='right'>
                        <li><a>Login with google</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}