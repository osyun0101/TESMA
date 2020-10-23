class CreateCalories < ActiveRecord::Migration[6.0]
  def change
    create_table :calories do |t|
      t.integer :calory,              null: false
      t.references :user,             null: false, foreign_key: true
      t.timestamps
    end
  end
end
