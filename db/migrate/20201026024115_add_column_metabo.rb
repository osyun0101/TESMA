class AddColumnMetabo < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :metabolism, :string
  end
end
