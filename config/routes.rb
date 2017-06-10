Rails.application.routes.draw do
  root to: 'todo#index'

  resources :todo, only: [:index, :create, :update, :destroy] do
    get :list, on: :collection
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
