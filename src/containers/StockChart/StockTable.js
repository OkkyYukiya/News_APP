import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  container: {
    maxWidth: 670,
    marginTop: 4,
  },
})

export default function BasicTable({ price, symbol, percent, volume }) {
  const classes = useStyles()

  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Symbol</TableCell>
            <TableCell align="right">Price($)</TableCell>
            <TableCell align="right">Change(%)</TableCell>
            <TableCell align="right">volume(k)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th">{symbol}</TableCell>
            <TableCell align="right">{price ? price : 120}</TableCell>
            <TableCell align="right">{percent}</TableCell>
            <TableCell align="right">{volume}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
