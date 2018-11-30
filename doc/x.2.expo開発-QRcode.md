
# expo開発

## 自動作成プロジェクト


### 設定

app.json 以外、あんまり触らない

ディレクトリ/ファイル | 解説
:-------------|:-
.expo/        | expo開発環境の設定値
node_modules/ | 依存ライブラリダウンロード先
package.json  | 依存関係定義
app.json      | アプリケーション設定


### プロジェクト

ディレクトリ/ファイル | 解説
:--------------|:-
*/\_\_tests__/ | 自動テストのシナリオ
api/           | 内部利用する機能
assets/        | 画像、フォント
components/    | 内作の　React.Component
constants/     | 定数。色や幅、高さなど
navigation/    | react-navigation設定
screens/       | 個々の画面
App.js         | 起動手順、枠組みデザイン


``` sh
exp start --tunnel --dev
```

まずは雛形を実行し、見てみましょう。


## QRコードを表示してみる


**コーディング**

- \_\_tests__/CodeScreen-test.js
- screens/CodeScreen.js
- navigation/MainTabNavigator.js

[記述と修正の内容](https://github.com/7korobi/demo-expo-qrcode/commit/d279bce77b10a95a29bd0398eeb5e2375121fbb3)


``` sh
yarn add react-native-qrcode-svg
yarn test
exp start --tunnel --dev
```

[コマンド実行による変化](https://github.com/7korobi/demo-expo-qrcode/commit/db67358c5712e0bfb6fc259a2c6799aa8688475f)



HOME画面がさし変わり、QRコードを表示するようになりました。
