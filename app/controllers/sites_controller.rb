class SitesController <ApplicationController

  def index
    @sites = Site.all
  end 

  def show
    @sites = Site.all
  end 
  
  def new
    @site = Site.new
  end
  
  def create
    @site.user = current_user

    if @site.save
      flash[:notice] = "New Project Created"
      redirect_to @site
    else
      flash.now[:errors] = @site.errors.full_messages.to_sentence
      redirect_to @site
    end 
  end 

  def site_params
    params.require(:site).permit(:street, :state, :country, :zipcode, :type)
  end
end 
