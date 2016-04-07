class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  respond_to :json

  # This is a bad practice, a welcome controller is the best alternative
  def angular
    render 'layouts/application'
  end
end
