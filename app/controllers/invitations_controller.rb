class InvitationsController < ApplicationController
  # This method takes 2 ids and returns an invitation to the reciever to accept or reject
  def create
    id1 = params[:ids][:id1]
    id2 = params[:ids][:id2]
    @invitation = Invitation.create!(friend_id: id1, user_id: id2)
    @invitation.save
  end

  # This method adds other users to your friends list  
  def follow
    follow = Invitation.create!(invite_params)
    render json: follow
  end
    
  # For rejecting requests and unfriending users
  def destroy
    invitation = Invitation.find(params[:id])
    invitation.destroy
    render message:"Unfriended"
  end
    
  # for accepting user requests
  def update
    invitation = Invitation.find(params[:invitation_id])
    invitation.update(confirmed: true)
  end

  private
    def invite_params
      params.permit(:id, :ids, :id1, :id2, :friend_id, :user_id, :confirmed, :invitation) 
    end
end
