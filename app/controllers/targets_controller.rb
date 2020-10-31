class TargetsController < ApplicationController

  def new
    if current_user.target
      @target = Target.find(current_user.target.id)
    else
      @target = Target.new
    end
  end

  def create
    @target = Target.new(params_target)
    if @target.valid?
     if @target.weight > current_user.weight
       @target.errors.add(:weight, "は現状より小さい数値を入力してください") 
       render :new
     elsif @target.math_intake == 0
      @target.errors.add(:intake, "が基礎代謝量よりも低いため目標体重または目標期間を変更してください")
      render :new
     else
      if @target.save
       redirect_to root_path
      else
       render :new
      end
     end
     else
      if @target.intensity != nil && @target.math_intake == 0
        @target.errors.add(:intake, "が基礎代謝量よりも低いため目標体重または目標期間を変更してください")
      end
      render :new
     end
  end

  def update
    @target = Target.find(params[:id])
    target = Target.new(params_target)
    num = target.math_intake
  if ((params[:target][:weight] > current_user.weight ) || (params[:intensity] != nil && num == 0)) && target.valid?
    if params[:target][:weight] > current_user.weight
      @target.errors.add(:weight, "は現状より小さい数値を入力してください") 
      render :new
    end
    if params[:intensity] != nil && num == 0
        @target.errors.add(:intake, "が基礎代謝量よりも低いため目標体重または目標期間を変更してください")
        render :new
    end
  else
    if @target.update(params_target)
      redirect_to root_path
     else
      render :new
    end
  end
  end

  private

  def params_target
    params.require(:target).permit(:weight, :date).merge(params.permit(:intensity,:intake)).merge(user_id: current_user.id)
  end
end
