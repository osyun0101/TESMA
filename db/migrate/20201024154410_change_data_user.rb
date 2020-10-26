class ChangeDataUser < ActiveRecord::Migration[6.0]
  def change
    change_column :users, :stature, :string
  end
end
