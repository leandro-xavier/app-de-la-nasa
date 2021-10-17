import React from 'react'

export const WeatherMars = () => {
    return (
        <>
          <Card className="bg-dark text-white">
            <Card.Img src="holder.js/100px270" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title></Card.Title>
                    <Card.Text></Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
          </Card>   
        </>
    )
}
