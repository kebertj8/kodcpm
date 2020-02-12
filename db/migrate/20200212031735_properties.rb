class Properties < ActiveRecord::Migration[5.2]
  def change
    create_table :properties do |t|
      t.string :date, null: false
      t.string :address, null: false
      t.string :listing_amount, null: false 
      t.string :listing_source, null:false 
      t.string :offer, null: false
      t.string :zoning, null: false 
      t.string :units, null: false
      t.string :bedrooms, null: false
      t.string :year_built, null: false
      t.string :sq_ft, null: false 
      t.string :tax, null: false 
      t.string :expenses, null: false
      t.string :construction_cost, null: false
      t.string :arv, null: false
      t.string :realtors, null: false 
      t.string :investment_amount, null: false
      t.string :investors, null: false 
      t.string :expected_profit, null: false
      t.string :actual_profit, null: false 
      t.string :profits_needed, null: false
      t.string :timeline, null: false

      t.timestamps null: false
    end
  end
end
