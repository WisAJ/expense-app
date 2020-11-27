import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => ( // this is a componenet, no curley bracket.
    <div>
        <h1>Hello, This is HOC</h1>
        <p>This is info: {props.ioi}</p>
    </div>
);

const withAdminWarning  = (WrappedCompnent)=> { // this is a function.
    return (props) =>(              // the return is the higher order component, HOC.
        <div>
            {props.isAdmin && <p>This is private info, Please dont share!</p> }
            <WrappedCompnent {...props}/>
        </div>
    );
};

const requrieAuthen  = (WrappedCompnent)=> { 
    return (props) =>(
        <div>
        {props.isAuthen ? (
        <WrappedCompnent {...props}/>
        ):(<p>Please log in</p> )
    }
    </div>
);
};
// const Admininfo = withAdminWarning(Info);
const AuthInfo = requrieAuthen(Info);

// ReactDOM.render (<Admininfo isAdmin={true}  ioi='hello , this is from info'/>,document.getElementById('app'));
ReactDOM.render (<AuthInfo isAuthen={true}  ioi='hello , this is from info'/>,document.getElementById('app'));
