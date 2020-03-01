class Stages < ActiveRecord::Migration[5.2]
  def change
    create_table :stages do |t|
      t.string :budget, null: false
      t.string :type, null: false
      t.string :materials, null: false
      t.belongs_to :sites, null: false

      t.timestamps null: false 
    end 
  end
end
