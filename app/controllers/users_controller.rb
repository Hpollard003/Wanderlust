class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
  
    # returns all users (for use in the future when adding a friends list option)
    def index
      render json: User.all, status: :ok
    end
  
    # This method is responsible for creating new users through a signup form and creating a session for them.
    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
    end

    def update
      user = @current_user
      user.update!(user_params)
      render json: user, status: :ok
    end

  
    # Show finds the current user for authenticating purposes and profile rendering.
    def show
      render json: @current_user
    end
  
    # Below are the parameters for creating a new user
    private
    def user_params
      params.permit(:image, :username, :password, :password_confirmation, :avatar)
    end

    def find_user
      @user = User.find_by(username: params[:username])
    end
  
end