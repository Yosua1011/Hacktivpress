# Hacktivpress
This is my final live code assignment implementing Vue, Express, and MongoDB for a simple blog

## Struktur model
#### User Model
Field | Data Type | Descriptions
--- | --- | ----
id | String | auto generate by system
username | String | user login
password | String | password login

#### Article Model
Field | Data Type | Descriptions
--- | --- | ----
title | String | Article Title
slug | String | auto generate using npm "achim-slug"
content | String | Article Content
category | String | Article Category
author | String | user ID whom posted the article

## Directory Tree
This repository consists of two folders:

Client -> Frontend

Server -> Backend - Server API

#### Struktur Frontend
Path | Information
--- | ---
/ | Main Page : open access for everyone w/o login/signup
/:slug | Details of specific article
/newArticle | Create new article
/login | Login and Register page

#### Struktur Backend
Path | Keterangan
--- | ---
/articles | Main Page : open access for everyone w/o login/signup and alos Post New Article
/articles/slug/:slug | Details of specific article
/articles/cat/:category | Specific list of articles based on specific category
/articles/:author | Specific list of articles based on specific author
/articles/:id | Edit and Delete Specific Article Page
/signin | Login page
/signup | Sign Up page


#### Installing at local
git clone https://github.com/Yosua1011/Hacktivpress.git

###### cd Hacktivpress/client/; npm i

###### cd ../server; npm i

##### to run the program:

on client folder:

###### npm run dev

on server folder:

###### npm run dev
