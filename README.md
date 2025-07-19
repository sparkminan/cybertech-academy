# CYBERTECH ACADEMY - IT教育紹介サイト

![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deploy-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

サイバーパンク風のIT教育紹介サイトです。ダークテーマとグリッチエフェクトが特徴的なデザインになっています。

## 🚀 デモサイト

GitHub Pages: `https://YOUR_USERNAME.github.io/cybertech-academy/`

## ✨ 特徴

- 🌃 ダークテーマのサイバーパンクデザイン
- 💻 マトリックス風背景エフェクト
- ⚡ グリッチエフェクトアニメーション
- 📱 レスポンシブデザイン対応
- 📨 お問い合わせフォーム（Slack通知連携可能）

## 🛠️ 技術スタック

- HTML5
- CSS3 (カスタムプロパティ、アニメーション)
- Vanilla JavaScript
- Formspree (フォーム処理)

## 📦 セットアップ

### GitHub Pagesでの公開

1. このリポジトリをフォーク
2. Settings → Pages → Source を "Deploy from a branch" に設定
3. Branch を "main"、フォルダを "/ (root)" に設定
4. 数分後、`https://YOUR_USERNAME.github.io/cybertech-academy/` でアクセス可能

### フォーム機能の設定（Formspree）

1. [Formspree](https://formspree.io/) でアカウント作成
2. 新しいフォームを作成してエンドポイントURLを取得
3. `script.js` の以下の部分を更新：

```javascript
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
```

4. Slack通知を設定したい場合は、Formspreeの Integrations からSlackを連携

## 📁 ファイル構成

```
cybertech-academy/
├── index.html          # メインページ
├── style.css           # スタイルシート
├── script.js           # JavaScriptファイル
├── .gitignore          # Git除外設定
└── README.md           # このファイル
```

## 🎨 カスタマイズ

### カラーテーマの変更

`style.css` の CSS変数を編集：

```css
:root {
    --primary-color: #00ff88;    /* メインカラー（緑） */
    --secondary-color: #ff00ff;   /* サブカラー（紫） */
    --accent-color: #00ffff;      /* アクセントカラー（シアン） */
}
```

### コンテンツの編集

`index.html` の各セクションを編集してコンテンツをカスタマイズできます。

## 🔒 セキュリティ

- Webhook URLなどの機密情報は **絶対に** コミットしないでください
- フォーム処理にはFormspreeなどの外部サービスを使用してください

## 📝 ライセンス

MIT License

## 🤝 貢献

プルリクエストを歓迎します！

---

**注意**: これはテスト/デモ用のサイトです。本番環境で使用する場合は適切なセキュリティ対策を行ってください。