# Simple Books Web App

## Prerequesites
 * Python 3
 * Node 13 or higher

## Backend setup

    sudo apt-get update

### Virtual Enviroment
Create virtual enviroment outside repository. Make sure to specify python version.

Command should have this format:

    virtualenv NAME --python=/PATH/TO/PYTHON3  

Example 

    virtualenv venv --python=/usr/bin/python3.6 

>**Side note**: typing *which python3* in your terminal will return a path

Activate virtual enviroment

    soure venv/bin/activate

Naviagate into the folder *back* and install requirement.

    pip install requirements.txt

Create initial migrations in Django

    python manage.py migrate

> An sqlite file should have been generated.

Start server

    python manage.py runserver

Open graphql UI in your browser

http://localhost:8000/graphql/


## Frontend setup

In a seperate terminal that does not have virtual enviroment activated navigate into the *front* folder and install node packages.

    npm install

Run frontend server

    npm run start

Open web app in your browser

http://localhost:5000/

:thumbsup:

:smile:



