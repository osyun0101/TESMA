class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?

  private
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name,:first_name,:first_name_kana,:last_name,:last_name_kana,:phone_number,:birth_date])
  end
end
