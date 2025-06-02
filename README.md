# VRChat Screenshot Gallery

VRChatのスクリーンショットを自動的にWebP変換し、美しいギャラリーサイトを構築するJekyllプロジェクトです。

## 🌟 特徴

- **自動画像処理**: PNG画像をアップロードするだけで自動的にWebP変換・サムネイル生成
- **メタデータ自動生成**: ファイル名から日付・解像度を抽出し、YAMLフロントマターを自動作成
- **高速検索**: タグ・ワールド名・日付での絞り込み検索
- **レスポンシブデザイン**: PC・スマートフォン対応
- **GitHub Pages**: 無料でホスティング

## 🚀 セットアップ手順

### 1. リポジトリ作成

```bash
# リポジトリ名は必ず 'vrchat-gallery' にしてください
git clone https://github.com/[あなたのユーザー名]/vrchat-gallery.git
cd vrchat-gallery
```

### 2. GitHub Pages 設定

1. GitHubのリポジトリページで `Settings` → `Pages` に移動
2. `Source` を **"GitHub Actions"** に設定
3. 保存

### 3. 画像アップロード

```bash
# images/original/ フォルダに PNG ファイルをアップロード
git add images/original/VRChat_2025-01-15_14-30-25.123_1920x1080.png
git commit -m "Add new VRChat screenshot"
git push
```

### 4. 自動処理の確認

- GitHub Actions が自動実行されます
- `images/webp/` にWebP変換済み画像が生成
- `images/thumbnails/` にサムネイルが生成  
- `_posts/` にMarkdownファイルが自動作成

### 5. メタデータ編集

生成されたMarkdownファイル（`_posts/2025-01-15-VRChat_2025-01-15_14-30-25.123_1920x1080.md`）を編集：

```yaml
---
# ...自動生成されたメタデータ...

# 以下を手動で編集
world_name: "JP Tutorial World"
event_name: "新年会"
avatars: ["Rusk", "Shinra"]
tags: ["集合写真", "イベント", "パブリック"]
description: "新年初のVRChat集合写真！"
---

<!-- 詳細説明をここに追記できます -->
みんなでワイワイ楽しんだ新年会の思い出です。
```

## 📁 ディレクトリ構成

```
vrchat-gallery/
├── .github/workflows/
│   └── process-images.yml      # 画像自動処理
├── _posts/                     # 生成されるMarkdownファイル
├── images/
│   ├── original/              # PNG画像アップロード先
│   ├── webp/                  # WebP変換済み画像
│   └── thumbnails/            # サムネイル画像
├── _layouts/                  # Jekyllレイアウト
├── _includes/                 # 再利用可能パーツ
├── assets/                    # CSS・JavaScript
└── index.html                 # トップページ
```

## 🖼️ ファイル名規則

VRChatのデフォルトファイル名形式に対応：

```
VRChat_YYYY-MM-DD_HH-MM-SS.mmm_WIDTHxHEIGHT.png

例: VRChat_2025-01-15_14-30-25.123_1920x1080.png
```

## 🔍 検索機能

- **キーワード検索**: ワールド名・タグ・説明文で検索
- **日付フィルター**: 特定の日の写真を表示
- **タグフィルター**: 特定のタグの写真のみ表示
- **ワールドフィルター**: 特定のワールドの写真のみ表示

## 🎨 カスタマイズ

### テーマカラー変更

`assets/css/style.scss` の CSS変数を編集：

```scss
:root {
  --vrchat-blue: #1778f2;  // メインカラー
  --vrchat-dark: #141414;  // ダークカラー
}
```

### ギャラリーレイアウト変更

`_includes/gallery-grid.html` でグリッドレイアウトをカスタマイズ可能。

## 📱 対応ブラウザ

- Chrome/Edge (最新版)
- Firefox (最新版) 
- Safari (最新版)
- モバイルブラウザ対応

## 🚨 注意点

1. **baseurl設定**: `_config.yml` の `baseurl: "/vrchat-gallery"` は必須
2. **リポジトリ名**: 必ず `vrchat-gallery` にしてください
3. **GitHub Actions**: 無料枠の実行時間制限にご注意ください
4. **画像サイズ**: 大きすぎる画像はGitHubの制限にかかる可能性があります

## 📊 統計

サイトには以下の統計情報が自動表示されます：

- 総スクリーンショット数
- 訪問ワールド数  
- ユニークタグ数
- 最新撮影日

## 🛠️ トラブルシューティング

### Actions が実行されない

1. `Settings` → `Actions` → `General` で Actions が有効か確認
2. `images/original/` パスに PNG ファイルがあることを確認

### 画像が表示されない

1. ファイル名がVRChat形式になっているか確認
2. baseurl設定が正しいか確認（`/vrchat-gallery`）

### サイトが表示されない

1. GitHub Pages の設定が "GitHub Actions" になっているか確認
2. `_config.yml` のbaseurl・url設定を確認

## 📄 ライセンス

MIT License

## 🙏 謝辞

- Jekyll & GitHub Pages
- Bootstrap 5
- Lightbox2
- ImageMagick
