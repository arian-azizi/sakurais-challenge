import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'

// Components
import Character from '../components/Character';

const HomePage = () => {

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    const checkLogin = () => {
        const token = localStorage.getItem('u');
        
    }

    const getAllCharacterData = async () => {
        setLoading(true);
        const res = await axios.get(`https://brianhong.xyz/sorapi/characters?limit=89`);
        if (res.data) {
            if (res.data.error) {
                alert(res.data.error);
            } else {
                setCharacters(res.data);
            }
            setLoading(false);
        } else {
            alert('Error: API request failed.');
            setLoading(false);
        }
    }

    useEffect(() => {
        getAllCharacterData();
    }, [])

    return (
        <>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <Row>
                    {characters.map(character => (
                        <Col key={character.name} xs={12} sm={12} md={4} lg={3} xl={3}>
                            <Link to={'/character/' + character.CID}>
                                <Character character={character}/>
                            </Link>  
                        </Col>
                    ))}
                </Row>
            )}
        </>
    );
}

export default HomePage;
