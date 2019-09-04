import React from 'react';
import './Footer.css';

class Footer extends React.Component{
render(){
    return(
        <div className="Footer">
            <a href='https://github.com/palmatthapon/WebReact'>
                <img src={process.env.PUBLIC_URL +'/github-logo.png'} alt='github' width={32} mode='fit'></img>
            </a>
        </div>
    )
}
}
export default Footer