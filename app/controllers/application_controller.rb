class ApplicationController < ActionController::API
  # Cookies are read and written through ActionController::Cookies.
  include ActionController::Cookies
  # Sessions are a safe way to hash and save cookies
  
  # Recuse from handles controllers exceptions
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  #This will run authorize before all controller actions unless explicitly told otherwise
  before_action :authorize

  private

  def authorize
    # @current_user is an instance variable that is a part of Object Oriented programming and stores data across an extended scope
    @current_user = User.find_by(id: session[:user_id])
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end
end
