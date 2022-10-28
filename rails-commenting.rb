# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
class BlogPostsController < ApplicationController
  def index # here we define a controller method. The name  of the method -> index. This method represents Get request. That means    the Index method will interact with our BD and display the user the list of all Blog posts. It looks like an index of the book on the first page, that shows what is in the book -> for example: table of contents
    
    # ---2)
    @posts = BlogPost.all # here we create an instance variable and we will store in it our command -> BlogPost.all -> which will show the list of all Posts (from rails console). Since it will be a list of all posts the variable name is in plural -> @ posts 
    # Additionally, -> BlogPost.all -> is an Active Record query. 
  end

  # ---3)
  def show # here we define a controller method. The name  of the method -> show. 
    # Show is a RESTful route. 
    # This method represents Get request. 
    # The Show method shows us the ditails of just one thing requested. To get access to that one thing we use -> params. 
    @post = BlogPost.find(params[:id]) # params gives us access to collect the data from the url wich will have an -> id.
    # id -> will change depending on which BlogPost I want to find. 
    # We create command/make an Active Record call -> BlogPost.find -> to find the post with particular id. 
    # We create a new variable -> @post -> to store the find command. 
    # NB! -> the name of our new variable is in singular now, since we need only 1 item to be returned -> @post.
  end

  # ---4)
  def new # here we define a controller method. The name  of the method -> new. 
    # The NEW method represents Get request.
    # New is a RESTful route.  
    # The method NEW displays the form. The user fills out the form, and we take that data to our DB.
    @post = BlogPost.new # we created a variable -> @post -> and we will store there our command BlogPost.new
  end

  def create
    # ---5)
    @post = BlogPost.create(blog_post_params) # inside of create class we call strong params method -> blog_post_params
    if @post.valid? # we create a conditional statement in the create method -> if new entry to the DB is made successfully -> then redirect. This is for user experience, so user can see on a page if the post was created successfully 
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    @post = BlogPost.find(params[:id]) # we create an instance variable @post, and use .find to find a particular post by id to edit it. 
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    @post.update(blog_post_params) # we are using method .update to update our post. 
    # we are passing a strong_params -> blog_post_params since we are making changes in a database and we are only allowed to change the columns that are defined by strong_params. 
    if @post.valid?     # for the better user experience we create a conditional -> if post created successfully -> redirect to blog_post page. 
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      redirect_to blog_posts_path # we created an action ->  if @post.destroy (if post deleted) -> redirect to blog_posts page(which I assume -> our index page)
     end
  end

  # ---9)
  private # we use a Ruby keyword -> private that protect anything below it from being accessed outside the scope of the class.
  def blog_post_params # we create a special method called -> strong_params -> in our case it is blog_post_params, where blog_post is a name of a model. 
    # this strong_params method is only allowed to be called in a context of the particular class.
    # ---10)
    params.require(:blog_post).permit(:title, :content) # inside of our strong_params we require that the table -> blog_post permits only the columns -> title  and content can be changed (updated, edited)
  end
end
