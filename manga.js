import axios from 'axios';
import cheerio from 'cheerio';

const BASE_URL = 'https://myanimelist.net';
const search = '/manga.php';
const allManga = '/topmanga.php';
const manga = '/topmanga.php?type=manga';
const oneShot = '/topmanga.php?type=oneshots';
const doujinshi = '/topmanga.php?type=doujin';
const lightNovel = '/topmanga.php?type=lightnovels';
const novel = '/topmanga.php?type=novels';
const manhwa = '/topmanga.php?type=manhwa';
const manhua = '/topmanga.php?type=manhua';
const popular = '/topmanga.php?type=bypopularity';
const favorite = '/topmanga.php?type=favorite';

export const searchManga = async({ list = [], q, show = 0 }) => {
    const searchResponse = await axios.get(`${BASE_URL + search}?q=${q}&show=${show}`);
    const $ = cheerio.load(searchResponse.data);
  
    $('tr').each((i, element) => {
        const mangaImage = $(element).find('.borderClass .picSurround .hoverinfo_trigger img').attr('data-src');
        const convertedImage = mangaImage ? mangaImage.replace('/r/50x70/', '/').replace('.jpg', 'l.jpg') : null;
        const volumeMatch = ($(element).find('.ac:nth-child(4)').text().trim());
        const volume = volumeMatch ? parseInt(volumeMatch) || 0 : 0;
       
        list.push({
            mangaTitle: $(element).find('.borderClass:nth-child(2) a strong').text(),
            mangaScore: parseFloat($(element).find('.score .text').text()) || 0,
            type: $(element).find('.ac:nth-child(3)').text().trim(),
            volume: volume,
            mangaImage: convertedImage,
            thumbnail: mangaImage
        });
    });
    list.splice(0,8)
    return list
  }

const getMangaList = async (path, limit) => {
    const response = await axios.get(BASE_URL + path, { params:limit });
    const $ = cheerio.load(response.data);
    const list = [];
  
    $('.ranking-list').each((i, element) => {
        const typeText = $(element).find('.detail .information').text().trim();
        const typeMatch = typeText.match(/(manga|light novel|novel|manhwa|manhua|one-shot|doujinshi|)/i);
        const type = typeMatch ? typeMatch[0]: null;
        const mangaImage = $(element).find('.title .hoverinfo_trigger img').attr('data-src');
        const convertedImage = mangaImage ? mangaImage.replace('/r/50x70/', '/').replace('.jpg', 'l.jpg') : null;
        const volumeMatch = typeText.match(/(\d+) vols/i);
        const volume = volumeMatch ? parseInt(volumeMatch[1]) || 0 : 0;
  
      list.push({
        mangaTitle: $(element).find('.detail h3 a').text(),
        mangaScore: parseFloat($(element).find('.score .text').text()) || 0,
        type: type,
        volume: volume,
        mangaImage: convertedImage,
        thumbnail: mangaImage,
        releaseDate: $(element).find('.detail .information').first().text().trim().split('\n')[1].trim()
      });
    });
    return list;
  };

export const getAllManga = (limit) => getMangaList(allManga, limit)
export const getManga = (limit) => getMangaList(manga, limit)
export const getOneShot = (limit) => getMangaList(oneShot, limit)
export const getDoujinshi = (limit) => getMangaList(doujinshi, limit)
export const getLightNovel = (limit) => getMangaList(lightNovel, limit)
export const getNovel = (limit) => getMangaList(novel, limit)
export const getManhwa = (limit) => getMangaList(manhwa, limit)
export const getManhua = (limit) => getMangaList(manhua, limit)
export const getPopularManga = (limit) => getMangaList(popular, limit)
export const getFavoriteManga = (limit) => getMangaList(favorite, limit)