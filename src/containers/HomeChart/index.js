import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import Chart from './Chart'
import SideAd from '../../apis/Adsense/SideAd'
import SideTopAd from '../../apis/Adsense/SideTopAd'
import { Box } from '@material-ui/core'
import { HomeChartURL } from '../../apis/fmpcloud'

const HomeChart = () => {
  const [histrical, setHistorical] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const url = HomeChartURL()
      const response = await fetch(url)
      const body = await response.json()
      const reversed = await body.historicalStockList.map((d) => {
        const arrays = d.historical
        const reversedArr = arrays.reverse()
        console.log('arr', reversedArr)
        return { symbol: d.symbol, his: reversedArr }
      })
      console.log('reversed', reversed)
      setHistorical(reversed)
    }

    fetchData()
    // eslint-disable-next-line
  }, [])

  return (
    <React.Fragment>
      <Box my={0.3} textAlign="center" px={2} className={styles.root}>
        <SideTopAd />
        {histrical?.map((data) => {
          return (
            <Chart
              key={data.symbol}
              percent={data.his[0]?.changePercent}
              currentPrice={data.his[0]?.close}
              symbol={data.symbol}
              historical={data.his}
            />
          )
        })}
        {histrical && <SideAd />}
      </Box>
    </React.Fragment>
  )
}

export default HomeChart
