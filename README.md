

### 使い方
- firebase プロジェクトを有効化する
- firebase プロジェクトのコンソール画面でcloud functionsを有効化する
- google cloud console でApp Engine を有効化する
- twitter apiを取得する

```zsh
$ npm i -g firebase-tools 

$ firebase login
```

```zsh
$ firebase functions:config:set twitter.apikey="consumer_key" twitter.apisecret="consumer_secret" twitter.token="access_token" twitter.tokensecret="access_token_secret"
```

- .firebasercの your-projectを自分が設定したプロジェクトに変える

### 画像を用意する

- img-0.png, img-30.png ~~~~ img-330.png のフォーマットでそれぞれの角度の画像を用意する
- 画像をresource フォルダに入れる

### 最後に
```
$ npm run deploy
```