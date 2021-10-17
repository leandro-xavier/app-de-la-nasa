import React from 'react';
import {Card} from 'react-bootstrap'
import {Navigation} from "../../../components/Navigation";
import { CardsTech } from '../../cards/CardsTech';

export const TechTransferScreen = () => {
    return (
        <div>
            <Navigation/>
                <Card className="bg-dark text-white">
                    <Card.Img style={{width:"100%", heigth:"500px"}} src="https://media-exp1.licdn.com/dms/image/C511BAQE4oK7_8IUi5Q/company-background_10000/0/1519803278872?e=2159024400&v=beta&t=NAHAf6rF7k31ws6Y_D0JSNyoxsLAM5yzt_GPpcU4jvU" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title style={{marginTop:"150px"}}>Tech Transfer</Card.Title>
                                <Card.Text>El Programa de Transferencia de Tecnología de la NASA asegura que las innovaciones desarrolladas para exploración y descubrimiento estén ampliamente disponibles para el público. La cartera de patentes de la NASA está disponible para beneficiar a los ciudadanos estadounidenses. A través de asociaciones y acuerdos de licencia con la industria, estas patentes aseguran que las inversiones de la NASA en investigación pionera encuentren usos secundarios que beneficien a la economía, creen empleos y mejoren la calidad de vida. Este punto final proporciona acceso de desarrollador estructurado y con capacidad de búsqueda a las patentes, el software y las descripciones derivadas de tecnología de la NASA que se han seleccionado para respaldar la transferencia de tecnología.</Card.Text>
                        </Card.ImgOverlay>
                </Card>
                
                <CardsTech/>
        </div>
    )
}
