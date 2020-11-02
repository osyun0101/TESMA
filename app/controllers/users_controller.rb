class UsersController < ApplicationController
  before_action :user_session, only: [:metabolism]

  def metabolism
   
  end

  def metabolism_update
    if current_user.update(params_meta)
      redirect_to action: :metabolism
      flash[:notice] = "保存しました"
    else
      render :metabolism
    end
  end

  private

  def params_meta
    params.permit(:stature, :weight, :age,:metabolism)
  end

  def user_session
    unless user_signed_in?
      redirect_to new_user_session_path
     end
  end
end
