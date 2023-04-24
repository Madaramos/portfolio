import React from 'react';
import Card from 'react-bootstrap/Card';


function Formations() {
    return (
        <section className="section">
             <Card className="my-4 mx-auto shadow" style={{ width: '60rem', textAlign: 'left' }}>
                <Card.Body>
                    <Card.Title>Stage</Card.Title>
                    <Card.Text><strong>Lieu : </strong> Safi
                    </Card.Text>
                    <Card.Text><strong>Nom de l'entreprise ou organisation : </strong> OCP Safi
                    </Card.Text>
                    <Card.Text><strong>Date : </strong> Juillet 2022 - Aout 2022
                    </Card.Text>
                    <Card.Text><strong>Mission : </strong> La réalisation d'une application Web qui permet la gestion des emprunts d'EPI a l'aide de php native.
                    </Card.Text>

                </Card.Body>
            </Card>

            <Card className="my-4 mx-auto shadow" style={{ width: '60rem', textAlign: 'left' }}>
                <Card.Body>
                    <Card.Title>Stage </Card.Title>
                    <Card.Text><strong>Lieu : </strong> Safi 
                    </Card.Text>
                    <Card.Text><strong>Nom de l'entreprise ou organisation : </strong> Province Safi
                    </Card.Text>
                    <Card.Text><strong>Date : </strong> Mai 2021 - Juin 2021
                    </Card.Text>
                    <Card.Text><strong>Mission : </strong> La conception et la réalisation d'une application web de gestion des Infractions(les outils et langages utilisées : PHP(native),CSS(Bootstrap),HTML5,JavaScript,SQL) .
                    </Card.Text>

                </Card.Body>
            </Card>

           

        </section>
    );
}

export default Formations;