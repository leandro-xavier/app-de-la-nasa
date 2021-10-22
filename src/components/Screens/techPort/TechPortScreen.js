import React from 'react';
import {Card} from 'react-bootstrap';
 

export const TechPortScreen = () => {
    return (
        <div>
           <Card className="bg-dark text-white">
                <Card.Img className="img-fluid" src="https://images.firstpost.com/wp-content/uploads/2021/08/screencapture-pbs-twimg-media-E-Cf8xtXoAMAxLq-2021-08-31-14_55_09-1.jpg" alt="Card image" />
                    <Card.ImgOverlay>
                    <Card.Title>Nasa techPort</Card.Title>
                        <Card.Text>Bienvenido a TechPort, el recurso de la NASA para recopilar y compartir información sobre el desarrollo tecnológico financiado por la NASA. Techport permite al público descubrir las tecnologías en las que la NASA trabaja todos los días para explorar el espacio, comprender el universo y mejorar la aeronáutica. La NASA está desarrollando tecnologías en áreas como propulsión, nanotecnología, robótica y salud humana.</Card.Text>
                    </Card.ImgOverlay>
            </Card>
        </div>
    )
}
