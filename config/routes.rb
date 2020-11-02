Rails.application.routes.draw do
  devise_for :users
  root to: "calories#index"
  resources :calories, only: [:new,:create] do
    collection do
      get 'tesma_about'
    end
  end
  resources :users do
    collection do
      get 'metabolism'
      post 'metabolism_update'
    end
  end
  resources :targets, only: [:index,:new,:create,:update] 
end