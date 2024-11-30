# react-study

react 学習用リポジトリ

## 環境構築

### docker のインストール

docker をインストールします

<detail>
<summary>macOS</summary>

```zsh
brew install --cask docker
docker --version  # バージョン確認
```

</detail>

<detail>
<summary>Windows</summary>

```powershell
choco install docker-desktop
docker --version  # バージョン確認
```

</detail>

<detail>
<summary>Linux(Ubuntu)</summary>

```bash
#!/bin/bash

# Dockerのインストール

# Dockerリポジトリを追加
sudo apt-get update -y
sudo apt-get install -y apt-transport-https ca-certificates curl gnupg-agent software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
echo "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Dockerのインストール
sudo apt-get update -y
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Docker Composeのインストール
sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Dockerのバージョンの確認
docker --version
docker-compose --version

# ユーザをdockerグループに追加
sudo usermod -aG docker $USER

# グループの変更を即時反映
newgrp docker

# Dockerの自動起動
sudo systemctl enable docker

echo "Dockerのインストールと設定が完了しました。再ログインが必要です。"
```

</detail>

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

### プロジェクトの作成(vite)

```zsh
npm init vite@latest
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

## 全て起動

```zsh
docker-compose up --build
```

## front コンテナ

- フロン ��� エンドのコンテナです。
- `Dockerfile.front` に記載されている内容でビルドされます。

### ビルド方法

```bash
docker-compose up --build front
```

### 起動方法

```bash
docker-compose up front
```

## server コンテナ

- サーバーサイドのコンテナです。
- `Dockerfile.server` に記載されている内容でビルドされます。

### ビルド方法

```bash
docker build -t server -f Dockerfile.server .
```

### 起動方法

```bash
docker run -it -p 8000:8000 server
```

## bi コンテナ

- BI ツールのコンテナです。
- `Dockerfile.bi` に記載されている内容でビルドされます。

### ビルド方法

```bash
docker build -t bi-container -f Dockerfile.bi .
```

### 起動方法

```bash
docker run -it -p 8501:8501 bi-container
```

### コンテナログイン

```bash
docker run -it bi-container /bin/bash
```
