class TargetsController < ApplicationController

  def new
    @target = Target.new
  end

  def create
    @target = Target.new(params_target)
    if @target.weight.to_i >= 1
    @target.intake = @target.math_intake
    end
    if @target.intake == "i" && @target.weight > current_user.weight
      @target.errors.add(:intake, "が基礎代謝量よりも低いため設定を変更してください") 
      @target.errors.add(:weight, "は現状より小さい数値を入力してください") 
      render :new
    elsif @target.weight > current_user.weight
      @target.errors.add(:weight, "は現状より小さい数値を入力してください") 
      render :new
    elsif @target.intake == "i"
      @target.errors.add(:intake, "が基礎代謝量よりも低いため設定を変更してください")
      render :new
    else
     if @target.save
      redirect_to root_path
     else
      render :new
     end
    end
  end

  private

  def params_target
    params.require(:target).permit(:weight, :date).merge(params.permit(:intensity)).merge(user_id: current_user.id)
  end
end
