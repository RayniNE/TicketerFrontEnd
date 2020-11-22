import React, { useState, useEffect, Fragment, useContext } from 'react';
import styled from '@emotion/styled';
import Layout from '../layout/Layout';
import UserContext from '../../context/userContext';
import ReactPaginate from 'react-paginate';
import '../styles/styles.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import plus from '../../images/plus.png';


const Titulo = styled.h1`

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    margin-left: 50px;
    margin-top: 20px;
`;
const Tabla = styled.table`
    margin-left: 50px;
    /* border-spacing: 0; */
    border-collapse: collapse;
    /* border-spacing: 0 1rem; */
    margin-top: 40px;
    width: 90%;
    text-align: left;

    td{

        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        
    }


    th, td{
        padding-left: 50px;
    }

    .btn-primary{
        color: black;
        background: none;
        border-color: #FFFFFF;
    }

    .btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show > .btn-primary.dropdown-toggle {
    color: black;
    background-color: #F0F0F8;
    border-color: white;
}


`;

const HeadRow = styled.tr`

    th{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        padding-bottom: 30px;

    }



`;

const BodyRow = styled.tr`

    background-color: #FFF;
    height: 64px;
    margin-bottom: 10px;

    border: 1px solid #707070;
    border-radius:10px;


    tr:last-child td:first-child {
    border-bottom-left-radius: 10px;
}

    tr:last-child td:last-child {
    border-bottom-right-radius: 10px;
}

`;


const Filter = styled.select`
    position: absolute;
    width: 120px;
    height: 40px;
    right: 350px;
    top: 120px;
    text-align: center;
    /* font-size: 10px; */
    /* -webkit-appearance: none; */
    /* -moz-appearance: none; */
    /* appearance: none; */
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
`;

const Input = styled.input`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    position: absolute;
    width: 180px;
    height: 40px;
    right: 100px;
    top: 120px;
    padding: 10px;

`;

const BotonAgregar = styled.img`

    width: 50px;
    margin-left: 50px;

    :hover{
        cursor: pointer;
    }

`;

const ListadoUsuarios = () => {

    const userContext = useContext(UserContext);
    const { usuarios, obtenerUsuarios, handleDelete} = userContext;
    const [currentPage, setCurrentPage] = useState(0);
    const [filtrado, setFiltrado] = useState("all");
    const [input, setInput] = useState("");


    useEffect(() => {

        obtenerUsuarios()
            // eslint-disable-next-line
    }, [usuarios]);

        
    //Filter
    const handleChange = (e) => {

        setFiltrado(e.target.value);

    }

    const onChange = (e) => {
        setInput(e.target.value);
    }

    //Form
    const onSubmit = (e) => {
        e.preventDefault();
            
    }

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
      }

    const PER_PAGE = 4;

    const offset = currentPage * PER_PAGE;

    let currentPageData = usuarios.slice(offset, offset + PER_PAGE);

    const pageCount = Math.ceil(usuarios.length / PER_PAGE);

    const searchData = (data) => {
        if(filtrado === "filterId" && input.length > 0 && typeof parseInt(input) === "number"){
            const info = data.filter((usuario) => usuario.id === parseInt(input));
            currentPageData = info;
            return currentPageData
        }

        if(filtrado === "user" && input.length > 0){
            const info = data.filter((usuario) => usuario.apellido.toLowerCase().includes(input) || usuario.nombre.toLowerCase().includes(input));
            currentPageData = info;
            console.log(input);
            return currentPageData
        }


        return currentPageData;
    }

    const deleteUser = (id) => {

        handleDelete(id);

    }


    return ( 
        
        <Layout>

                    <Filter
                        onChange={handleChange}
                        value={filtrado}
                    >
                        <option value="all" selected> Todos </option>
                        <option value="filterId"> ID </option>
                        <option value="user"> Usuario </option>
                        {/* <option value="servicio"> Servicio </option> */}
                    </Filter>

                    <form onSubmit={onSubmit}>

                        <Input
                            placeholder="Escriba el id o usuario"
                            type="text"
                            name="input"
                            onChange={onChange}
                        />

                    </form>
                
                <Fragment>

                    <Titulo> Lista de Usuarios </Titulo>
                    <Link to="/usuarios/crearusuario">
                        <BotonAgregar src={plus}/>
                    </Link>
                   
                    {searchData(currentPageData).length > 0 ? (
                        <Tabla>
                            <thead> 
                                
                                <HeadRow className="head">

                                    <th> ID </th>
                                    <th> Nombre </th>
                                    <th> Apellido </th>
                                    <th> Usuario </th>
                                    <th> Contraseña </th>
                                    <th> Rol </th>
                                    <th>  </th>

                                </HeadRow>

                            </thead>

                            <tbody>

                                {searchData(currentPageData).map((usuario) => (

                                    <Fragment>
                                                            
                                        <BodyRow
                                            key={usuario.id}
                                        >

                                            <td> {usuario.id} </td>
                                            <td> {usuario.nombre} </td>
                                            <td> {usuario.apellido} </td>
                                            <td> {usuario.nombreUsuario} </td>
                                            <td> {usuario.contrasena} </td>
                                            <td> {usuario.rol.nombre}</td>
                                            <td> 

                                            <DropdownButton id="dropdown-item-button" title="•••">
                                                <Dropdown.Item as="button"
                                                > <Link to={
                                                    {
                                                        pathname: "/usuarios/editar/:id",
                                                        state: usuario
                                                    }
                                                }> Modificar </Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item as="button" onClick={() => deleteUser(usuario.id)}>Eliminar</Dropdown.Item>
                                            </DropdownButton>
                                            </td>

                                        </BodyRow>

                                        <br/>
                                    </Fragment>


                                ))}
                            </tbody>
                    </Tabla>
                                    
            )  : <Titulo> No hay usuarios </Titulo>}

                        <ReactPaginate
                            previousLabel={"Anterior"}
                            nextLabel={"Siguiente"}
                            breakLabel={"..."}
                            breakClassName={"break-me"}
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick}
                            containerClassName={"pagination"}
                            subContainerClassName={"pages pagination"}
                            activeClassName={"active"}
                        />

                </Fragment>

            
        </Layout>
     );
}
 
export default ListadoUsuarios;