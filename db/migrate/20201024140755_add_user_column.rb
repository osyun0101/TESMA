class AddUserColumn < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :age, :integer, null: false
    add_column :users, :stature, :integer, null: false
    add_column :users, :weight, :integer, null: false
    add_column :users, :sex_id, :integer, null: false
  end
end
