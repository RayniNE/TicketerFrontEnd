import React, { useState, useEffect, Fragment, useContext } from 'react';
import styled from '@emotion/styled';
import Layout from './layout/Layout';
import TicketContext from '../context/tickets/ticketContext';
import ReactPaginate from 'react-paginate';
import styles from './styles/styles.css';


const Titulo = styled.h1`

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    margin-left: 50px;
`;

const Tabla = styled.table`
    margin-left: 50px;
    /* border-spacing: 0; */
    border-collapse: collapse;

    width: 80%;
    text-align: left;

    td{

        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        
    }


    th, td{
        padding-left: 30px;
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

const ListadoTickets = () => {

    const ticketContext = useContext(TicketContext);
    const { tickets, obtenerTickets} = ticketContext;
    // console.log(usuarios);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {

        obtenerTickets()

    }, []);

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
      }

    const PER_PAGE = 1;

    const offset = currentPage * PER_PAGE;

    const currentPageData = tickets.slice(offset, offset + PER_PAGE);

    const pageCount = Math.ceil(tickets.length / PER_PAGE);


    // if(slice.length == 0){
    //     return (
    //         <p> Cargando... </p>
    //     )
    // }


    return ( 
        
        <Layout>

            {
                
                currentPageData.length > 0 ? (
                <Fragment>
                    <Titulo> Lista de Tickets </Titulo>

                    <select>
                        <option value="filterId"> ID </option>
                        <option value="usuario"> Usuario </option>
                        <option value="servicio"> Servicio </option>
                    </select>
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

                            {currentPageData.map((ticket) => (

                                <Fragment>
                                                        
                                    <BodyRow>

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

                                        <MeatballMenu></MeatballMenu>
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
                
            )  : <Titulo> No hay usuarios </Titulo>
            }

            
        </Layout>
     );
}
 
export default ListadoTickets;