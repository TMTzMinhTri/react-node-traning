import React, { Component } from "react";

import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Payment extends Component {
    render() {
        return (
            <StripeCheckout
                name='Tiny Shop'
                description='Eu dolore quis ea consequat officia deserunt qui sint magna.'
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className='btn'>
                    Add Credits
                </button>
            </StripeCheckout>
        )
    }
}
export default connect(null,actions)(Payment)