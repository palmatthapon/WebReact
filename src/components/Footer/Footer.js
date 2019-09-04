import React from 'react';
import './Footer.css';

class Footer extends React.Component{
render(){
    return(
        <div className="Footer">
            <h1>footer</h1>
            <image src={process.env.PUBLIC_URL +'/github-logo.png'} alt='github' width={500} mode='fit'></image>
        </div>
    )
}
}
export default Footer