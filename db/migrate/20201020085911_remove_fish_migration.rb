class RemoveFishMigration < ActiveRecord::Migration[6.0]
  def change
    drop_table :fish
  end
end
