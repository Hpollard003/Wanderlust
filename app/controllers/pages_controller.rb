class PagesController < ApplicationController

    #@current_user refers to the current user logged in to the session

    # Index provides a list of all pages based on the user
    def index
        render json: Page.all, status: :ok
    end

    # Show finds a page by their id 
    def show 
        page = Page.find_by(id: params[:id])
        render json: page, status: :ok
    end

    # Create, creates a new page based on the parameters passed and adds it to the pages table where it recieves an id
    def create
        new_page = Page.create!(page_params)
        render json: new_page, status: :created
    end

    # Update edits the page by allowing new values for the permitted params to replace the old ones
    def update
        page = find_page
        page.update!(page_params)
        render json: page, status: :ok
    end

    # Destroy deletes the page from the db and finds which one to delete by its id
    def destroy
        if @current_user
            user = Page.find_by(id: params[:id])
            user.destroy
            render json:{message: "Deleted page"}
        end
    end

    private

    # This method finds pages by their respective Id
    def find_page
        @page = Page.find_by(id: params[:id])
    end


    # This method uses params which returns an ActionController::Parameters object
    def page_params
        params.permit(:title, :body, :image, :journal_id)
    end
end