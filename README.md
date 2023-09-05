# React and Laravel CRUD

A brief description of what this project does and who it's for


## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://choosealicense.com/licenses/mit/)
<a href="https://github.com/dmarsal90/dmarsal90"><img src="https://img.shields.io/badge/status-updating-brightgreen.svg"></a> 


## Run Locally

Clone the project

```bash
  git clone https://github.com/dmarsal90/react-laravel.git
```

Go to the project directory

Navagate to the backend and frontend folder, install dependencies and start the server

For the backend
```bash
  cd api 
  composer install
  php artisan serve 
```
if you want to have some sample data run
```bash
    php artisan migrate
    php artisan db:seed 
```
or
```bash
    php artisan migrate --seed
```
For the frontend
```bash
  cd front
  npm install
  npm run dev
```




## Deployment

To deploy this project run

```bash
  npm run deploy
```


## Author

- [@dmarsal90](https://www.github.com/dmarsal90)
