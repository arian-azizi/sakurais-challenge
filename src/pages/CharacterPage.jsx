import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

import Character from '../components/Character';

const CharacterPage = () => {
    
    const { cid } = useParams();
    const [character, setCharacter] = useState();
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('u');
    
    const getCharacterData = async () => {
        setLoading(true);
        const res = await axios.post(`https://brianhong.xyz/sorapi/characters/${cid}/${token}`);
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
                            <Link to={'/character/' + character.CID}>
                                <Card.Body>
                                    <Character character={character}/>
                                </Card.Body>
                            </Link>
                        </Card>  
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                {character.bronzeConditions}
                                <form>
                                    <input type="checkbox"/>
                                </form>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                {character.silverConditions}
                                <form>
                                    <input type="checkbox" disabled/>
                                </form>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                {character.goldConditions}
                                <form>
                                    <input type="checkbox" disabled/>
                                </form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            )}
        </>
  )
}

export default CharacterPage;
