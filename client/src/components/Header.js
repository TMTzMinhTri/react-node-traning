import React from 'react'
import { connect } from "react-redux";

export default connect(mapStateToProps)(class Header extends React.Component {
    renderContext = () => {
        console.log(this.props.auth)
        switch (this.props.auth) {
            case null:
                return
            case false:
                return <li><a href='/auth/google'>Login with gooole</a></li>
            default:
                return <li><a href='/api/logoutuser'>Log Out</a></li>
        }
    }
    render() {

        return (
            <nav>
                <div className='nav-wrapper'>
                    <a className='left brand-logo' href='/'>Tiny Shop</a>
                    <ul className='right'>
                        {this.renderContext()}
                    </ul>
                </div>
            </nav>
        )
    }
})

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}