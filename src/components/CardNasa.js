import React, { useEffect, useState, useRef } from 'react'
import {Card, Button, Row, Col, Overlay} from 'react-bootstrap'

export const CardNasa = () => {
const [isLoaded, setIsLoaded] = useState(false)
const [items, setItems] = useState([])
const [show, setShow] = useState(false)
const target = useRef(null)


//NASA API KEY = igKW8FBNnNkVCVTUMic9RgoIC5sMLLTPwFP1i0ZH

 useEffect(() => {
fetch(`https://api.nasa.gov/planetary/apod?api_key=igKW8FBNnNkVCVTUMic9RgoIC5sMLLTPwFP1i0ZH`)
.then(res => res.json())
.then(
    (result) => {
        setIsLoaded(true)
        setItems(result)
     }
    )
},[])      
console.log(isLoaded);
     
    return (
        <>
        <Row xs={1} md={2} className="g-4">
            <Col className="mt-5">
                <Card style={{width: '19rem'}}>
                    <Card.Img variant="top" src={items.hdurl} />
                    <Card.Body>
                        <Card.Title><h2>Titulo</h2>{items.title}</Card.Title>
                        <Button variant="danger" ref={target} onClick={() => setShow(!show)}>ver descripcion</Button>
                        <Overlay target={target.current} show={show} placement="right">
                            {({placement, arrowProps, show: _show, popper, }) => (
                                <div>
                                    
                                    <Card.Text ><h3>Descripcion</h3>{items.explanation}</Card.Text>
                                </div>
                            )}
                        </Overlay>
                        <Card.Footer><h4>Fecha:</h4>{items.date}</Card.Footer>
                              
                              
                    </Card.Body>
                </Card>  
            </Col>
       
        </Row>
                
        </>
    )
}
