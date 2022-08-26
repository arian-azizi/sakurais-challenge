import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';

//Components
import Character from '../components/Character';

const Homepage = () => {

    const [character, setCharacter] = useState([]);
    const [loading, setLoading] = useState(true);

    const getCharacterList = async () => {
        let characterArray = [];
        for(let i = 1; i <= 89; i++){
            characterArray.push(await getCharacterData(i));
        }
        console.log(characterArray);
        setCharacter(characterArray);
        setLoading(false);
    }

    const getCharacterData = async () => {
        const res = await axios.get(`brianhong.xyz/sorapi/characters/cid`);
        return res;
    }

    useEffect(() => {
        getCharacterList();
    }, [])

    return (
        <>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <Row>
                    {character.map(cid => (
                        <Col key={cid.data.name} xs={12} sm={12} md={4} lg={3} xl={3}>
                            <button><Character character={cid.data}/></button>
                        </Col>
                    ))}
                </Row>
            )}
        </>
    );
}

export default Homepage;


document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('button').forEach(function(button) {
        button.onClick = function() {
            document.querySelector('#main').img.src = button.dataset.img;
        }
    });
});