# Portfolio Template

Astroで構築されたポートフォリオサイトのテンプレートです。

## 特徴

- ダークモード/ライトモード対応
- レスポンシブデザイン
- SEO最適化（Schema.org対応）
- マークダウンでコンテンツ管理
- 高速なページ読み込み

## クイックスタート

### 1. 必要なもの

- [Node.js](https://nodejs.org/) (v18以上)
- [bun](https://bun.sh/) (パッケージマネージャー)

bunのインストール:
```bash
curl -fsSL https://bun.sh/install | bash
```

### 2. セットアップ

```bash
# 依存関係をインストール
bun install

# 開発サーバーを起動
bun run dev
```

ブラウザで http://localhost:4321 を開いてサイトを確認できます。

### 3. ビルド

```bash
# 本番用にビルド
bun run build

# ビルド結果をプレビュー
bun run preview
```

---

## カスタマイズ方法

### 基本情報の編集

`src/content/site.yaml` ファイルを編集して、あなたの情報に書き換えてください。

```yaml
# あなたの名前
name: "山田 太郎"

# 職種・肩書き
jobTitle: "ソフトウェアエンジニア"

# 所在地
location: "東京, 日本"

# キャッチフレーズ
tagline: "Web開発で未来を創る"

# 自己紹介（短め）
introduction: "Webアプリケーション開発を専門とするエンジニアです。"

# 自己紹介（長め）- Aboutページ用
bio: "5年以上のWeb開発経験を持ち..."

# サイトURL（デプロイ後のURL）
url: "https://yourusername.github.io"

# SNSリンク（使わないものは空にしてください）
social:
  github: "https://github.com/yourusername"
  linkedin: "https://www.linkedin.com/in/yourusername/"
  x: "https://twitter.com/yourusername"
  email: "your.email@example.com"
  zenn: ""   # 使わない場合は空
  qiita: ""  # 使わない場合は空

# 実績の数字（ホームページに表示）
stats:
  - value: "5+"
    label: "年の経験"
  - value: "20+"
    label: "プロジェクト"
  - value: "10K+"
    label: "コード行数"

# スキル一覧
skills:
  - category: "フロントエンド"
    items:
      - "React"
      - "TypeScript"
      - "Next.js"
  - category: "バックエンド"
    items:
      - "Node.js"
      - "Python"
      - "Go"

# 資格・認定
certifications:
  - name: "AWS Solutions Architect"
    issuer: "Amazon Web Services"

# 働いたことのある会社（ロゴ表示用）
companies:
  - "Company A"
  - "Company B"
```

---

### 職歴の追加

`src/content/experience/` フォルダにマークダウンファイルを作成します。

ファイル名は `01-会社名.md`、`02-会社名.md` のように番号をつけると順番が制御できます。

#### 例: `src/content/experience/01-current-company.md`

```markdown
---
company: "株式会社ABC"
role: "シニアエンジニア"
type: "正社員"
period: "2022年4月 - 現在"
location: "東京"
current: true
tech:
  - TypeScript
  - React
  - AWS
highlights:
  - "チームリーダーとして5名のエンジニアをマネジメント"
  - "レガシーシステムのモダン化を主導"
achievements:
  - "開発効率を30%向上"
---

詳細な説明をここに書くことができます（オプション）。

プロジェクトの詳細や、特に印象に残った仕事などを自由に記載してください。
```

#### フィールドの説明

| フィールド | 必須 | 説明 |
|-----------|------|------|
| company | はい | 会社名 |
| role | はい | 役職・ポジション |
| type | いいえ | 雇用形態（正社員、契約社員など） |
| period | はい | 在籍期間 |
| location | いいえ | 勤務地 |
| current | いいえ | 現職の場合は `true` |
| tech | いいえ | 使用技術のリスト |
| highlights | いいえ | 主な業務・成果 |
| achievements | いいえ | 定量的な実績 |

---

### プロジェクトの追加

`src/content/projects/` フォルダにマークダウンファイルを作成します。

#### 例: `src/content/projects/01-my-project.md`

```markdown
---
title: "ポートフォリオサイト"
description: "Astroで構築した個人サイト"
status: "active"
featured: true
github: "https://github.com/yourusername/portfolio"
link: "https://your-portfolio.com"
tags:
  - Astro
  - TypeScript
  - Tailwind CSS
highlights:
  - "Lighthouse スコア 100点"
  - "ダークモード対応"
---

## プロジェクト詳細

このプロジェクトについての詳細な説明を書けます。

### 使った技術

- Astro
- TypeScript

### 工夫した点

ここに工夫した点を書きます。
```

#### フィールドの説明

| フィールド | 必須 | 説明 |
|-----------|------|------|
| title | はい | プロジェクト名 |
| description | はい | 簡単な説明 |
| status | いいえ | `active` / `learning` / `experimental` |
| featured | いいえ | トップページに表示する場合は `true` |
| github | いいえ | GitHubリポジトリのURL |
| link | いいえ | デモサイトのURL |
| tags | いいえ | 技術タグのリスト |
| highlights | いいえ | 主な特徴・成果 |

---

### 論文・研究の追加

`src/content/papers/` フォルダにマークダウンファイルを作成します。

#### 例: `src/content/papers/01-my-paper.md`

```markdown
---
title: "論文タイトル"
description: "研究内容の簡単な説明"
date: 2024-01-15
authors:
  - "山田 太郎"
  - "共著者 名前"
pdf: "/papers/my-paper.pdf"
tags:
  - 機械学習
  - 自然言語処理
status: "published"
venue: "国際会議名 2024"
---

## 概要

論文の要約や概要を書きます。

## 主な貢献

- 貢献1
- 貢献2
```

#### フィールドの説明

| フィールド | 必須 | 説明 |
|-----------|------|------|
| title | はい | 論文タイトル |
| description | はい | 簡単な説明 |
| date | いいえ | 発表日（YYYY-MM-DD形式） |
| authors | いいえ | 著者リスト |
| pdf | いいえ | PDFファイルのパス |
| externalLink | いいえ | 外部リンク（arXivなど） |
| github | いいえ | コードのGitHubリポジトリ |
| tags | いいえ | 研究分野タグ |
| status | いいえ | `published` / `preprint` / `in-progress` |
| venue | いいえ | 発表場所（学会・ジャーナル名） |

---

### ブログ記事の追加

`src/content/blog/` フォルダにマークダウンファイルを作成します。

#### 例: `src/content/blog/my-first-post.md`

```markdown
---
title: "はじめての記事"
description: "ブログを始めました"
pubDate: 2024-01-01
---

ブログ記事の本文をここに書きます。

## 見出し

マークダウン記法が使えます。

- リスト1
- リスト2

**太字** や *斜体* も使えます。
```

---

## デプロイ方法

### GitHub Pagesでのデプロイ（推奨）

このテンプレートはGitHub Pagesへの自動デプロイに対応しています。

1. GitHubにリポジトリを作成
2. コードをプッシュ
3. リポジトリの Settings → Pages を開く
4. Source を「GitHub Actions」に設定
5. mainブランチにプッシュすると自動でデプロイされます

デプロイ後のURL: `https://yourusername.github.io/repository-name`

**注意**: リポジトリ名がユーザー名と同じ場合（`username.github.io`）は、`astro.config.mjs` の `base` 設定は不要です。それ以外の場合は、`base: '/repository-name'` を設定してください。

### Vercelでのデプロイ

1. [Vercel](https://vercel.com) でアカウントを作成
2. 「New Project」をクリック
3. GitHubリポジトリをインポート
4. そのままデプロイ（自動検出されます）

---

## ファイル構成

```
src/
├── content/
│   ├── site.yaml          # サイト基本設定
│   ├── blog/              # ブログ記事
│   ├── experience/        # 職歴
│   ├── projects/          # プロジェクト
│   └── papers/            # 論文・研究
├── components/            # UIコンポーネント
├── layouts/               # ページレイアウト
├── lib/                   # ユーティリティ
└── pages/                 # ページ
public/
├── fonts/                 # フォントファイル
└── images/                # 画像ファイル
```

---

## よくある質問

### Q: 画像を追加するには？

`public/images/` フォルダに画像を置き、マークダウンで参照します：

```markdown
![画像の説明](/images/my-image.png)
```

### Q: フォントを変更するには？

`src/layouts/BaseLayout.astro` のCSSを編集してください。

### Q: 色を変更するには？

`uno.config.ts` のテーマ設定を編集してください。

### Q: ページを追加するには？

`src/pages/` フォルダに `.astro` ファイルを作成します。

---

## ライセンス

GPL-3.0 License

---

## サポート

問題が発生した場合は、GitHubのIssueでお知らせください。
