# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:

The foreign key is basically another ID. We use foreign key to create an Active Records associations - in other words - a connection between two Active Records models. In particular, foreign key provides a link between data in two tables. The foreign key should be on the Student model, because Student belongs_to particular Cohort which has a particular ID. As I remember from the lecture, the Foreign Key always goes on belongs_to side. Honestly, I forgot how to add foreign key if you forgot to add it from the beginning. I need to research this part.

Researched answer:

Ok. Now I got it. In case you forgot a foreign key or made a mistake when assigning a data type or so on, you should create a migration  to update your database. Migration changes DB structure. 

$ rails generate migration add_foreign_key_to_student
This command adds a new file AddForeignKeyToStudent
In this file we have prebuilt starter code 

        def change
        end

We add changes that we want to make within of the def change method

add_foreign_key :student :cohort_id :integer

Where :student -> the name of the table we are adding it to
      :cohort_id -> the name of our new key we are adding
      :integer -> what our datatype for the new key -> cohort_id will be
                                    
Lastly, to make the changes, we run the following command in terminal:
    $ rails db:migrate

The database and schema file are now updated. 

2. Which RESTful routes must always be passed params? Why?

Such RESTful routs as Show, Update, Destroy require params. Since Show shows us the details of just one thing, we need to pass params[:id] to find a particular item by its ID, and then display it. The same situation with Update and Destroy, first we need to find a particular item by ID and then modify it.   

Your answer:

Researched answer:

There is an example as a small addition to my answer:

Inside the show  method we create command/make an Active Record call -> dog.find -> to find the dog with particular id. This ID will come from the url params.

Ex.: Def show
        @dog = Dog.find(params[:id])

3. Name three rails generator commands. What is created by each?

Your answer:

$ rail generate model -> we use it to create a new table
$ rails generate migration  -> we use generate migration to update/make changes to DB structure 
$ rails generate resource -> is mostly does everything that generate model does, but in addition it creates a resource in the routes.rb file and empty folder in the views.


Researched answer:

In addition to my answer it is worth to mention one more rails generate command -> $ rails g scaffold
It is very useful command because it can save your time. 
A scaffold is a set automatically generated files which forms the basic structure of Rails Project. 
It includes such fils as:
- a controller
- a model
- view for every standard controller action (index, edit, show, new)
A new route. 

Ex.:
rails generate scaffold dogs

it will create:
- A DogsController
- A Dog model
- A new resource :dogs route added to your config/routes.rb file
- A set of testing-related files
- View files under app/views/dogs (5 in total)

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students -> index -> displays a full list of items 

action: "POST" location: /students -> create -> adding a new content into a DB

action: "GET" location: /students/new -> new -> displays the form that user can fill out

action: "GET" location: /students/2 -> show -> shows us a details of just one thing with id_2

action: "GET" location: /students/2/edit -> edit ->  displays a form, where user can update info about student with id_2

action: "PATCH" location: /students/2 -> update -> ser can update existing info about student with id_2. User can only change one thing (Ex.: find student with id_2 and update Last Name only)

action: "DELETE" location: /students/2 -> destroy -> removing data

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a user, I can see a list of all my to do tasks.
2. As a user, I can see information about one particular task 
3. As a user, I can create a new task 
4. As a user, I can be redirected to main/index page and see if my new task was created successfully
5. As a user, I can update a particular task 
6. As a user, I can only  update the information which is allowed to be updated. 
7. As a user, I can stay on the same page, if there was an error while updating. 
8. As a user, I can fill out a form about task
9. As a user, I can edit info about my task in a form
10. As a user, I can delete particular task 

