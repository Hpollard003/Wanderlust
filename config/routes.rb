Rails.application.routes.draw do
  resources :users do
    resources :invitations 
  end
  resources :journals do
    resources :pages
  end
  
  
  
  
  # Everything below is a custom route that get specific actions from specific controllers
  post "/signup", to: "users#create"
  get "/me", to: "users#profile"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  patch "/users/:id/upload-image", to: "users#upload", as: :upload
   
end
