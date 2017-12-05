#  Boilerplate for hapi application

- Basic folder structuring set up for hapi js api
- `app` contains the application entities like models, controllers and server
- `db` contains migrations and seeders
- `tests` contains the tests for all apis and helpers

## Packages used 

- chai, mocha and sinon for testing
- good for logging
- boom for error reporitng 
- swagger for api documentation
- joi for model validation
- sequelize for ORM
- mysql for DB
- redis for cache
- jwt and bcrypt for auth

## Overview

API written with best practices.

## Naming Conventions

CRUD followed in api, so functions for the same are written in controllers as -

C - create
R - read(for all), readOne(for one id)
U - update
D - destroy

only read is for fetching all data, other functions are for single entries.