class Sites < ActiveRecord::Migration[5.2]
  def change
    create_table :sites do |t|
      t.string :street, null: false
      t.string :state, null: false
      t.string :country, null: false
      t.string :zipcode, null: false
      t.string :type, null: false
      t.belongs_to :user, null: false
      
      t.timestamps null: false
    end 
  end
end
