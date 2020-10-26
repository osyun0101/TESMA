class Changemetabo < ActiveRecord::Migration[6.0]
  def change
    change_column :users, :metabolism, :string, null: false
  end
end
