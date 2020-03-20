class Api::V1::SitesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json }
  
  def index
    render json: Site.all
  end 
  
  def show
    site = Site.find(params[:id])
    render json: {site:site}
  end 
end