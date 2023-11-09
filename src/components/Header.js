import React from 'react';

const Header = () => {
    const itemHeader = ['Home','About','Profile']
    return (
        <div>
            <ul>
                {
                    itemHeader.map((item) => (<li key={item}>{item}</li>)) 
                }
            </ul>
        </div>
    )
}
    
        


export default Header;
