import React from 'react'
import styled from 'styled-components'

const Card = () => {
    const Container = styled.div`
        height: 400px;
        width: 350px;
        border: 1px solid black;
        border-radius: 5px;
        padding: 20px;
    `
    const ImageContainer = styled.div`
        height: 50%;
        width: 100%;
        background-color: gray;
        margin-bottom: 15px;
    `
    const CardBody = styled.div`
        height: 45%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    `
    const Title = styled.div`
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 15px;
    `
    const ButtonContainer = styled.div`
        display: flex;
        width: 100%;
        justify-content: space-between;
    `
    const Button = styled.button`
        padding: 4px 6px;
        border-radius: 12px;
        border: 4px solid black;
    `

    return (
        <Container>
            <ImageContainer />
            <CardBody>
                <div>
                    <Title>Thanks Nick</Title>
                    <div>Thank you for being a frienddddd oohohohohoh</div>
                </div>
                <ButtonContainer>
                    <Button>Join</Button>
                    <Button>Read More</Button>
                </ButtonContainer>
            </CardBody>
        </Container>
    )
}


export default Card