class ChangeColumnIntensity < ActiveRecord::Migration[6.0]
  def change
    change_column :targets, :intensity, :string
  end
end
