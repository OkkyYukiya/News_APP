import React, { useEffect, useState } from 'react'
import styles from './StockNews.module.scss'
import { Box } from '@material-ui/core'
import { FMP_CLOUD_API_KEY } from '../../apis/apiKeys'
import { NewsCard } from '../../components/Card'
import { formatDate } from '../../apis/rapidApi'

export const StockNews = ({ symbol }) => {
  const [isData, setData] = useState([])
  const url = `https://fmpcloud.io/api/v3/stock_news?tickers=${symbol}&limit=20&apikey=${FMP_CLOUD_API_KEY}`
  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(url)
      const body = await res.json()
      setData(body)
    }
    fetchNews()
    // eslint-disable-next-line
  }, [symbol])
  return (
    <Box mx={1} className={styles.root}>
      {isData?.map((d, index) => (
        <NewsCard
          key={index.toString()}
          date={formatDate(d.publishedDate)}
          title={d.title}
          image={d.image}
          desc={d.text}
          url={d.url}
        />
      ))}
    </Box>
  )
}
