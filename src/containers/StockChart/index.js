import React, { useEffect, useState } from 'react'
import styles from './StockChart.module.scss'
import SearchIcon from '@material-ui/icons/Search'
import StockTable from './StockTable'
import { Box, Button, TextField, ButtonGroup } from '@material-ui/core'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { StockNews } from './StockNews'
import { adjNumbur } from '../../utils/adjPrice'
import { CHARTURL } from '../../apis/fmpcloud'

const StockChart = () => {
  const [isData, setData] = useState([])
  const [isSymbol, setSymbol] = useState('AAPL')
  const [onChangeSymbol, setChangeSymbol] = useState('')
  const [isInfo, setInfo] = useState({
    changePercent: null,
    close: null,
    vol: null,
  })

  const url = CHARTURL(isSymbol)
  const handleSymbol = (e) => {
    e.preventDefault()
    try {
      setSymbol(onChangeSymbol)
    } catch {
      alert('Try Again')
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url)
      const body = await res.json()
      const reda = body.historical.reverse()
      const isStockInfo = reda[reda.length - 1]
      setData(reda)
      setInfo({
        changePercent: isStockInfo.changePercent,
        close: isStockInfo.close,
        vol: isStockInfo.volume,
      })
    }
    fetchData()
    // eslint-disable-next-line
  }, [isSymbol])
  return (
    <Box
      className={styles.root}
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt={4}
    >
      <Box my={2} display="flex" flexWrap="wrap">
        <ButtonGroup className={styles.bg} variant="contained">
          <Button className={styles.btn} onClick={() => setSymbol('AAPL')}>
            AAPL
          </Button>
          <Button className={styles.btn} onClick={() => setSymbol('MSFT')}>
            MSFT
          </Button>
          <Button className={styles.btn} onClick={() => setSymbol('AMZN')}>
            AMZN
          </Button>
          <Button className={styles.btn} onClick={() => setSymbol('FB')}>
            FB
          </Button>
          <Button className={styles.btn} onClick={() => setSymbol('GOOGL')}>
            GOOGL
          </Button>
        </ButtonGroup>
        <form onSubmit={handleSymbol} noValidate autoComplete="off">
          <TextField
            variant="outlined"
            id="standard-basic"
            label="input symbol"
            value={onChangeSymbol}
            onChange={(e) => setChangeSymbol(e.target.value)}
          />
          <Button type="onSubmit" className={styles.button}>
            <SearchIcon fontSize="large" />
          </Button>
        </form>
      </Box>
      <StockTable
        symbol={isSymbol}
        price={isInfo.close}
        percent={isInfo.changePercent}
        volume={adjNumbur(isInfo.vol)}
      />

      <ResponsiveContainer width="100%" height={250}>
        <AreaChart
          className={styles.chart}
          width="100%"
          height={250}
          data={isData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="label" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="low"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="close"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
      <StockNews symbol={isSymbol} />
    </Box>
  )
}

export default StockChart
