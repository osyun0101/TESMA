class CaloriesController < ApplicationController
  def index
    
  end
  def new
    @calory = Calory.new
  end

  def create
     @calory = Calory.new(params_calory)
     date = Date.today
     date_str = date.to_s
     if date_str.slice(-2) == "0"
      date_str.slice!(-2)
      @calory.create_date = date_str
     else
      @calory.create_date = date_str
     end
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
