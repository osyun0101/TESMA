class CaloriesController < ApplicationController
  def index
    
  end
  def new
    @meat_data = MenuDatum.all
    @pig_data = Pig.all
    @bird_data = Bird.all
    @egg_data = Egg.all
    @fish_data = Fish.all
  end
  def tesma_about
    if params[:data]
      @data = params[:data]
    end
  end
end
