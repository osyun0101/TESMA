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


# テーブル設計

## users テーブル

| Column   | Type   | Options     |
| -------- | ------ | ----------- |
| name     | string | null: false |
| email    | string | null: false |
| password | string | null: false |
| last_name| string | null: false |
| first_name| string | null: false |
| last_name_kana| string | null: false |
| first_name_kana| string | null: false |
| birth_date| date | null: false |
| phone_number| string | null: false |

### Association

- has_many :calories
- has_one :target
- has_one :metabolism

## calories テーブル

| Column   | Type   | Options     |
| -------- | ------ | ----------- |
| calory   | integer | null: false |
| user     | references | null: false , foreign_key: true|


### Association

- belongs_to :user

## targets テーブル

| Column   | Type   | Options     |
| -------- | ------ | ----------- |
| target   | integer | null: false |
| span_date | integer | null: false |
| span_id   | integer | null: false |
| user     | references | null: false , foreign_key: true|


### Association

- belongs_to :user

## metabolism テーブル

| Column   | Type   | Options     |
| -------- | ------ | ----------- |
| metabolism   | integer | null: false |
| stature   | integer | null: false |
| weight   | integer | null: false |
| user     | references | null: false , foreign_key: true|


### Association

- belongs_to :user