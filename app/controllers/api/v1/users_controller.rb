class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user!, except: [:show, :index]
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: User.all
  end

  def show
    user = User.where(user: current_user)
    render json: user
  end

  def create
    new_site = Site.new(site_params)
    site = Site.find(params[:userId])
    new_site.user = user
    if new_site.save
      render json: User.where(user: current_user) && new_site
    else
      render json: new_site.errors
    end 
  end 
  private
  def site_params
    params.require(:site).permit(:street, :state, :country, :zipcode, :type)
  end 
end