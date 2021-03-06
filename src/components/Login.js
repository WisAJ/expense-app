import React from 'react';
import {connect} from "react-redux";
import {startLogin} from '../actions/auth';

export const LoginPage = ({startLogin}) =>( 
    <div className='box-layout'> 
    <div className='box-layout__box'>
        <h1 className='box-layout__title'> Expenses App</h1>
        <p className='box-layout__p'>Beware of little expenses. A small leak will sink a great ship. </p>
    <button className='box-layout__button' onClick={startLogin}> Login with google </button> 
    </div> 
       
    </div>
);

const mapDispatchToProps = (dispatch)=> ({
    startLogin: () => dispatch(startLogin())
});

export default connect (undefined, mapDispatchToProps)(LoginPage);