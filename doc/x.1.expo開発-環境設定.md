
# expo開発

点線部は、開発者はあまり意識しない。

``` mermaid
sequenceDiagram
  participant Expoアプリ
  participant PC
  participant *.exp.direct

  PC ->> PC : exp start
  PC -->> PC : ビルド
  PC -->> *.exp.direct : App.js 

  PC ->> Expoアプリ : QRコード撮影

  Expoアプリ -->> *.exp.direct : App.js request
  *.exp.direct -->> Expoアプリ : App.js
　
  PC ->> PC : 編集と保存
  PC -->> PC : ビルド
  PC -->> *.exp.direct : App.js 
  *.exp.direct -->> Expoアプリ : App.js

```


## 環境設定

https://docs.expo.io/versions/latest/introduction/installation.html

1. テスト端末を用意
   1. [Android Expoアプリ download](https://play.google.com/store/apps/details?id=host.exp.exponent)
   1. [iOS Expoアプリ download](https://itunes.com/apps/exponent)
1. Expoアプリを起動
1. Scan QR Code

```
exp init demo-expo
  Choose a template type: tabs
cd demo-expo
code .
exp start --tunnel --dev
```


## 作業メモ

```
# app.json
expo.isDetached: false
```
