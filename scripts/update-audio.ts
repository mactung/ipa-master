import fs from 'fs';
import path from 'path';
import { ipaPairs, IPAPair, Word } from '../src/data/ipa-pairs';
import { crawlOxfordWord } from '../src/lib/oxford-crawler';

async function updateAudio() {
    console.log("Starting audio update...");
    const updatedPairs: IPAPair[] = [];

    for (const pair of ipaPairs) {
        console.log(`Processing pair: ${pair.id}`);
        // Create a deep copy of examples
        const newExamples: Word[] = [];

        for (const word of pair.examples) {
            console.log(`  Crawling word: ${word.text}`);
            if (word.audioUK && word.audioUS) {
                console.log(`    Audio already exists, skipping.`);
                newExamples.push(word);
                continue;
            }

            // Respect existing manual overrides (like the one we just added for 'it')?
            // Actually, the crawler is likely better, but let's check.
            // If the user manually fixed 'it', we might want to keep it OR see if crawler gets it right.
            // Let's rely on the crawler, but if it fails, fallback to existing or generate.

            // Wait a bit to be nice to the server
            await new Promise(r => setTimeout(r, 500));

            const result = await crawlOxfordWord(word.text);

            newExamples.push({
                ...word,
                phoneticUK: result.phoneticUK || word.phoneticUK,
                phoneticUS: result.phoneticUS || word.phoneticUS,
                audioUK: result.audioUK || word.audioUK, // Crawler result takes precedence over existing if found
                audioUS: result.audioUS || word.audioUS
            });
        }

        updatedPairs.push({
            ...pair,
            examples: newExamples
        });
    }

    // Generate the new file content
    // We need to format this nicely as a TS file
    // We will assume the structure of ipa-pairs.ts and just replace the data.
    // Or simpler: Write a new file entirely.

    const fileContent = `export interface Word {
  text: string;
  phoneticUK?: string;
  phoneticUS?: string;
  audioUK?: string;
  audioUS?: string;
}

export interface IPAPair {
  id: string;
  name: string;
  sound1: string;
  sound2: string;
  description?: string;
  examples: Word[];
}

export const ipaPairs: IPAPair[] = ${JSON.stringify(updatedPairs, null, 2)};
`;

    fs.writeFileSync(path.join(__dirname, '../src/data/ipa-pairs.ts'), fileContent);
    console.log("Done! Updated src/data/ipa-pairs.ts");
}

updateAudio().catch(console.error);
