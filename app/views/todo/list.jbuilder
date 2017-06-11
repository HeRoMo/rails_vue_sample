json.array! @todo_list do |t|
  json.id t.id
  json.title t.title
  json.priority t.priority
  json.done t.done?
  json.done_at t.done_at
  json.created_at t.created_at
  json.updated_at t.updated_at
end

