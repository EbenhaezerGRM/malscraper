
# malscraper

Get data from https://myanimelist.net 


## Features

- Get season
- Search anime (all type)
- Get all top anime
- Get top airing anime
- Get top upcoming anime
- Get top anime tv
- Get top anime movie
- Get top anime ova
- Get top anime ona
- Get top anime special
- Get most popular
- Get most favorite
- Search manga (all type)
- Get all top manga
- Get top manga
- Get top one-shot
- Get top doujinshi
- Get top light novel
- Get top novel
- Get top manhwa
- Get top manhua
- Get most popular
- Get most favorite



## Installation (Local)

Run the following command to clone the repository, and install the dependencies:

```bash
  git clone https://github.com/EbenhaezerGRM/malscraper
  cd malscraper
  npm install
  npm start
```

Now the server is running on http://localhost:3000

## Routes

#### Home
http://localhost:3000

## Season 

#### Get Season

http://localhost:3000/anime/season

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `year` | `int` | 1917 - present|
| `season` | `string` | winter / spring / summer / fall|

## Anime

#### Get Search Anime

http://localhost:3000/anime/search?q=horimiya

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `q` | `string` | anime title|
| `cat` | `string` | anime |
| `show` | `int` | list starts from|

#### Get All Top Anime
Top airing, upcoming, tv, movie, ova, ona, special,
most popular, most favorite

http://localhost:3000/anime

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `limit` | `int` | limits how many items can be displayed|

#### Get Top Airing Anime

http://localhost:3000/anime/airing

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `limit` | `int` | list starts from|

#### Get Top Upcoming Anime

http://localhost:3000/anime/upcoming

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `limit` | `int` | list starts from|

#### Get Top Anime TV 

http://localhost:3000/anime/tv

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `limit` | `int` | list starts from|

#### Get Top Anime Movie 

http://localhost:3000/anime/movie

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `limit` | `int` | list starts from|

#### Get Top Anime OVA 

http://localhost:3000/anime/ova

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `limit` | `int` | list starts from|

#### Get Top Anime ONA 

http://localhost:3000/anime/ona

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `limit` | `int` | list starts from|

#### Get Top Anime Special 

http://localhost:3000/anime/special

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `limit` | `int` | list starts from|

#### Get Most Popular Anime

http://localhost:3000/anime/popular

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `limit` | `int` | list starts from|

#### Get Most Favorite Anime

http://localhost:3000/anime/favorite

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `limit` | `int` | list starts from|

## Manga

#### Get Search Manga 

http://localhost:3000/manga/search?q=kaguya

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `q` | `string` | manga title|
| `cat` | `string` | manga |
| `show` | `int` | list starts from|

#### Get All Top Manga
Top manga, one-shot, doujinshi, light novel, novel, manhwa, 
manhua, most popular, most favorite

http://localhost:3000/manga

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `limit` | `int` | list starts from|

#### Get Top Manga

http://localhost:3000/manga/top

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `limit` | `int` | list starts from|

#### Get Top One-shot

http://localhost:3000/manga/oneshot

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `limit` | `int` | list starts from|

#### Get Top Doujinshi

http://localhost:3000/manga/doujin

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `limit` | `int` | list starts from|

#### Get Top Light Novel

http://localhost:3000/manga/lightnovel

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `limit` | `int` | list starts from|

#### Get Top Novel

http://localhost:3000/manga/novel

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `limit` | `int` | list starts from|

#### Get Top Manhwa

http://localhost:3000/manga/manhwa

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `limit` | `int` | list starts from|

#### Get Top Manhua

http://localhost:3000/manga/manhua

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `limit` | `int` | list starts from|

#### Get Most Popular Manga

http://localhost:3000/manga/popular

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `limit` | `int` | list starts from|

#### Get Most Favorite Manga

http://localhost:3000/manga/favorite

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `limit` | `int` | list starts from|
