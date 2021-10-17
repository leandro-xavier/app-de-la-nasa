import React, { useEffect, useState} from 'react'
import {Card} from 'react-bootstrap'

export const CardNasa = () => {
const [isLoaded, setIsLoaded] = useState(false)
const [items, setItems] = useState([])



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
        <Card className="bg-dark text-white">
            <Card.Img style={{width:"100%", height:"600px"}} src={items.hdurl} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title style={{color:"white", backgroundColor:"black", width:"150px", borderRadius:"10px", textAlign:"center"}}>Imagen Diaria</Card.Title>
                    <Card.Text style={{color:"white", backgroundColor:"black",  width:"100%", borderRadius:"10px",  textAlign:"center"}}>{items.explanation}</Card.Text>
                    <Card.Text style={{color:"white", backgroundColor:"black",  width:"100px", borderRadius:"10px",  textAlign:"center"}}>{items.date}</Card.Text>
                </Card.ImgOverlay>
        </Card>        
        </>
    )
}
