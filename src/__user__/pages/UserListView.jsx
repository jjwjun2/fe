import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import axios from 'axios'
// import { MemoryRouter, Route } from 'react-router';
// import { Link } from 'react-router-dom';
// import Pagination from '@material-ui/lab/Pagination';
// import PaginationItem from '@material-ui/lab/PaginationItem';
// import { useTable } from 'react-table';



const usesStyles = makeStyles({
    table: {
        minWidth: 650,

    }
})

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}



const UserListView = () => {
    const [users, setUsers] = useState([])
    const classes = usesStyles()
    useEffect(() => {
        axios.get('http://localhost:8080/usr/all',).then(({ data }) => {
            setUsers(data)
        }).catch(err => {
            alert(`Error`)
            throw err
        })
    }, [])
    return (
        <>
            <div className="same-style header-search d-none d-lg-block">
               
                {/* <tr> */}
                {/* <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Age</th> */}
                {/* </tr> */}
                나이
                <tr>        
                    <td>
                        <input type="text" id="fname" name="fname" />
                    </td>
                    <td>
                        <input type="text" id="fname" name="fname" />
                    </td>
                </tr>
                <br/>

                성별
                <tr>        
                    <td>
                        <input type="text" id="fname" name="fname" />
                    </td>        
                </tr>
                <br/>

                지역
                <tr>        
                    <td>
                        <input type="text" id="fname" name="fname" />
                    </td>        
                </tr>
                <br/>


                <div className="sidebar-widget">
                    <h4 className="pro-sidebar-title"> </h4>
                    <div className="pro-sidebar-search mb-50 mt-25">
                        <form className="pro-sidebar-search-form" action="#">
                            <input type="text" placeholder="Search here..." />
                            <button  >
                                <i className="pe-7s-search" />
                            </button>
                        </form>
                    </div>
                </div>
                
                <form action="/action_page.php">
                    <label for="fname">성별:</label>
                    <input type="text" id="fname" name="fname" /><br /><br />
                    <label for="lname">Last name:</label>
                    <input type="text" id="lname" name="lname" /><br /><br />
                    <input type="submit" value="Submit" />
                </form>
                <tr>
                    <td>Gender</td>
                    <td>Man(%)</td>
                    <td>Woman(%)</td>
                </tr>
                <tr>
                    <td>10대(%){ } </td>
                    <td>30대(%)</td>
                    <td>40대(%)</td>
                    <td>50대(%)</td>

                    <td>60대(%)</td>
                    <td>70대(%)</td>
                </tr>
                <tr>
                    <td>가장많이 이용한 연령대= { }</td>
                    <td>가장 많이 이용한 시간대= { }</td>
                    <td>가장 많이 주문한 지역</td>
                </tr>

                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>80</td>
                </tr>
            </div>
            <TableContainer className={classes.root}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">No</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Id</TableCell>
                            <TableCell align="center">Gender</TableCell>
                            <TableCell align="center">Age</TableCell>
                            <TableCell align="center">Phone</TableCell>
                            <TableCell align="center">Nickname</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">City</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users ? users.map(i => (
                            <TableRow key={i.usrNo}>
                                <TableCell align="center" component="th" scope="row"> {i.usrNo} </TableCell>
                                <TableCell align="center" component="th" scope="row" > <button onClick="activateLasers()" Link to=""> {i.usrName}</button> </TableCell>
                                <TableCell align="center" component="th" scope="row"> {i.username} </TableCell>
                                <TableCell align="center" component="th" scope="row"> {i.usrGender} </TableCell>
                                <TableCell align="center" component="th" scope="row"> {i.usrAge} </TableCell>
                                <TableCell align="center" component="th" scope="row"> {i.usrPhone} </TableCell>
                                <TableCell align="center" component="th" scope="row"> {i.usrNickname} </TableCell>
                                <TableCell align="center" component="th" scope="row"> {i.usrEmail} </TableCell>
                                <TableCell align="center" component="th" scope="row"> {i.usrAddr} </TableCell>
                            </TableRow>
                        )) : 'err'}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
export default UserListView