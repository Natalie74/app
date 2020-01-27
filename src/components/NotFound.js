import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Text = styled.h1`
    color: #333;
`

const NotFound = () => (
    <Wrapper>
        <Text></Text>
        <Link to="/">Вернутся назад</Link>
    </Wrapper>
)

export default NotFound;
