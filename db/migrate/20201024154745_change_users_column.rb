class ChangeUsersColumn < ActiveRecord::Migration[6.0]
  def change
    change_column :users, :age, :string
    change_column :users, :weight, :string
  end
end
