class RemoveMetaboColumn < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :metabolism, :string
  end
end
