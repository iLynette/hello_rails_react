Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: 'json'} do
    get 'greetings', to: 'greetings#index'
  end
  # Defines the root path route ("/")
  get '*page', to: 'static#index'
  root "static#index"
end

