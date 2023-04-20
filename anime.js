import axios from 'axios';
import cheerio from 'cheerio';

const BASE_URL = 'https://myanimelist.net';
const search = '/anime.php'
const allAnime = '/topanime.php';
const topAiring = '/topanime.php?type=airing';
const upComing = '/topanime.php?type=upcoming';
const tvSeries = '/topanime.php?type=tv';
const movie = '/topanime.php?type=movie';
const ova = '/topanime.php?type=ova';
const ona = '/topanime.php?type=ona';
const special = '/topanime.php?type=special';
const popular = '/topanime.php?type=bypopularity';
const favorite = '/topanime.php?type=favorite';

export const searchAnime = async({ list = [], q, show = 0 }) => {
  const searchResponse = await axios.get(`${BASE_URL + search}?q=${q}&show=${show}`);
  const $ = cheerio.load(searchResponse.data);

  $('tr').each((i, element) => {
      const animeImage = $(element).find('.borderClass .picSurround .hoverinfo_trigger img').attr('data-src');
      const convertedImage = animeImage ? animeImage.replace('/r/50x70/', '/').replace('.jpg', 'l.jpg') : null;
     
      list.push({
          animeTitle: $(element).find('.borderClass:nth-child(2) .title a strong').text(),
          animeScore: parseFloat($(element).find('.ac:nth-child(5)').text().trim()) || 0,
          type: $(element).find('.ac:nth-child(3)').text().trim(),
          episode: parseInt($(element).find('.ac:nth-child(4)').text().trim()) || 0,
          animeImage: convertedImage,
          thumbnail: animeImage
      });
  });
  list.splice(0,9)
  return list
}

const getAnime = async (path, limit) => {
    const response = await axios.get(BASE_URL + path, { params:limit });
    const $ = cheerio.load(response.data);
    const list = [];
  
    $('.ranking-list').each((i, element) => {
      const typeText = $(element).find('.detail .information').text().trim();
      const typeMatch = typeText.match(/(special|ova|ona|tv|music|movie)/i);
      const type = typeMatch ? typeMatch[0] : null;
  
      list.push({
        animeTitle: $(element).find('.detail h3 a').text(),
        animeScore: parseFloat($(element).find('.score .text').text()) || 0,
        type: type,
        episode: parseInt($(element).find('.detail .information').first().text().trim().split(/\s*\(\s*(\d+)\s*eps?\s*\)\s*/)[1]) || 0,
        animeImage: $(element).find('.title .hoverinfo_trigger img').attr('data-src').replace('/r/50x70/', '/').replace('.jpg', 'l.jpg'),
        thumbnail: $(element).find('.title .hoverinfo_trigger img').attr('data-src'),
        releaseDate: $(element).find('.detail .information').first().text().trim().split('\n')[1].trim(),
      });
    });
    return list;
  };

export const getAllAnime = (limit) => getAnime(allAnime, limit)
export const getTopAiring = (limit) => getAnime(topAiring, limit)
export const getUpComing = (limit) => getAnime(upComing, limit)
export const getTvSeries = (limit) => getAnime(tvSeries, limit)
export const getMovie = (limit) => getAnime(movie, limit)
export const getOva = (limit) => getAnime(ova, limit)
export const getOna = (limit) => getAnime(ona, limit)
export const getSpecial = (limit) => getAnime(special, limit)
export const getPopular = (limit) => getAnime(popular, limit)
export const getFavorite = (limit) => getAnime(favorite, limit)