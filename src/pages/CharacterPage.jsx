import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Card, Badge, Accordion } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

import Character from '../components/Character';
import Medal_Score from '../components/Medal_Score';

const CharacterPage = () => {
    
    const { cid } = useParams();
    const [character, setCharacter] = useState();
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('u');
    
    const getCharacterData = async () => {
        setLoading(true);
        const res = await axios.get(`https://brianhong.xyz/sorapi/characters/${cid}/${token}`);
        if (res.data) {
            if (res.data.error) {
                alert(res.data.error);
            } else {
                setCharacter(res.data);
            }
            setLoading(false);
        } else {
            alert('Error: API request failed.');
            setLoading(false);
        }
    }

    useEffect(() => {
        getCharacterData();
    }, [])
  
  
    return (
        <>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Character character={character}/>
                            </Card.Body>
                        </Card>  
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>{character.name} <Badge bg="secondary">Incomplete</Badge> </Card.Title>
                                <Card.Text>
                                    {character.desc}
                                </Card.Text>
                                <Card.Footer>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Related Characters</Accordion.Header>
                                            <Accordion.Body>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                        <Medal_Score/>
                    </Col>
                </Row>
            )}
        </>
  )
}

export default CharacterPage;
