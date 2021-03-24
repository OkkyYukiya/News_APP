# News-App

## 【概要】

![Alt text](src/assets/logo-news.png)

### アプリ名:News Quu

[Demo Page](https://news-app-8efb7.web.app/)

ビジネス情報や株価等を閲覧することができるニュースサイトです。\
 カテゴリ別に記事表示を変更することや、調べたい word で記事を検索することが出来ます。

## 【Technologies used (使用技術)】

- React.js v17.0.1\
   (Hooks: useState, useEffect, useContext)
- react-router-dom v0.21.1
- Material-UI v4.11.3
- react-spinners v0.10.6
- Firebase v8.2.9\
  (Authentication, CloudFirestore, Hosting)

Used API

- News API
- bing news search
- FMP Cloud

## 【SetUp (開発方法)】

Go to the project folder and install required dependencies.

### `yarn install`

And run Webpack watch for code changes and bundle js and css

### `yarn start`

Project will be automatically open at http://localhost:3000
For production build:

### `yarn build`

If you need API keys, get it from this link.

- [News API](https://newsapi.org/)
- [bing news search](https://api.rakuten.net/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1/details)
- [FMP Cloud](https://fmpcloud.io/)\
  ※All can be registered for free.

## 【機能一覧】

| 機能             | 概要                                                       |
| ---------------- | ---------------------------------------------------------- |
| 記事一覧表示     | API から取得したニュース記事を表示                         |
| 記事個別表示     | API から取得したニュース記事を個別に表示                   |
| カテゴリ切り替え | "Business", "Technology"などのカテゴリを切り替え記事を取得 |
| 株価表示         | 主要株の価格、前日終値に対しての現在価格の変動比(%)を表示  |
| 記事検索         | free word で探したいニュース記事を検索                     |
| 新規登録         | User の新規登録                                            |
| ログイン         | Email and Password, Google 認証を利用したログイン機能      |
