import React from 'react';
import Card from 'react-bootstrap/Card';
const Accueil = () => {

    return (
        <section className="section">
            <Card className="my-5 px-4 py-3 mx-auto shadow-sm p-3 mb-5 bg-white rounded" style={{ width: '65rem', textAlign: 'left' }}>

                <Card.Body >
                    <h3 > MOSTAFA DOUAIBI</h3>
                    <br/>
                    <Card.Text>
                    Elève ingénieur en 4éme année Informatique et Réseaux à l'École Marocaine des Sciences d'Ingénieur à Marrakech , je suis passioné par le domaine informatique et surtout le conception et la création d'application multiplatforme qui peuvent étre utile a autruis .
                    </Card.Text>
                    <br/>
                    
                </Card.Body>
            </Card>
           
        </section>
    );
}

export default Accueil;
