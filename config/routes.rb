Rails.application.routes.draw do
  root to: "calories#index"
  resources :calories, only: :new
end
