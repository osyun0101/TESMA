class CaloriesController < ApplicationController
  def index
    
  end
  def new
    @calory = Calory.new
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
