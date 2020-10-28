class CreateTargets < ActiveRecord::Migration[6.0]
  def change
    create_table :targets do |t|
      t.string :weight, null: false
      t.integer :intensity, null: false
      t.string :intake, null: false
      t.date :date, null: false
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
