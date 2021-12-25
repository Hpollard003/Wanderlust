Rails.application.routes.draw do
  resources :pages
  resources :journels
  resources :users


    # Everything below is a custom route that get specific actions from specific controllers
    post "/signup", to: "users#create"
    get "/me", to: "users#show"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
   
end
