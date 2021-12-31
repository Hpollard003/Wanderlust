class JournalsController < ApplicationController

    #@current_user refers to the current user logged in to the session

    # Index provides a list of all journals based on the user
    def index
        render json: @current_user.journals, status: :ok
    end

    # Show finds a journal by their id 
    def show 
        journal = find_journal
        render json: journal, status: :ok
    end

    # Create, creates a new journal based on the parameters passed and adds it to the journals table where it recieves an id
    def create
        new_journal = Journals.create!(journal_params)
        render json: new_journal, status: :created
    end

    # Update edits the journal by allowing new values for the permitted params to replace the old ones
    def update
        journal = find_journal
        journal.update!(journal_params)
        render json: journal, status: :ok
    end

    # Destroy deletes the journal from the db and finds which one to delete by its id
    def destroy
        if @current_user
            user = Journals.find_by(id: params[:id])
            user.destroy
            render json:{message: "Deleted journal"}
        end
    end

    private

    # This method finds journals by their respective Id
    def find_journal
        @journal = Journal.find_by(id: params[:id])
    end

    # This method uses params which returns an ActionController::Parameters object
    def journal_params
        params.permit(:title, :page_id)
    end
end
