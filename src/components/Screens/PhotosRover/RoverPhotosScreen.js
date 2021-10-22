import React from 'react';
import {Card} from 'react-bootstrap';


export const RoverPhotosScreen = () => {
    return (
        <div>
            <Card className="bg-dark text-white">
  <Card.Img src="https://imagenes.elpais.com/resizer/5CmeqDr3esg-oQIMgXVsf_ssl-g=/1960x0/ep01.epimg.net/elpais/imagenes/2019/01/30/ciencia/1548847855_001045_1550085482_noticia_fotograma.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Fotos y videos de rover en marte</Card.Title>
    <Card.Text>
     datos recopilados por los robots enviados a marte por la nasa
    </Card.Text>
    
  </Card.ImgOverlay>
</Card>
        </div>
    )
}
