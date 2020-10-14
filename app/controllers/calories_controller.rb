class CaloriesController < ApplicationController
  def index
  end
  def new
    @menu_data = MenuDatum.all
  end
  def tesma_about
    if params[:data]
      @data = params[:data]
    end
  end
end
