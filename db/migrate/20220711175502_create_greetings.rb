class CreateGreetings < ActiveRecord::Migration[7.0]
  def change
    create_table :greetings do |t|
      t.string :name

      t.timestamps
    end
    Greeting.create(name: 'Hello one')
    Greeting.create(name: 'Hello two')
    Greeting.create(name: 'Hello three')
    Greeting.create(name: 'Hello four')
    Greeting.create(name: 'Hello five')
  end
end
