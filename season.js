import axios from 'axios';
import cheerio from 'cheerio';

const BASE_URL = 'https://myanimelist.net/anime/season';

export const getSeason = async({list = [], year, season}) => {
    const response = await axios.get(`${BASE_URL}/${year}/${season}`);
    const $ = cheerio.load(response.data);
  
    $('.js-anime-category-producer').each((i, element) => { 
        list.push({
          animeTitle: $(element).find('.title').find('h2 a').text().trim(),
          animeScore: parseFloat($(element).find('.js-score').text()) || 0,
          animeImage: $(element).find('.image a img').attr('src'),
          releaseDate: $(element).find('.item:nth-child(1)').text(),
          synopsis: $(element).find('.preline').text(),
          studio: $(element).find('.property:nth-child(1) a').text(),
          source: $(element).find('.property:nth-child(2) .item').text(),
          theme: $(element).find('.property:nth-child(3) .item a').text(),
          demographic: $(element).find('.property:nth-child(4) .item a').text()
        });
    });
  return list
  }