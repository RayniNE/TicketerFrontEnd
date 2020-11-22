import React, { useState, useEffect, Fragment, useContext } from 'react';
import styled from '@emotion/styled';
import Layout from './layout/Layout';
import TicketContext from '../context/tickets/ticketContext';
import ReactPaginate from 'react-paginate';
import styles from './styles/styles.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
// import 'bootstrap/dist/css/bootstrap.min.css';

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
    margin-top: 80px;
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
    margin-bottom: 20px;
    /* border: 1px solid black; */
    /* border-radius: 20px; */
    border: 1px solid #707070;
    -moz-border-radius:10px;
    -webkit-border-radius:10px;
    border-radius:10px;
    /* display: flex; */

    /* div{
        td{

            font-family: 'Roboto', sans-serif;
            font-weight: 300;
            padding-left: 30px;

        }
    } */

    /* td{
        margin-bottom: 50px
    } */

    tr:last-child td:first-child {
    border-bottom-left-radius: 10px;
}

    tr:last-child td:last-child {
    border-bottom-right-radius: 10px;
}

`;

const MeatballMenu = styled.div`

        :after {
            
            content: '•••';
            font-size: 30px;
        }

        :hover{
            cursor: pointer;
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

const ListadoTickets = () => {

    const ticketContext = useContext(TicketContext);
    const { tickets, obtenerTickets } = ticketContext;
    const [currentPage, setCurrentPage] = useState(0);
    const [filtrado, setFiltrado] = useState("all");
    const [input, setInput] = useState("");


    useEffect(() => {

        const obtenerCurrentTickets = () => {
            obtenerTickets();
            // setCurrentTickets(tickets);
        }
        
        obtenerCurrentTickets();
    }, []);


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


    //Manejar la paginacion

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
      }

    const PER_PAGE = 1;

    const offset = currentPage * PER_PAGE;
    // setCurrentPageData(tickets.slice(offset, offset + PER_PAGE));
    let currentPageData = tickets.slice(offset, offset + PER_PAGE);

    const pageCount = Math.ceil(tickets.length / PER_PAGE);

    const searchData = (data) => {
        if(filtrado === "filterId" && input.length > 0 && typeof parseInt(input) === "number"){
            const info = data.filter((ticket) => ticket.id === parseInt(input));
            currentPageData = info;
            return currentPageData
        }
 
        if(filtrado === "user" && input.length > 0){
            const info = data.filter((ticket) => ticket.usuario.apellido.toLowerCase().includes(input) || ticket.usuario.nombre.toLowerCase().includes(input));
            currentPageData = info;
            return currentPageData
        }


        return currentPageData;
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

            {
                
                searchData(currentPageData).length > 0 ? (
                <Fragment>


                        <Titulo> Lista de Tickets </Titulo>
                        <Tabla>
                            <thead> 
                                
                                <HeadRow className="head">

                                    <th> Solicitado por </th>
                                    <th> Ticket ID </th>
                                    <th> Asignado </th>
                                    <th> Prioridad </th>
                                    <th> Estado </th>
                                    <th> Creación </th>
                                    <th>  </th>

                                </HeadRow>

                            </thead>

                            <tbody>

                                {searchData(currentPageData).map((ticket) => (

                                    <Fragment>
                                                            
                                        <BodyRow
                                            key={ticket.id}
                                        >

                                            {/* <div>
                                                <td> {usuario.id} </td>
                                            </div>

                                            <div>
                                                <td> {usuario.nombre} </td>
                                            </div>

                                            <div>
                                                <td> {usuario.apellido} </td>
                                            </div>

                                            <div>
                                                <td> {usuario.nombreUsuario} </td>
                                            </div>

                                            <div>
                                                <td> 12345</td>
                                            </div>

                                            <div>
                                                <td> {usuario.rol.nombre}</td>
                                            </div>

                                            <div>
                                            <td> 

                                                <MeatballMenu></MeatballMenu>
                                            </td>
                                            </div> */}
                                            <td> Lisandra Cruz </td>
                                            <td> {ticket.id} </td>
                                            <td> {ticket.usuario.nombre} {ticket.usuario.apellido}</td>
                                            <td> {ticket.prioridad.nombre} </td>
                                            <td> {ticket.ticketStatus.nombre}</td>
                                            <td> {ticket.fechaCreacion} </td>
                                            <td> 

                                            {/* <MeatballMenu></MeatballMenu> */}
                                            <DropdownButton id="dropdown-item-button" title="•••">
                                                <Dropdown.Item as="button">Modificar</Dropdown.Item>
                                                <Dropdown.Item as="button">Eliminar</Dropdown.Item>
                                            </DropdownButton>
                                            </td>

                                        </BodyRow>

                                        <br/>
                                    </Fragment>


                                ))}
                            </tbody>
                        </Tabla>

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
                
            )  : <Titulo> Cargando... </Titulo>
            }
            

            
        </Layout>
     );
}
 
export default ListadoTickets;