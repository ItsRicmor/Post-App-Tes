import React from 'react';
import { Left, Right, Body, Header, Title } from 'native-base';
import PropTypes from 'prop-types';



const HeaderContainer = props => {
    const { title = '' } = props; 
    return (
        <Header>
            <Body>
                <Title>{title}</Title>
            </Body>
        </Header>
    )
}

HeaderContainer.prototype = {
    title: PropTypes.string.isRequired
}

export default HeaderContainer;