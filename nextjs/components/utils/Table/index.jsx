import { ReactNode } from 'react';
import {
    Table as MuiTable,
    TableBody,
    TableCell as MuiTableCell,
    TableContainer,
    TableHead,
    TableRow as MuiTableRow,
    TableContainerProps,
    TableProps,
    TableCellProps,
    TableRowProps,
    TableHeadProps,
    TableBodyProps
} from '@mui/material';



/**
 * 
 * @param {{
 * thead: Array.<ReactNode>,
 * tbody: Array.<Array.<ReactNode>>,
 * TableContainerProps: TableContainerProps,
 * TableProps: TableProps,
 * TableCellProps: TableCellProps,
 * TableRowProps: TableRowProps,
 * TableHeadProps: TableHeadProps,
 * TableBodyProps: TableBodyProps
 * }} props 
 */


const Table = (props) => {

    const { tbody, thead } = props;

    const TableRow = props => <MuiTableRow {...props} {...props.TableRowProps} />
    const TableCell = props => <MuiTableCell {...props} {...props.TableCellProps} />

    return (
        <TableContainer {...props.TableContainerProps}>
            <MuiTable {...props.TableProps}>
                {thead && (
                    <TableHead {...props.TableHeadProps}>
                        <TableRow>
                            {thead.map((th, key) => <TableCell key={key}>{th}</TableCell>)}
                        </TableRow>
                    </TableHead>
                )}
                {tbody && (
                    <TableBody {...props.TableBodyProps}>
                        {tbody.map((tr, trKey) => (
                            <TableRow key={trKey}>
                                {tr.map((tc, tcKey) => <TableCell key={tcKey}>{tc}</TableCell>)}
                            </TableRow>
                        ))}
                    </TableBody>
                )}
            </MuiTable>
        </TableContainer>
    )
}

export default Table;