class StaticPagesController < ApplicationController
  def index
  end

  def new
    render :'/static_pages/index'
  end 
end