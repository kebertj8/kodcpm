Rails.application.routes.draw do
  devise_for :users
  root 'static_pages#index'
  get '/projects', to: 'static_pages#index'
  get '/stages', to: 'static_pages#index'
  get '/cpm', to: 'static_pages#index'
  get '/profits', to: 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :sites, only: [:index, :show, :new, :create]
      resources :users, only: [:index, :show, :create]
    end 
  end 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
