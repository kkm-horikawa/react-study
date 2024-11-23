# react-study

react 学習用リポジトリ

## 環境構築

### docker のインストール

docker をインストールします

```zsh
brew install --cask docker
docker --version  # バージョン確認
```

### docker-compose のインストール

docker-compose をインストールします

```zsh
brew install docker-compose
docker-compose --version  # バージョン確認
```

### docker の起動

docker を起動します

```zsh
docker-compose up -d
```

### コンテナに入る

```zsh
docker-compose exec front sh
```

### プロジェクトの作成

```zsh
npx create-react-app . --template typescript --use-npm
```

### プロジェクトの起動

<detail>
<summary>docker-composeから起動</summary>

```zsh
docker-compose exec front npm start
```

</detail>

<detail>
<summary>dockerから起動</summary>

```zsh
docker run --rm -p 3000:3000 react-study-front
```

### material-ui の導入

```zsh
npm install @material-ui/core
```

### material-ui のアイコン導入

```zsh
npm install @material-ui/icons
```

### react-router-dom の導入

```zsh
npm install react-router-dom
```

### react-router-dom の型定義ファイルの導入

```zsh
npm install @types/react-router-dom
```
