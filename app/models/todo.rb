class Todo < ApplicationRecord
  def done?
    done_at.present?
  end
end
