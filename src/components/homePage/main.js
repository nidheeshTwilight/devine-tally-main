import React from 'react'
import { Card, Col, Row, Container } from 'react-bootstrap'
import Temple from '../images/Temple.png'
import Online from '../images/Personalized-Online-Darshan.jpg'
import Vinayak from '../images/Vinayak.jpg'
import Gallery from '../images/Gallery.jpg'
import TemSid from '../images/temsid.jpg'
import { Button } from 'bootstrap'



function Main() {
    return (
        <div>
            <h1 style={{ padding: '10%' }}>Experience the Grace of Vinayak</h1>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Card style={{ width: '30rem', flex: 1 }}>
                    <Card.Img variant="top" src={Temple} />
                    <Card.Body>
                        <Card.Title style={{ fontSize: "25px" }}>Visit the Temple</Card.Title>
                        <Card.Text>
                            Choose the most convenient time <br></br> for you and book your appointment in the App.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '30rem', flex: 1 }}>
                    <Card.Img style={{ width: '30rem' }} variant="top" src={Vinayak} />
                    <Card.Body>
                        <Card.Title style={{ fontSize: "25px" }}>Live Darshan</Card.Title>
                        <Card.Text>
                            Experience the live Darshan of Shree Siddhivinayak.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '30rem', flex: 1 }}>
                    <Card.Img style={{ width: '30rem' }} variant="top" src={Online} />
                    <Card.Body>
                        <Card.Title style={{ fontSize: "25px" }}>Personalized online darshan</Card.Title>
                        <Card.Text>
                            Book a one-on-one, online,<br /> interactive pooja with a Guruji of the Temple.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <div style={{ display: 'flex', flexDirection: 'row', paddingTop: "5%" }}>
                    <div style={{ flex: 1 }}>
                        <img style={{ height: "100%", width: "90%", marginRight: "10%" }} src={Gallery} />
                    </div>

                    <h1 style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        Our Gallery
                        <p style={{ fontSize: "20px", color: "gray", paddingTop: '3%', textAlign: 'left', letterSpacing: '2px' }} >Browse through our extensive gallery of <br />  high quality images of Shree <br /> Siddhivinayak Ganapati Temple.</p>
                        <button style={{background:"#f7f7f7"}} ><a href="https://www.siddhivinayak.org/gallery/">Browse</a></button>
                    </h1>
                </div>
            </div>
            <div>
                <h1 style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '8%' }}>
                    About the temple

                    <p style={{ fontSize: "20px", color: "gray", paddingTop: '3%', textAlign: 'left', letterSpacing: '2px' }} >The city of Mumbai is a mute witness to places of <br /> worship & historical interest, which are not only popular <br /> but also of archaeological importance.</p>
                    <button style={{background:"#f7f7f7"}} ><a href="https://www.siddhivinayak.org/about-the-temple/" style={{ margin: '-2px' }} >Read More</a></button>
                </h1>

                <div style={{ display: 'flex', flexDirection: 'row', paddingTop: "5%" }}>
                    <div style={{ flex: 1 }}>
                        <img style={{ height: "100%", width: "30%" }} src={TemSid} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main