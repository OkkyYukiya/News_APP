# News-App

## ◆ 概要

![Alt text](src/assets/logo-news.png)

### ● アプリ名:News Quu

ビジネス情報や株価等を閲覧することができるニュースサイトです。\
 カテゴリ別に記事表示を変更することや、調べたい word で記事を検索することが出来ます。

## ◆Technologies used(使用技術)

Library

- React.js\
   (Hooks: useState, useEffect, useContext)
- React-router-dom
- Material-UI
- AXIOS

- Firebase\
  (Authentication, CloudFirestore, Hosting)

API

- News API
- bing news search
- FMP Cloud

## ◆ 機能一覧

| 機能             | 概要                                                       |
| ---------------- | ---------------------------------------------------------- |
| 一覧表示         | API から取得したニュース記事を表示                         |
| カテゴリ切り替え | "Business", "Technology"などのカテゴリを切り替え記事を表示 |
| 株価表示         | 主要株の価格、前日終値に対しての現在価格の変動比を表示     |
| 記事検索         | "React"など探したいニュースの word を入力し記事を検索      |

### ● 今後追加する機能

| 機能       | 概要                         |
| ---------- | ---------------------------- |
| コメント   | 閲覧した記事に対してコメント |
| 認証       | 　ログイン/ユーザー新規作成  |
| お気に入り | 気に入った記事を保存         |
