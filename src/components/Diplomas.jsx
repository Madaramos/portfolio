import React from 'react';
import Card from 'react-bootstrap/Card';

function Formations() {
  return (
    <section className="section">
      <Card className="my-4 mx-auto shadow" style={{ width: '60rem', textAlign: 'left' }}>
        <Card.Body>
          <Card.Title>Elève ingénieur en 4éme année d'ingénierie informatique et réseau(4IIR)</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">EMSI</Card.Subtitle>
          <Card.Text>2021 - en cours
          </Card.Text>

        </Card.Body>
      </Card>

      <Card className="my-4 mx-auto shadow" style={{ width: '60rem', textAlign: 'left' }}>
        <Card.Body>
          <Card.Title>DUT</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Ecole de Sciences et de Technologies Safi (ESTS)</Card.Subtitle>
          <Card.Text>2019 - 2021
          </Card.Text>

        </Card.Body>
      </Card>
      <Card className="my-4 mx-auto shadow" style={{ width: '60rem', textAlign: 'left' }}>
        <Card.Body>
          <Card.Title>Baccalauréat sciences Physique-Chimie mention très bien </Card.Title>
          <Card.Subtitle className="mb-2 text-muted"> Lycée Les Champions</Card.Subtitle>
          <Card.Text>2019
          </Card.Text>

        </Card.Body>
      </Card>
    </section>
  );
}

export default Formations;