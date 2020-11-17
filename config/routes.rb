Rails.application.routes.draw do
  devise_for :users
  root to: "calories#index"
  get 'calories' => "calories#new"
  get 'users/:id' => "users#metabolism"
  get 'users' => "users#registrations"
  get 'targets' => "targets#new"
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
  resources :targets, only: [:new,:create,:update] do
    collection do
      get 'target_index'
    end
  end
end