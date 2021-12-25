class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create
  
    # This specific create method is responsible for logging in users and authenticating them using there password
    def create
      user = User.find_by(username: params[:username])
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user
      else
        render json: { errors: "Invalid username or password" }, status: :unauthorized
      end
    end
  
    # Sets the session[:user_id] = to nil effectively unAuthorizing the client side requests
    def destroy
      session[:user_id] = nil
      render json: { message: "You've been logged out."}
    end
end
  
