import styled from '@emotion/styled';

const Boton = styled.button`
    /* display: block; */
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    border: 1px solid ;
    padding: .8rem 2rem;
    margin: 2rem auto;
    text-align: center;
    background-color: #FFF;
    display: inline-block;
    right: 0;
    left: 0;

    a {
        color: #007bff;
        text-decoration: none;
        background-color: transparent;
    }   


    &:last-of-type{
        margin-right: 0;
    }

    &:hover{
        cursor: pointer;
    }
`;

export default Boton;