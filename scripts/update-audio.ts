import fs from 'fs';
import path from 'path';
import { units, Unit, Lesson, Word } from '../src/data/units';
import { crawlOxfordWord } from '../src/lib/oxford-crawler';

async function updateAudio() {
    console.log("Starting audio update...");
    const updatedUnits: Unit[] = [];

    for (const unit of units) {
        console.log(`Processing unit: ${unit.id}`);
        const updatedLessons: Lesson[] = [];

        for (const lesson of unit.lessons) {
            console.log(`  Processing lesson: ${lesson.id}`);
            const newWords: Word[] = [];

            for (const word of lesson.words) {
                console.log(`    Crawling word: ${word.text}`);
                if (word.audioUK && word.audioUS) {
                    // console.log(`      Audio already exists, skipping.`);
                    newWords.push(word);
                    continue;
                }

                // Wait a bit to be nice to the server
                await new Promise(r => setTimeout(r, 500));

                try {
                    const result = await crawlOxfordWord(word.text);
                    newWords.push({
                        ...word,
                        phoneticUK: result.phoneticUK || word.phoneticUK,
                        phoneticUS: result.phoneticUS || word.phoneticUS,
                        audioUK: result.audioUK || word.audioUK,
                        audioUS: result.audioUS || word.audioUS
                    });
                } catch (error) {
                    console.error(`      Error crawling word ${word.text}:`, error);
                    newWords.push(word); // Keep original if failed
                }
            }
            updatedLessons.push({ ...lesson, words: newWords });
        }
        updatedUnits.push({ ...unit, lessons: updatedLessons });
    }

    const fileContent = `export interface Word {
  text: string;
  phoneticUK?: string;
  phoneticUS?: string;
  audioUK?: string;
  audioUS?: string;
}

export type LessonType = 'single' | 'pair';

export interface Lesson {
  id: string;
  type: LessonType;
  title: string;
  description?: string;
  sound: string;
  targetSounds: string[];
  words: Word[];
}

export interface Unit {
  id: string;
  title: string;
  description?: string;
  lessons: Lesson[];
}

export const units: Unit[] = ${JSON.stringify(updatedUnits, null, 2)};
`;

    fs.writeFileSync(path.join(__dirname, '../src/data/units.ts'), fileContent);
    console.log("Done! Updated src/data/units.ts");
}

updateAudio().catch(console.error);
