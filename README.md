# portable-library-backend

## 使用技術

- APIサーバー
    - Express
        - TypeScript
    - Open AIによるスキーマ駆動開発？
- DB
    - 画面設計からページ毎にどのような情報が必要かを洗い出さないと難しい
    - RDB（仮）
    - mongodb ?
    - ORM
        - Prisma
- キャッシュ
    - Redis
        - 多分不要
- Docker
    - コンテナ化しないとデプロイがきつい

## デプロイ先調査

- APIサーバーのデプロイ先
    - Cloud Ran (Google)
