class CreateTickets < ActiveRecord::Migration
  def change
    create_table :tickets do |t|
      t.string :item
      t.integer :table_id
      t.string :comments

      t.timestamps null: false
    end
  end
end
