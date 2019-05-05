import React from 'react'
import { connect } from "react-redux";
import {Link} from 'react-router-dom'

export default connect(mapStateToProps)(class Header extends React.Component {
    renderContext = () => {
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
                    <Link 
                        className='left brand-logo' 
                        to= {this.props.auth ? '/surveys' : '/'}
                    >
                    Tiny Shop
                    </Link>
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