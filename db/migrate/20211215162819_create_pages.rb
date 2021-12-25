class CreatePages < ActiveRecord::Migration[6.1]
  def change
    create_table :pages do |t|
      t.string :title
      t.string :body
      t.string :image
      t.integer :journel_id
      t.integer :user_id

      t.timestamps
    end
  end
end
