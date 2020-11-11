# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


# アプリ名

* TESMA

# 概要
## どの期間で体重を何キロにしたいのか目標の設定をすることで1日の摂取カロリーが算出される。その摂取カロリーの食事を設定した期間まで続ければ栄養学の観点から目標の体重に到達することを目的としたアプリケーションです。本アプリでは、食事制限のみでダイエットしようというものではないため、あくまでそれぞれの目標に合った食事をサポートするものです。そのため、日々のトレーニングを自身でしてもらう必要があります。その結果、リバウンドのしにくい、健康で理想的な体を手に入れることができます。

## ユーザー管理機能
* ユーザーの情報を個別で管理できる
* 新規登録画面で身長、体重、年齢を入力すると自動で基礎代謝量が入力される

## 基礎代謝管理機能
* ユーザーの身長、体重、年齢の変化を更新すると同時に基礎代謝量の値も自動で計算し更新する

## 食事のカロリー計算機能
* 食べた物の量を入力するとその食品のカロリーが算出される
* 複数選択しても合計値を自動で計算し保存することができる
* 間違えて入力してしまった物は削除することができる

## 目標設定機能
* 目標の体重を設定できる
* 目標を達成する期間を設定できる
* 生活強度指数の設定ができる
* 現状の体重より大きい数値は保存できない
* 目標期間が今日より前の時、保存できない

## 目標進捗管理機能
* 現在の自身の身体情報を確認できる
* グラフで今までの摂取カロリーを確認できる
* 残り日数で何kgになるのか確認できる

## アプリ紹介画面
* どういうアプリなのか確認できる
* 摂取カロリーを管理することでなぜ体重が減るのか理解することができる
* 基礎代謝量をあげるとどうなるのか確認できる

## 本番環境
* heroku, url: https://tesma.herokuapp.com/
* テストアカウント 
* Email: syun0101@gmail.com
* パスワード: abcd1234

## 制作背景
* 身近な人の課題をヒアリングし、その中で「食事のカロリー計算がしたい」、「ダイエットにも生かせる物」という家族の意見がきっかけとなり、このサービスを開発しようと考えた。
カロリー計算をする物や、体重を管理するサービスはあったが、そういったサービスを利用するユーザーはダイエットがしたい人が多いのではないかと考え、双方をまとめて利用できるサービスがあればユーザーは楽に管理することができると考え、カロリー管理とダイエット、双方に活かせる形の物にしようと考えた。

## デモ
* カロリー計算機能
![demo](https://github.com/osyun0101/TESMA/blob/master/TESMA.wiki/gif/calory.gif)

* 基礎代謝管理機能
![demo](https://github.com/osyun0101/TESMA/blob/master/TESMA.wiki/gif/metabolism.gif)

* 目標設定機能
![demo](https://github.com/osyun0101/TESMA/blob/master/TESMA.wiki/gif/target.gif)

* 目標進捗、グラフ管理
![demo](https://github.com/osyun0101/TESMA/blob/master/TESMA.wiki/gif/progress.gif)

# 工夫したポイント
* 自身の過去のデータをグラフで確認できる点。
目標設定で算出された1日の摂取カロリーを基準に見ることができ、このペースだと設定期間に何キロになるのかも確認することができる。それらを簡単に把握できることで今後の摂取カロリーの調整や目標体重への意識を強め、目標の達成を支える。

* 目標設定で基礎代謝量より1日の摂取カロリーが下回る場合、設定できない点。
TESMAでは、「ただ体重を減らす」ということを目的としているわけではなく、「理想の体型を手に入れる」ことが目的である。過度な食事制限は長続きしない要因でもあり、健康面を考えてもあまり良い方法とは言えない。そのため、継続的に行える形でユーザーの健康面も考慮し、設定できない仕様に実装。

# 使用技術
HTML/CSS,jQuery,JavaScript,Ruby,Ruby on Rails,Myspl2

# 今後の課題
* エラーメッセージ日本語化
現状では、エラーメッセージが完全に日本語になっておらず、ユーザーがなぜエラーが出ているのか把握しづらいため。

* テストコード
実装した制限が上手く働いているのか確認するため。

* 目標設定が変更された時の進捗グラフ、進捗体重の修正
現状では、目標が変更された時も以前のデータが表示されてしまうため、新しい目標と過去のデータが混合してしまう問題がある。それに伴い、進捗体重の表示も過去のデータを含めた結果を表示してしまうため修正の必要がある。


# テーブル設計

## users テーブル

| Column   | Type   | Options     |
| -------- | ------ | ----------- |
| name     | string | null: false |
| email    | string | null: false |
| password | string | null: false |
| phone_number| string | null: false |
| age       | string | null: false |
| stature   | string | null: false |
| weight   | string | null: false |
| sex_id   | integer | null: false |
| metabolism   | string | null: false |

### Association

- has_many :calories
- has_one :target

## calories テーブル

| Column   | Type   | Options     |
| -------- | ------ | ----------- |
| calory   | integer | null: false |
| create_date   | string | null: false |
| user     | references | null: false , foreign_key: true|


### Association

- belongs_to :user

## targets テーブル

| Column   | Type   | Options     |
| -------- | ------ | ----------- |
| weight   | string | null: false |
| intensity   | integer | null: false |
| intake   | string | null: false |
| date | date | null: false |
| user     | references | null: false , foreign_key: true|


### Association

- belongs_to :user
