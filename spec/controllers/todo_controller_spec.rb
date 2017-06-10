require 'rails_helper'

RSpec.describe TodoController, type: :controller do

  describe "GET #list" do
    it "returns http success" do
      get :list
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

  describe "PUT #update" do
    it "returns http success" do
      put :update, params: { id: 1, todo: { title: 'updated' } }
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST #create" do
    it "returns http success" do
      post :create, params: { todo: { title: 'test todo' } }
      expect(response).to have_http_status(:success)
    end
  end

  describe "DELETE #destroy" do
    it "returns http success" do
      todo = FactoryGirl.create(:todo)
      delete :destroy, params: { id: todo.id }
      expect(response).to have_http_status(:success)
    end
  end

end
