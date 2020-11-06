class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?


  def user_session
    unless user_signed_in?
      redirect_to new_user_session_path
     end
  end
  private
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name,:phone_number,:age,:stature,:weight,:sex_id,:metabolism])
  end
end
