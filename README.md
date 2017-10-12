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
/read/:slug | Details of specific article
/category/:cater | Specific list of articles based on specific category
/author/:author | Specific list of articles based on specific author

#### Struktur Backend
Path | Keterangan
--- | ---
/ | Main Page : open access for everyone w/o login/signup
/read/:slug | Details of specific article
/category/:cater | Specific list of articles based on specific category
/author/:author | Specific list of articles based on specific author
/login | Login and Register page
/post | New Article Submit Page
/:articleId | Edit Specific Article Page

#### Installing at local
git clone https://github.com/Yosua1011/Hacktivpress.git

###### cd Hacktivpress/client/; npm i

###### cd ../server; npm i

##### to run the program:

on client folder:

###### npm run dev

on server folder:

###### npm run dev
