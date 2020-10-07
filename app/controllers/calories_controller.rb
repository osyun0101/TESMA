class CaloriesController < ApplicationController
  def index
  end
  def new
  end
  def tesma_about
    if params[:data]
      @data = params[:data]
    end
  end
end
