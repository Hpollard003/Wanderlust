Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users do
    resources :invitations 
  end
  resources :journals do
    resources :pages
  end




  # Everything below is a custom route that get specific actions from specific controllers
  post "/invites/:user_id" , to: "invitations#follow"
  post "/signup", to: "users#create"
  get "/me", to: "users#profile"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  patch "/users/:id/upload-image", to: "users#upload", as: :upload
end
