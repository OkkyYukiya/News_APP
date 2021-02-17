# News-App

## 【概要】

![Alt text](src/assets/logo-news.png)

### アプリ名:News Quu

ビジネス情報や株価等を閲覧することができるニュースサイトです。\
 カテゴリ別に記事表示を変更することや、調べたい word で記事を検索することが出来ます。

## 【Technologies used (使用技術)】

- React.js v17.0.1\
   (Hooks: useState, useEffect, useContext)
- React-router-dom v0.21.1
- AXIOS v0.21.1
- Material-UI v4.11.3

- Firebase\
  (Authentication, CloudFirestore, Hosting)

API

- [News API](https://newsapi.org/)
- [bing news search](https://api.rakuten.net/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1/details)
- [FMP Cloud](https://fmpcloud.io/)

## 【SetUp(開発方法)】

Go to the project folder and install required dependencies.

### `npm install`

And run Webpack watch for code changes and bundle js and css

### `npm start`

Project will be automatically open at http://localhost:3000
For production build:

### `npm run build`

## 【機能一覧】

| 機能             | 概要                                                       |
| ---------------- | ---------------------------------------------------------- |
| 一覧表示         | API から取得したニュース記事を表示                         |
| カテゴリ切り替え | "Business", "Technology"などのカテゴリを切り替え記事を表示 |
| 株価表示         | 主要株の価格、前日終値に対しての現在価格の変動比を表示     |
| 記事検索         | "React"など探したいニュースの word を入力し記事を検索      |

### 【今後追加する機能】

| 機能       | 概要                         |
| ---------- | ---------------------------- |
| コメント   | 閲覧した記事に対してコメント |
| 認証       | 　ログイン/ユーザー新規作成  |
| お気に入り | 気に入った記事を保存         |
