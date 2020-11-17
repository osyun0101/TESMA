class UsersController < ApplicationController
  before_action :user_session, only: [:metabolism,:metabolism_update]

  def registrations
    redirect_to new_user_registration_path
  end

  def metabolism
   @user = User.find(current_user.id)
  end

  def update
    @user = User.find(current_user.id)
    if @user.update(params_meta)
      redirect_to action: :metabolism
      flash[:notice] = "保存しました"
    else
      render :metabolism
    end
  end

  private

  def params_meta
    params.require(:user).permit(:stature, :weight, :age).merge(params.permit(:metabolism))
  end
end
