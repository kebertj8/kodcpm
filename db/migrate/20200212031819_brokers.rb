class Brokers < ActiveRecord::Migration[5.2]
  def change
    create_table :brokers do |t|
      t.belongs_to :user, null: false 
      t.belongs_to :property, null: false
      t.timestamps
    end 
  end
end
