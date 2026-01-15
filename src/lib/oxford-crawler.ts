import * as cheerio from 'cheerio';

interface CrawlResult {
    phoneticUK?: string;
    phoneticUS?: string;
    audioUK?: string;
    audioUS?: string;
}

export async function crawlOxfordWord(word: string): Promise<CrawlResult> {
    try {
        const url = `https://www.oxfordlearnersdictionaries.com/definition/english/${word.toLocaleLowerCase()}?q=${word.toLocaleLowerCase()}`;
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36'
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch ${url}`);
        }

        const html = await response.text();
        const $ = cheerio.load(html);

        // Select selectors based on the HTML structure I observed
        const ukContainer = $('.phons_br').first();
        const usContainer = $('.phons_n_am').first();

        const phoneticUK = ukContainer.find('.phon').text();
        const audioUK = ukContainer.find('.sound').attr('data-src-mp3');

        const phoneticUS = usContainer.find('.phon').text();
        const audioUS = usContainer.find('.sound').attr('data-src-mp3');

        return {
            phoneticUK,
            phoneticUS,
            audioUK,
            audioUS
        };
    } catch (error) {
        console.error(`Error crawling word ${word}:`, error);
        return {};
    }
}
