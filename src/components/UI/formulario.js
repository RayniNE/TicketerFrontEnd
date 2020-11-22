import styled from '@emotion/styled';

export const Formulario = styled.form`
    margin-top: -50px;

    max-width: 600px;
    width: 95%;
    margin: 5rem auto 0 auto;
    display: block;

    fieldset{
        margin: 2rem 0;
        border: 1px solid #e1e1e1;
        font-size: 2rem;
        padding: 2rem;
    }


`;

export const Campo = styled.div`
    margin-bottom: 2rem;
    align-items: center;
    margin-left: 80px;

    label{
        /* flex: 0 0 150px; */
        display: block;
        font-size: 1.2rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        padding-bottom: 10px;
        

    }

    input{
        display: block;
        width: 80%;
        border: none;
        border-bottom: 1px solid #000000;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    input,
    textarea {
        flex: 1;
        padding: 1rem;
    }

    textarea{
        height: 400px;
    }
`;

export const InputSubmit = styled.input`
    background-color: var(--naranja);
    width: 100%;
    padding: 1.5rem;
    text-align: center;
    color: #FFF;
    font-size: 1.8rem;
    text-transform: uppercase;
    border: none;
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;

    &:hover{
        cursor: pointer;
    }
`;

export const Error = styled.p`
    background-color: red;
    padding: 1rem;
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;
    font-size: 1.4rem;
    color: #FFF;
    text-align: center;
    text-transform: uppercase;
    margin: 2rem 0;
`;
