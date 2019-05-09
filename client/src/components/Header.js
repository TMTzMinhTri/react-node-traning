import React from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import Payment from './Payment'
export default connect(mapStateToProps, null)(class Header extends React.Component {
    renderContext = () => {
        console.log(this.props.auth)
        switch (this.props.auth) {
            case null:
                return
            case false:
                return <li><a href='/auth/google'>Log in with gooole</a></li>
            default:
                return [
                    <li key='1'><Payment /></li>,
                    <li key='3' style={{margin: "0 10px"}}>
                        Credits: {this.props.auth.credits}</li>,
                    <li key='2'><a href='/api/logoutuser'>Log Out</a></li>]
        }
    }
    render() {
        return (
            <nav>
                <div className='nav-wrapper'>
                    <Link
                        className='left brand-logo'
                        to={this.props.auth ? '/surveys' : '/'}
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