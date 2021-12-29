import React from 'react';

import { connect } from 'react-redux';
import { actions } from '../../redux/actions/action';

export function ContactUs(props) {

    return (
        <h1>CONTACT US PAGE</h1>

    );
}
const mapStateToProps = (state) => {
    return {

    };
}

const mapDispatchToProps = (dispatch) => ({


})
export default connect(mapStateToProps, mapDispatchToProps)(ContactUs)