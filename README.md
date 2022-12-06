# tutorial2-front-next

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

### 項目

- モデル（エンティティ）
  - このコンセプト最大のポイント
  - gql-codegen で DB スキーマから自動生成
    - `src/graphql/${接続先}/generated/types.ts`
  - スキーマを一切重複定義しない（大事！）
- キャッシュ戦略
  - Apollo InMemoryCache を最大限利用（ポイント！）
    - カスタムフック参照
  - Provider でメタデータのローカルストレージへのキャッシュを管理
- ミドルウェア `src/providers`, `src/hoc`
  - Provider で実現
  - Context.Provider の意味を拡張として定義
  - `src/pages/_app.tsx` でページコンポーネントの前提として機能を提供し状態を制御
  - ケースによっては HOC で実現
- DI `src/context`
  - Context を使用
  - ApolloClient のように全体で利用するインスタンスがあれば、Context + Provider で管理
  - グローバルなオブジェクト参照は禁止
    - モジュールにプライベート持たせて隠れシングルトンとして使用しないように
- コンポーネント `src/components`
  - 方針
    - 構成は Atomic Design
    - 切り分け方は下記参照
    - 基本的にテンプレートを中心に作成して、汎用的な部分をあとから切り分けていくでよい
    - 各コンポーネント単位でディレクトリを切るが、さらにディレクトリ内ディレクトリを切ってネストさせないように！（見通しが悪くなるので）
  - 原子 `src/components/atoms`
    - スタイルをまとめてあてるための存在
    - タグはいくつつかっても OK
    - プロジェクト内で分解できない単位
    - 他のファイルに依存しない
  - 分子 `src/components/molecules`
    - スタイルをまとめてあてるための存在
    - 原子を利用するもの
    - 原子のリストなど
  - 生物 `src/components/organisms`
    - 汎用的な機能をテンプレから切り出したもの
    - GraphQL クエリを定義可能
  - テンプレ `src/components/templates`
    - URL から値を取得しない
      - URL から取得した値はページから prop で受け取る
    - ページの機能全体を提供
      - スタイルは atom や molecules で定義する
      - コンポーネントの配置とイベントハンドリング
    - GraphQL クエリを定義可能
  - ページ `src/pages`
    - URL を処理してテンプレートを呼び出す
    - リダイレクトするだけのような場合サービスよんでも OK
- サービス `src/hooks`
  - カスタムフックで実現
  - GraphQL ミューテーションの定義はここのみ許す
  - クエリと同時に定義して、キャッシュ効率を最大化
  - 型自動生成とキャッシュの恩恵を受けるため、基本的にクエリでは全カラム取得する
  - クエリのレスポンスとミューテーションをラップした関数を返す
  - 結果的に、カスタムフックは flux 的な働きをする
  - 濃いビジネスロジックはユーティリティの委譲する
- ユーティリティ `src/utils`
  - 関数型のビジネスロジック
  - 状態を持たない
  - エンティティを受け取って、何らか処理して返す
