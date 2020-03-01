# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_01_004334) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "brokers", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "property_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["property_id"], name: "index_brokers_on_property_id"
    t.index ["user_id"], name: "index_brokers_on_user_id"
  end

  create_table "properties", force: :cascade do |t|
    t.string "date", null: false
    t.string "address", null: false
    t.string "listing_amount", null: false
    t.string "listing_source", null: false
    t.string "offer", null: false
    t.string "zoning", null: false
    t.string "units", null: false
    t.string "bedrooms", null: false
    t.string "year_built", null: false
    t.string "sq_ft", null: false
    t.string "tax", null: false
    t.string "expenses", null: false
    t.string "construction_cost", null: false
    t.string "arv", null: false
    t.string "realtors", null: false
    t.string "investment_amount", null: false
    t.string "investors", null: false
    t.string "expected_profit", null: false
    t.string "actual_profit", null: false
    t.string "profits_needed", null: false
    t.string "timeline", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sites", force: :cascade do |t|
    t.string "street", null: false
    t.string "state", null: false
    t.string "country", null: false
    t.string "zipcode", null: false
    t.string "type", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_sites_on_user_id"
  end

  create_table "stages", force: :cascade do |t|
    t.string "budget", null: false
    t.string "type", null: false
    t.string "materials", null: false
    t.bigint "sites_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["sites_id"], name: "index_stages_on_sites_id"
  end

  create_table "subcontractors", force: :cascade do |t|
    t.string "type", null: false
    t.string "name", null: false
    t.string "number", null: false
    t.string "street", null: false
    t.string "state", null: false
    t.string "zipcode", null: false
    t.string "country", null: false
    t.bigint "stages_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["stages_id"], name: "index_subcontractors_on_stages_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
