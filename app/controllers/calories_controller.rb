class CaloriesController < ApplicationController
  def index
    
  end
  def new
    @meat_data = MenuDatum.all
    @pig_data = Pig.all
    @bird_data = Bird.all
    @egg_data = Egg.all
    @fish_data = Fish.all
    @shell_fish_data = ShellFish.all
    @seafood_data = Seafood.all
    @paste_data = Paste.all
    @fish_egg_data = FishEgg.all
    @seaweed_data = Seaweed.all
    @rice_data = Rice.all
    @vegetable_data = Vegetable.all
    @noodle_data = Noodle.all
  end
  def tesma_about
    if params[:data]
      @data = params[:data]
    end
  end
end
