Rails.application.routes.draw do
  devise_for :users
  root to: "calories#index"
  get 'calories' => "calories#new"
  get 'users/:id' => "users#metabolism"
  resources :calories, only: [:new,:create] do
    collection do
      get 'tesma_about'
    end
  end
  resources :users, only: [:update] do
    collection do
      get 'metabolism'
    end
  end
  resources :targets, only: [:index,:new,:create,:update] 
end