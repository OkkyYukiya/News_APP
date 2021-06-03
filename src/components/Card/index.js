import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import styles from './Card.module.scss'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

export const NewsCard = ({ title, desc, date, image, url }) => {
  return (
    <Card className={styles.root}>
      <CardActionArea href={url}>
        <CardMedia
          className={styles.media}
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={
            image
              ? image
              : 'https://cdn.snapi.dev/images/v1/v/i/apple-ceo-tim-cook-spe-852156.jpg'
          }
          title="Contemplative Reptile"
        />
        <CardContent className={styles.content}>
          <Typography
            className={styles.title}
            gutterBottom
            variant="body1"
            component="h2"
          >
            {title ? title : 'Title Area'}
          </Typography>
          <Typography
            className={styles.desc}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {desc ? desc : 'This is Description Area'}
          </Typography>
        </CardContent>
        <Typography className={styles.date} variant="body1">
          {date}
        </Typography>
      </CardActionArea>
    </Card>
  )
}
