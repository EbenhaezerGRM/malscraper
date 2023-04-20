import express from 'express';
const port = 3000
const app = express()
app.use(express.json());

import { 
    searchAnime, 
    getAllAnime, 
    getTopAiring, 
    getUpComing,
    getTvSeries,
    getMovie,
    getOva,
    getOna,
    getSpecial,
    getPopular,
    getFavorite,
} from './anime.js';

import {
    searchManga,
    getAllManga,
    getManga,
    getOneShot,
    getDoujinshi,
    getLightNovel,
    getNovel,
    getManhwa,
    getManhua,
    getPopularManga,
    getFavoriteManga
} from './manga.js';

import { getSeason } from './season.js';

app.get('/', (req, res) => {
    res.status(200).json('Welcome to MAL scraper')
});

//Season
app.get('/anime/season', async(req, res) => {
    try {
        const year = req.query.year
        const season = req.query.season;
        const data = await getSeason({ year: year, season: season });
        res.status(200).json(data);
    } catch (err) {
        res.status(500).send({
            status: 500,
            error: 'Internal Error',
            message: err,
        });
    }
});

//Anime
app.get('/anime/search' , async(req, res) => {
    try{
        const q = req.query.q
        const show = req.query.show

        if(q.length < 3){
            return res.status(202).json([]);
        }
        
        const data = await searchAnime({ q: q, show: show})
        res.status(200).json(data);
    }catch(err){
        res.status(500).json({
            status: 500,
            error: 'Internal Error',
            message: err,
        });
    }
});

app.get('/anime' , async(req, res) => {
    try{
        const limit = req.query.limit
        const data = await getAllAnime({ limit: limit })
        res.status(200).json(data);
    }catch(err){
        res.status(500).json({
            status: 500,
            error: 'Internal Error',
            message: err,
        });
    }
});

app.get('/anime/airing' , async(req, res) => {
    try{
        const limit = req.query.limit
        const data = await getTopAiring({ limit: limit })
        res.status(200).json(data);
    }catch(err){
        res.status(500).json({
            status: 500,
            error: 'Internal Error',
            message: err,
        });
    }
});

app.get('/anime/upcoming' , async(req, res) => {
    const limit = req.query.limit
    const data = await getUpComing({ limit: limit })
    res.status(200).json(data);
})

app.get('/anime/tv' , async(req, res) => {
    try{
        const limit = req.query.limit
        const data = await getTvSeries({ limit: limit })
        res.status(200).json(data);
    }catch(err){
        res.status(500).json({
            status: 500,
            error: 'Internal Error',
            message: err,
        });
    }
});

app.get('/anime/movie' , async(req, res) => {
    try{
        const limit = req.query.limit
        const data = await getMovie({ limit: limit })
        res.status(200).json(data);
    }catch(err){
        res.status(500).json({
            status: 500,
            error: 'Internal Error',
            message: err,
        });
    }
});

app.get('/anime/ova' , async(req, res) => {
    try{
        const limit = req.query.limit
        const data = await getOva({ limit: limit })
        res.status(200).json(data);
    }catch(err){
        res.status(500).json({
            status: 500,
            error: 'Internal Error',
            message: err,
        });
    }
});

app.get('/anime/ona' , async(req, res) => {
    try{
        const limit = req.query.limit
        const data = await getOna({ limit: limit })
        res.status(200).json(data);
    }catch(err){
        res.status(500).json({
            status: 500,
            error: 'Internal Error',
            message: err,
        });
    }
});

app.get('/anime/special' , async(req, res) => {
    try{
        const limit = req.query.limit
        const data = await getSpecial({ limit: limit })
        res.status(200).json(data);
    }catch(err){
        res.status(500).json({
            status: 500,
            error: 'Internal Error',
            message: err,
        });
    }
});

app.get('/anime/popular' , async(req, res) => {
    try{
        const limit = req.query.limit
        const data = await getPopular({ limit: limit })
        res.status(200).json(data);
    }catch(err){
        res.status(500).json({
            status: 500,
            error: 'Internal Error',
            message: err,
        });
    }
});

