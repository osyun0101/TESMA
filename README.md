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
## どの期間で体重を何キロにしたいのか目標の設定をすることで1日の摂取カロリーを算出、その摂取カロリーを設定した期間まで続ければ栄養学の観点から目標の体重になる

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
| create_date   | date | null: false |
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
