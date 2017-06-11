class TodoController < ApplicationController

  def list
    @todo_list = Todo.all
  end

  def index; end
  def vuex; end

  def update
    @todo = Todo.find params[:id]
    if params[:done]
      @todo.update(done_at: Time.now)
    else
      @todo.update(done_at: nil)
    end
  end

  def create
    @todo = Todo.create todo_params
  end

  def destroy
    Todo.destroy params[:id]
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :priority, :done)
  end
end
