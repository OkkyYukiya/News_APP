import React from 'react'
import { Box } from '@material-ui/core'
import StockChart from '../containers/StockChart'

const StockPage = () => {
  return (
    <Box display="flex" justifyContent="center">
      <StockChart />
    </Box>
  )
}

export default StockPage
