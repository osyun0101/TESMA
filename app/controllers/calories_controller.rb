class CaloriesController < ApplicationController
  def index
    
  end
  def new
    @meat_data = MenuDatum.all
    @pig_data = Pig.all
  end
  def tesma_about
    if params[:data]
      @data = params[:data]
    end
  end
end
