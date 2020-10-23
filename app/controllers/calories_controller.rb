class CaloriesController < ApplicationController
  def index
    
  end
  def new
    @calory = Calory.new
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
    @bean_data = Bean.all
    @nut_data = Nut.all
    @potato_data = Potato.all
    @fruit_data = Fruit.all
    @mushroom_data = Mushroom.all
    @milk_data = Milk.all
    @oil_data = Oil.all
    @seasoning_data = Seasoning.all
  end

  def create
     @calory = Calory.new(params_calory)
     if @calory.save
      redirect_to root_path
     else
      render :new
     end
  end

  def tesma_about
    if params[:data]
      @data = params[:data]
    end
  end

  private

  def params_calory
    params.require(:calory).permit(:calory).merge(user_id: current_user.id)
  end
end