app.get('/anime/favorite' , async(req, res) => {
    try{
        const limit = req.query.limit
        const data = await getFavorite({ limit: limit })
        res.status(200).json(data);
    }catch(err){
        res.status(500).json({
            status: 500,
            error: 'Internal Error',
            message: err,
        });
    }
});

//Manga
app.get('/manga/search' , async(req, res) => {
    try{
        const q = req.query.q;
        const show = req.query.show

        if(q.length < 3){
            return res.status(200).json([]);
        }

        const data = await searchManga({ q: q, show: show})
        res.status(200).json(data);
    }catch(err){
        res.status(500).json({
            status: 500,
            error: 'Internal Error',
            message: err,
        });
    }
});

app.get('/manga' , async(req, res) => {
    try{
        const limit = req.query.limit
        const data = await getAllManga({ limit: limit })
        res.status(200).json(data);
    }catch(err){
        res.status(500).json({
            status: 500,
            error: 'Internal Error',
            message: err,
        });
    }
});

app.get('/manga/top' , async(req, res) => {
    try{
        const limit = req.query.limit
        const data = await getManga({ limit: limit })
        res.status(200).json(data);
    }catch(err){
        res.status(500).json({
            status: 500,
            error: 'Internal Error',
            message: err,
        });
    }
});

app.get('/manga/oneshot' , async(req, res) => {
    try{
        const limit = req.query.limit
        const data = await getOneShot({ limit: limit })
        res.status(200).json(data);
    }catch(err){
        res.status(500).json({
            status: 500,
            error: 'Internal Error',
            message: err,
        });
    }
});

app.get('/manga/doujin' , async(req, res) => {
    try{
        const limit = req.query.limit
        const data = await getDoujinshi({ limit: limit })
        res.status(200).json(data);
    }catch(err){
        res.status(500).json({
            status: 500,
            error: 'Internal Error',
            message: err,
        });
    }
});

app.get('/manga/lightnovel' , async(req, res) => {
    try{
        const limit = req.query.limit
        const data = await getLightNovel({ limit: limit })
        res.status(200).json(data);
    }catch(err){
        res.status(500).json({
            status: 500,
            error: 'Internal Error',
            message: err,
        });
    }
});

app.get('/manga/novel' , async(req, res) => {
    try{
        const limit = req.query.limit
        const data = await getNovel({ limit: limit })
        res.status(200).json(data);
    }catch(err){
        res.status(500).json({
            status: 500,
            error: 'Internal Error',
            message: err,
        });
    }
});

app.get('/manga/manhwa' , async(req, res) => {
    try{
        const limit = req.query.limit
        const data = await getManhwa({ limit: limit })
        res.status(200).json(data);
    }catch(err){
        res.status(500).json({
            status: 500,
            error: 'Internal Error',
            message: err,
        });
    }
});

app.get('/manga/manhua' , async(req, res) => {
    try{
        const limit = req.query.limit
        const data = await getManhua({ limit: limit })
        res.status(200).json(data);
    }catch(err){
        res.status(500).json({
            status: 500,
            error: 'Internal Error',
            message: err,
        });
    }
});

app.get('/manga/popular' , async(req, res) => {
    try{
        const limit = req.query.limit
        const data = await getPopularManga({ limit: limit })
        res.status(200).json(data);
    }catch(err){
        res.status(500).json({
            status: 500,
            error: 'Internal Error',
            message: err,
        });
    }
});

app.get('/manga/favorite' , async(req, res) => {
    try{
        const limit = req.query.limit
        const data = await getFavoriteManga({ limit: limit })
        res.status(200).json(data);
    }catch(err){
        res.status(500).json({
            status: 500,
            error: 'Internal Error',
            message: err,
        });
    }
});

app.use((req, res) => {
    res.status(404).json({
        status: 404,
        error: 'Not Found',
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})