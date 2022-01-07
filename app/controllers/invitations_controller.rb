class InvitationsController < ApplicationController
    def create
        id1 = params[:ids][:id1]
        id2 = params[:ids][:id2]
        @invitation = Invitation.new(user_id: id1, friend_id: id2)
        @invitation.save
      end
    
      def destroy
        invitation = Invitation.find(params[:id])
        invitation.destroy
      end
    
      def update
        invitation = Invitation.find(params[:invitation_id])
        p @current_user
        invitation.update(confirmed: true)
      end
end
