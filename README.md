# texx.inc - Next Generation AI Education Platform

![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deploy-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Version](https://img.shields.io/badge/version-3.0-purple)

最先端のAI教育を提供するtexx.incの公式サイト。モダンなグラスモーフィズムデザインと動的なアニメーションが特徴です。

## 🚀 デモサイト

GitHub Pages: https://sparkminan.github.io/cybertech-academy/

## ✨ 特徴

- 🌃 ダークテーマのサイバーパンクデザイン
- 💻 マトリックス風背景エフェクト
- ⚡ グリッチエフェクトアニメーション
- 📱 レスポンシブデザイン対応
- 📨 お問い合わせフォーム（Slack通知連携可能）
- 📚 詳細なコースページ（NEW!）
- 🔒 プライバシーポリシー・利用規約ページ（NEW!）

## 🛠️ 技術スタック

- HTML5
- CSS3 (カスタムプロパティ、アニメーション)
- Vanilla JavaScript
- Formspree (フォーム処理)
- Node.js (ローカル開発用)

## 🎓 提供コース

### 1. 生成AIプロダクト開発コース
- **期間**: 12週間（3ヶ月）
- **料金**: ¥398,000
- **内容**: ChatGPT/Claude API、RAGシステム、プロダクション展開
- **対象**: AIプロダクトを開発したいエンジニア

### 2. Discordコミュニティ開発コース
- **期間**: 8週間（2ヶ月）
- **料金**: ¥298,000
- **内容**: Discord.js v14、Bot開発、AI連携
- **対象**: コミュニティ管理を自動化したい開発者

### 3. AIエージェント開発コース
- **期間**: 16週間（4ヶ月）
- **料金**: ¥498,000
- **内容**: LangChain、AutoGPT、マルチエージェントシステム
- **対象**: 自律型AIシステムを構築したい上級者

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
├── index.html              # メインページ
├── style.css               # スタイルシート
├── script.js               # JavaScriptファイル
├── course-ai-product.html  # 生成AIプロダクト開発コース詳細
├── course-discord.html     # Discordコミュニティ開発コース詳細
├── course-ai-agent.html    # AIエージェント開発コース詳細
├── about.html              # 会社概要ページ
├── privacy.html            # プライバシーポリシー
├── terms.html              # 利用規約
├── local-server.js         # ローカルテスト用サーバー（開発用）
├── .gitignore              # Git除外設定
└── README.md               # このファイル
```

## 📖 ページ構成

### メインページ
- **index.html**: トップページ（コース一覧、料金、お問い合わせ）

### コース詳細ページ
- **course-ai-product.html**: 生成AIプロダクト開発（12週間プログラム）
  - LLM/RAGシステム構築
  - 実践的なプロジェクト開発
  - ¥398,000

- **course-discord.html**: Discordコミュニティ開発（8週間プログラム）
  - Discord.js v14マスター
  - Bot開発とコミュニティ管理
  - ¥298,000

- **course-ai-agent.html**: AIエージェント開発（16週間プログラム）
  - LangChain/AutoGPT活用
  - 自律型エージェント構築
  - ¥498,000

### 法的ページ
- **about.html**: texx.incについて、チーム紹介
- **privacy.html**: 個人情報保護方針
- **terms.html**: サービス利用規約

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

### メインページ
- **マトリックス背景**: リアルタイムで流れる文字エフェクト
- **グリッチエフェクト**: タイトルのサイバーパンク演出
- **リップルエフェクト**: 価格カードホバー時
- **パルスアニメーション**: タイムラインの点
- **グラデーションシフト**: テストバナー

### コースページ固有のアニメーション
- **course-ai-product.html**: グラデーションアニメーションタイトル
- **course-discord.html**: Discord風パーティクルエフェクト
- **course-ai-agent.html**: インタラクティブなニューラルネットワーク表示

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

### v3.0 (2025-01-19)
- 📚 各コースの詳細ページを追加
  - 生成AIプロダクト開発（12週間カリキュラム）
  - Discordコミュニティ開発（8週間カリキュラム）
  - AIエージェント開発（16週間カリキュラム）
- 📖 法的ページの追加（About/Privacy/Terms）
- 🎨 コース別のユニークなアニメーション実装
- 🔗 メインページからの導線改善

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