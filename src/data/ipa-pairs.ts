export interface Word {
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

function getOxfordAudio(word: string, region: 'gb' | 'us'): string {
  const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');
  if (!cleanWord) return '';

  const L1 = cleanWord.charAt(0);
  const L3 = cleanWord.slice(0, 3).padEnd(3, '_');
  const FOLDER = cleanWord.slice(0, 5).padEnd(5, '_');
  const FILENAME = `${cleanWord}__${region}_1.mp3`;

  return `https://www.oxfordlearnersdictionaries.com/media/english/${region === 'gb' ? 'uk' : 'us'}_pron/${L1}/${L3}/${FOLDER}/${FILENAME}`;
}

const rawPairs: IPAPair[] = [
  // --- VOWELS (Monophthongs) ---
  {
    id: "i-long-vs-i-short",
    name: "Long 'i:' vs Short 'ɪ'",
    sound1: "i:",
    sound2: "ɪ",
    description: "Long 'i:' (sheep) vs Short 'ɪ' (ship)",
    examples: [
      { text: "sheep", phoneticUK: "/ʃiːp/" },
      { text: "ship", phoneticUK: "/ʃɪp/" },
      { text: "eat", phoneticUK: "/iːt/" },
      { text: "it", phoneticUK: "/ɪt/" },
      { text: "seat", phoneticUK: "/siːt/" },
      { text: "sit", phoneticUK: "/sɪt/" },
    ],
  },
  {
    id: "u-short-vs-u-long",
    name: "Short 'ʊ' vs Long 'u:'",
    sound1: "ʊ",
    sound2: "u:",
    description: "Short 'ʊ' (good) vs Long 'u:' (shoot)",
    examples: [
      { text: "full", phoneticUK: "/fʊl/" },
      { text: "fool", phoneticUK: "/fuːl/" },
      { text: "pull", phoneticUK: "/pʊl/" },
      { text: "pool", phoneticUK: "/puːl/" },
      { text: "foot", phoneticUK: "/fʊt/" },
      { text: "look", phoneticUK: "/lʊk/" },
    ],
  },
  {
    id: "e-vs-ei",
    name: "Short 'e' vs Diphthong 'eɪ'",
    sound1: "e",
    sound2: "eɪ",
    description: "Short 'e' (bed) vs Diphthong 'eɪ' (wait)",
    examples: [
      { text: "pen", phoneticUK: "/pen/" },
      { text: "pain", phoneticUK: "/peɪn/" },
      { text: "wet", phoneticUK: "/wet/" },
      { text: "wait", phoneticUK: "/weɪt/" },
      { text: "get", phoneticUK: "/get/" },
      { text: "gate", phoneticUK: "/geɪt/" }
    ],
  },
  {
    id: "ae-vs-e",
    name: "Open 'æ' vs Regular 'e'",
    sound1: "æ",
    sound2: "e",
    description: "Open 'æ' (cat) vs Regular 'e' (bed)",
    examples: [
      { text: "man", phoneticUK: "/mæn/" },
      { text: "men", phoneticUK: "/men/" },
      { text: "bad", phoneticUK: "/bæd/" },
      { text: "bed", phoneticUK: "/bed/" },
      { text: "pat", phoneticUK: "/pæt/" },
      { text: "pet", phoneticUK: "/pet/" }
    ],
  },
  {
    id: "wedge-vs-a-long",
    name: "Short 'ʌ' vs Long 'ɑ:'",
    sound1: "ʌ",
    sound2: "ɑ:",
    description: "Short 'ʌ' (up) vs Long 'ɑ:' (far)",
    examples: [
      { text: "cut", phoneticUK: "/kʌt/" },
      { text: "cart", phoneticUK: "/kɑːt/" },
      { text: "much", phoneticUK: "/mʌtʃ/" },
      { text: "march", phoneticUK: "/mɑːtʃ/" },
      { text: "bun", phoneticUK: "/bʌn/" },
      { text: "barn", phoneticUK: "/bɑːn/" }
    ],
  },
  {
    id: "o-short-vs-o-long",
    name: "Short 'ɒ' vs Long 'ɔ:'",
    sound1: "ɒ",
    sound2: "ɔ:",
    description: "Short 'ɒ' (on) vs Long 'ɔ:' (door)",
    examples: [
      { text: "cot", phoneticUK: "/kɒt/" },
      { text: "caught", phoneticUK: "/kɔːt/" },
      { text: "pot", phoneticUK: "/pɒt/" },
      { text: "port", phoneticUK: "/pɔːt/" },
      { text: "spot", phoneticUK: "/spɒt/" },
      { text: "sport", phoneticUK: "/spɔːt/" }
    ],
  },

  // --- DIPHTHONGS ---
  {
    id: "ear-vs-air",
    name: "Diphthong 'ɪə' vs 'eə'",
    sound1: "ɪə",
    sound2: "eə",
    description: "'ɪə' (here) vs 'eə' (hair)",
    examples: [
      { text: "here", phoneticUK: "/hɪə(r)/" },
      { text: "hair", phoneticUK: "/heə(r)/" },
      { text: "beer", phoneticUK: "/bɪə(r)/" },
      { text: "bear", phoneticUK: "/beə(r)/" },
      { text: "ear", phoneticUK: "/ɪə(r)/" },
      { text: "air", phoneticUK: "/eə(r)/" }
    ],
  },

  // --- CONSONANTS ---
  {
    id: "p-vs-b",
    name: "Unvoiced 'p' vs Voiced 'b'",
    sound1: "p",
    sound2: "b",
    description: "Unvoiced 'p' (pea) vs Voiced 'b' (boat)",
    examples: [
      { text: "pea", phoneticUK: "/piː/" },
      { text: "bee", phoneticUK: "/biː/" },
      { text: "pin", phoneticUK: "/pɪn/" },
      { text: "bin", phoneticUK: "/bɪn/" },
      { text: "cap", phoneticUK: "/kæp/" },
      { text: "cab", phoneticUK: "/kæb/" }
    ],
  },
  {
    id: "t-vs-d",
    name: "Unvoiced 't' vs Voiced 'd'",
    sound1: "t",
    sound2: "d",
    description: "Unvoiced 't' (tea) vs Voiced 'd' (dog)",
    examples: [
      { text: "tie", phoneticUK: "/taɪ/" },
      { text: "die", phoneticUK: "/daɪ/" },
      { text: "town", phoneticUK: "/taʊn/" },
      { text: "down", phoneticUK: "/daʊn/" },
      { text: "bat", phoneticUK: "/bæt/" },
      { text: "bad", phoneticUK: "/bæd/" }
    ],
  },
  {
    id: "k-vs-g",
    name: "Unvoiced 'k' vs Voiced 'g'",
    sound1: "k",
    sound2: "g",
    description: "Unvoiced 'k' (car) vs Voiced 'g' (go)",
    examples: [
      { text: "cap", phoneticUK: "/kæp/" },
      { text: "gap", phoneticUK: "/gæp/" },
      { text: "class", phoneticUK: "/klɑːs/" },
      { text: "back", phoneticUK: "/bæk/" },
      { text: "bag", phoneticUK: "/bæg/" }
    ],
  },
  {
    id: "f-vs-v",
    name: "Unvoiced 'f' vs Voiced 'v'",
    sound1: "f",
    sound2: "v",
    description: "Unvoiced 'f' (fly) vs Voiced 'v' (video)",
    examples: [
      { text: "fan", phoneticUK: "/fæn/" },
      { text: "van", phoneticUK: "/væn/" },
      { text: "fast", phoneticUK: "/fɑːst/" },
      { text: "vast", phoneticUK: "/vɑːst/" },
      { text: "leaf", phoneticUK: "/liːf/" },
      { text: "leave", phoneticUK: "/liːv/" }
    ],
  },
  {
    id: "theta-vs-edh",
    name: "Unvoiced 'θ' vs Voiced 'ð'",
    sound1: "θ",
    sound2: "ð",
    description: "Unvoiced 'θ' (think) vs Voiced 'ð' (this)",
    examples: [
      { text: "think", phoneticUK: "/θɪŋk/" },
      { text: "that", phoneticUK: "/ðæt/" }, // Not minimal but illustrative
      { text: "thigh", phoneticUK: "/θaɪ/" },
      { text: "thy", phoneticUK: "/ðaɪ/" },
    ],
  },
  {
    id: "s-vs-z",
    name: "Unvoiced 's' vs Voiced 'z'",
    sound1: "s",
    sound2: "z",
    description: "Unvoiced 's' (see) vs Voiced 'z' (zoo)",
    examples: [
      { text: "sue", phoneticUK: "/suː/" },
      { text: "zoo", phoneticUK: "/zuː/" },
      { text: "sip", phoneticUK: "/sɪp/" },
      { text: "zip", phoneticUK: "/zɪp/" },
      { text: "bus", phoneticUK: "/bʌs/" },
      { text: "buzz", phoneticUK: "/bʌz/" }
    ],
  },
  {
    id: "sh-vs-ch",
    name: "'ʃ' vs 'tʃ'",
    sound1: "ʃ",
    sound2: "tʃ",
    description: "'ʃ' (sheep) vs 'tʃ' (cheese)",
    examples: [
      { text: "sheep", phoneticUK: "/ʃiːp/" },
      { text: "cheap", phoneticUK: "/tʃiːp/" },
      { text: "ship", phoneticUK: "/ʃɪp/" },
      { text: "chip", phoneticUK: "/tʃɪp/" },
      { text: "wash", phoneticUK: "/wɒʃ/" },
      { text: "watch", phoneticUK: "/wɒtʃ/" }
    ],
  },
  {
    id: "ch-vs-j",
    name: "Unvoiced 'tʃ' vs Voiced 'dʒ'",
    sound1: "tʃ",
    sound2: "dʒ",
    description: "'tʃ' (cheese) vs 'dʒ' (june)",
    examples: [
      { text: "choke", phoneticUK: "/tʃəʊk/" },
      { text: "joke", phoneticUK: "/dʒəʊk/" },
      { text: "chest", phoneticUK: "/tʃest/" },
      { text: "jest", phoneticUK: "/dʒest/" },
      { text: "rich", phoneticUK: "/rɪtʃ/" },
      { text: "ridge", phoneticUK: "/rɪdʒ/" }
    ],
  },
  {
    id: "w-vs-v",
    name: "'w' vs 'v'",
    sound1: "w",
    sound2: "v",
    description: "'w' (wet) vs 'v' (video)",
    examples: [
      { text: "wet", phoneticUK: "/wet/" },
      { text: "vet", phoneticUK: "/vet/" },
      { text: "west", phoneticUK: "/west/" },
      { text: "vest", phoneticUK: "/vest/" }
    ],
  },
  {
    id: "l-vs-r",
    name: "'l' vs 'r'",
    sound1: "l",
    sound2: "r",
    description: "'l' (love) vs 'r' (red)",
    examples: [
      { text: "light", phoneticUK: "/laɪt/" },
      { text: "right", phoneticUK: "/raɪt/" },
      { text: "long", phoneticUK: "/lɒŋ/" },
      { text: "wrong", phoneticUK: "/rɒŋ/" },
      { text: "fly", phoneticUK: "/flaɪ/" },
      { text: "fry", phoneticUK: "/fraɪ/" }
    ],
  }
];

export const ipaPairs: IPAPair[] = rawPairs.map(pair => ({
  ...pair,
  examples: pair.examples.map(word => ({
    ...word,
    audioUK: word.audioUK || getOxfordAudio(word.text, 'gb'),
    audioUS: word.audioUS || getOxfordAudio(word.text, 'us'),
    // Auto-generate phonetics if missing is risky without dictionary, so we assume they provided it or we accept empty for now.
    // The previous large list had phonetics.
  }))
}));
