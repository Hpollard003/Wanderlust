class CreatePages < ActiveRecord::Migration[6.1]
  def change
    create_table :pages do |t|
      t.string :title
      t.string :body
      t.string :image
      t.integer :journal_id
    end
  end
end
