# texx.inc - Next Generation AI Education Platform

![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deploy-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Version](https://img.shields.io/badge/version-2.0-purple)

最先端のAI教育を提供するtexx.incの公式サイト。モダンなグラスモーフィズムデザインと動的なアニメーションが特徴です。

## 🚀 デモサイト

GitHub Pages: https://sparkminan.github.io/cybertech-academy/

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
    --primary-color: #00ff88;     /* メインカラー（グリーン） */
    --secondary-color: #7c3aed;   /* サブカラー（パープル） */
    --accent-color: #06b6d4;      /* アクセントカラー（シアン） */
    --gradient-1: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --gradient-2: linear-gradient(135deg, #00ff88 0%, #00d4ff 100%);
    --gradient-3: linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%);
}
```

### コンテンツの編集

`index.html` の各セクションを編集してコンテンツをカスタマイズできます。

## 🎢 アニメーション

追加された主なアニメーション：

- **パララックススクロール**: ヒーローとスケジュールセクション
- **リップルエフェクト**: 価格カードホバー時
- **パルスアニメーション**: タイムラインの点
- **グラデーションシフト**: テストバナー
- **フェードイン**: 各要素の段階的出現

## 🔒 セキュリティ

- Webhook URLなどの機密情報は **絶対に** コミットしないでください
- フォーム処理にはFormspreeを使用（Slack連携対応）

## 🎓 texx.inc について

### 👥 共同代表
- **spark**: 技術統括・プロダクト開発
- **minta**: ビジネス開発・マーケティング

### 🏢 企業情報
- 設立: 2024年1月
- 所在地: 東京都渋谷区神宮前6-19-14
- 連絡先: contact@texx.inc

## 📑 更新履歴

### v2.0 (2025-01-19)
- 🎨 デザイン全面リニューアル
- 🚀 アニメーション機能強化
- 📚 AIコースへの完全移行
- 💰 料金体系・スケジュール追加

### v1.0 (2025-01-19)
- 🎆 初回リリース

## 📝 ライセンス

MIT License

## 🤝 貢献

プルリクエストを歓迎します！

---

**注意**: これはテスト/デモ用のサイトです。本番環境で使用する場合は適切なセキュリティ対策を行ってください。