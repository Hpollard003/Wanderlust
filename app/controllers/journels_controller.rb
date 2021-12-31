class JournelsController < ApplicationController

    #@current_user refers to the current user logged in to the session

    # Index provides a list of all journels based on the user
    def index
        render json: @current_user.journels, status: :ok
    end

    # Show finds a journel by their id 
    def show 
        journel = find_journel
        render json: journel, status: :ok
    end

    # Create, creates a new journel based on the parameters passed and adds it to the journels table where it recieves an id
    def create
        new_journel = Journels.create!(journel_params)
        render json: new_journel, status: :created
    end

    # Update edits the journel by allowing new values for the permitted params to replace the old ones
    def update
        journel = find_journel
        journel.update!(journel_params)
        render json: journel, status: :ok
    end

    # Destroy deletes the journel from the db and finds which one to delete by its id
    def destroy
        if @current_user
            user = Journels.find_by(id: params[:id])
            user.destroy
            render json:{message: "Deleted journel"}
        end
    end

    private

    # This method finds journels by their respective Id
    def find_journel
        @journel = Journel.find_by(id: params[:id])
    end

    # This method uses params which returns an ActionController::Parameters object
    def journel_params
        params.permit(:title, :page_id)
    end
end
