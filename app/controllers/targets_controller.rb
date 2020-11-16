class TargetsController < ApplicationController
  before_action :user_session, only: [:new,:target_index,:create,:update]
  before_action :data_calories, only: [:target_index]
  before_action :data_target, only: [:target_index]

  def target_index
    calory = Calory.where(user_id: current_user.id)
    
    @data = create_array(calory)
    @progress = progress_data(calory)
  end

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

  def create_array(calory)
    str = ""
    kcal = 0
    calory.each_with_index do |t, i|
      if calory[i+1] != nil && (t[:create_date] == calory[i+1][:create_date])
        kcal += t[:calory]
      else
        if calory[i+1] == nil
          str += (t[:create_date].to_s+' '+(t[:calory]+kcal).to_s)
        else
          str += (t[:create_date].to_s+' '+(t[:calory]+kcal).to_s+",")
          kcal = 0
        end
      end
    end
    return str
  end

  def progress_data(calory)
    sum = 0
    calory.each do |i|
      sum += i.calory
    end
    average = (sum.to_f.rationalize/calory.length.to_f.rationalize).to_f
    remaining = (current_user.target.date-Date.today).to_i
    firekl = (current_user.metabolism.to_f.rationalize*current_user.target.intensity.to_f.rationalize).to_f
    oneday_kl = (firekl.rationalize - average.rationalize).to_f
    downweight = ((oneday_kl.rationalize*remaining.rationalize)/7000r).to_f
    progress = (current_user.weight.to_f.rationalize-downweight.rationalize).to_f
    return progress.round
  end

  def data_calories
    if (current_user.calories == [])
      redirect_to new_calory_path, alert: '＊目標進捗は摂取カロリーと目標設定が設定されると確認できます'
    end
  end

  def data_target
    if (current_user.target == nil)
      redirect_to new_target_path, alert: '＊目標進捗は摂取カロリーと目標設定が設定されると確認できます'
    end
  end
end
