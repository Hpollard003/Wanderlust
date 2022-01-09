class InvitationsController < ApplicationController
    def create
        id1 = params[:ids][:id1]
        id2 = params[:ids][:id2]
        @invitation = Invitation.create!(friend_id: id1, user_id: id2)
        @invitation.save
      end
    
      def destroy
        invitation = Invitation.find(params[:id])
        invitation.destroy
        render message:"Unfriended"
      end
    
      def update
        invitation = Invitation.find(params[:invitation_id])
        invitation.update(confirmed: true)
      end
end
