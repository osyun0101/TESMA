class AddColumnCaloriesCreate < ActiveRecord::Migration[6.0]
  def change
    add_column :calories, :create_date, :string, null: false
  end
end
