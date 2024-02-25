import React from 'react';
import "./styles.css";
import NavigationBlock from './NavigationBlock';

const AppHeader = () => {
    return (
        <div className='appHeader'>
            <div className='appName'>
               MOVIE
            </div>
            <NavigationBlock/>
       </div>
    )
}

 export default AppHeader   
