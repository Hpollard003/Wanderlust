class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :show, :upload]
  
    # returns all users (for use in the future when adding a friends list option)
    def index
      render json: User.all, include: :invitations, status: :ok
    end
  
    # This method is responsible for creating new users through a signup form and creating a session for them.
    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
    end

    def update
      if @current_user
      user = @current_user
      user.update!(user_params)
      render json: user, status: :ok
      end
    end

    # Show finds a journal by their id 
    def show 
      user = find_user
      render json: user, status: :ok
    end
  
    # Show finds the current user for authenticating purposes and profile rendering.
    def profile
      render json: @current_user
    end
  
    # Below are the parameters for creating a new user
    private
    def user_params
      params.permit(:id, :username, :password, :password_confirmation, :image) 
    end

    def find_user
      @user = User.find_by(id: params[:id])
    end
  
end