Rails.application.routes.draw do
  root to: "calories#index"
  resources :calories, only: :new do
    collection do
      get 'tesma_about'
    end
  end
end
