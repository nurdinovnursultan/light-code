import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch } from 'react-redux';
import { getUsers } from '../redux/action';
import { useSelector } from 'react-redux';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const CustomizedTable = ({ currentData }) => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    const changeTableColumn = (item) => {
        if (currentData.data === "phone") {
            return item.phone
        } else if (currentData.data === "address") {
            return item.address
        } else if (currentData.data === "email") {
            return item.email
        } else if (currentData.data === "salary") {
            return item.salary
        }
    }

    return (
        <div className="table">
            <div className="container">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>№</StyledTableCell>
                                <StyledTableCell>Name</StyledTableCell>
                                <StyledTableCell align="left">Age</StyledTableCell>
                                <StyledTableCell align="center">{currentData.name}</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                users.map(item => (
                                    <StyledTableRow key={item.id}>
                                        <StyledTableCell>{item.id}</StyledTableCell>
                                        <StyledTableCell component="th" scope="row">
                                            {item.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{item.age}</StyledTableCell>
                                        <StyledTableCell align="center">{changeTableColumn(item)}</StyledTableCell>
                                    </StyledTableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default CustomizedTable;