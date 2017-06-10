class TodoController < ApplicationController
  def list
    @todo_list = Todo.all
  end

  def index
  end

  def update
    Todo.update todo_params

  end

  def create
    Todo.create todo_params
  end

  def destroy
    Todo.destroy params[:id]
  end

  private
  def todo_params
    params.require(:todo).permit(:title, :done_at)
  end
end
