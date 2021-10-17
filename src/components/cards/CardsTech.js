import React, { useEffect, useState } from 'react';
import {Card, CardGroup} from 'react-bootstrap'

export const CardsTech = () => {

const [patent, setPatent] = useState([])

useEffect(() => {
    getTransfer()
}, [])

const getTransfer = async () => {
    const url = "https://api.nasa.gov/techtransfer/patent/?engine&api_key=igKW8FBNnNkVCVTUMic9RgoIC5sMLLTPwFP1i0ZH"
    const response = await fetch(url);
    const {results} = await response.json()
    const data = results.slice(0,10)
    console.log(data);
  setPatent(data)
}




    return (
        <div>
            <CardGroup>
            {
            patent.map(res => (
                <Card key={res[0]}>
                    <Card.Img variant="top" src={res[10]}/>
                        <Card.Body>
                            <Card.Title>Nombre: {res[1]}</Card.Title>
                            <Card.Text>Descripción:{res[3]}</Card.Text>
                        </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            )
            )
            }
            </CardGroup>
        </div>
    )
}
