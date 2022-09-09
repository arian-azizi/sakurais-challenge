import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Character from '../components/Character';

const CharacterPage = () => {
    
    const cid = match.params.id;
    const [character, setCharacter] = useState();
    const [loading, setLoading] = useState(true);
    
    const getCharacterData = async () => {
        setLoading(true);
        const res = await axios.get(`https://brianhong.xyz/sorapi/characters/${cid}`);
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

  
  
  
  
  
  
  
  
    return (
        <>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <Row>
                    <Col>
                        <Card to={'/character/' + character.CID}>
                            <Card.Img src={Character.thumb}/>
                            <Character character={character}/>
                        </Card>  
                    </Col>
                </Row>
            )}
        </>
  )
}

export default CharacterPage;
