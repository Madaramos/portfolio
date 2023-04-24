import React from 'react';
import img from '../img/img.jpg';
const Header = () => {
    return (
        <section >
            
            <header className="header">
                <img src={img} alt="profil picture" className="rounded-circle mt-3 me-3" style={{ width: 200, height: 200 }} />
                <h1>Mostafa DOUAIBI</h1>
                <h2>ÉLÈVE INGÉNIEUR</h2>           
            </header>

<br/>
        </section>
    );
}

export default Header;