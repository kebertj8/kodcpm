class Subcontractors < ActiveRecord::Migration[5.2]
  def change
    create_table :subcontractors do |t|
      t.string :type, null: false
      t.string :name, null: false 
      t.string :number, null: false
      t.string :street, null: false 
      t.string :state, null: false
      t.string :zipcode, null: false
      t.string :country, null: false
      t.belongs_to :stages, null: false 

      t.timestamps null: false
    end
  end
end
