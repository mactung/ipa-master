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

export const ipaPairs: IPAPair[] = [
  {
    "id": "i-long-vs-i-short",
    "name": "Long 'i:' vs Short 'ɪ'",
    "sound1": "i:",
    "sound2": "ɪ",
    "description": "Long 'i:' (sheep) vs Short 'ɪ' (ship)",
    "examples": [
      {
        "text": "sheep",
        "phoneticUK": "/ʃiːp/",
        "phoneticUS": "/ʃiːp/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/s/she/sheep/sheep__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/s/she/sheep/sheep__us_1.mp3"
      },
      {
        "text": "ship",
        "phoneticUK": "/ʃɪp/",
        "phoneticUS": "/ʃɪp/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/s/shi/ship_/ship__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/s/shi/ship_/ship__us_1.mp3"
      },
      {
        "text": "eat",
        "phoneticUK": "/iːt/",
        "phoneticUS": "/iːt/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/e/eat/eat__/eat__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/e/eat/eat__/eat__us_1.mp3"
      },
      {
        "text": "it",
        "phoneticUK": "/ɪt/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/i/it_/it__g/it__gb_2.mp3",
        "phoneticUS": "/ɪt/",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/i/it_/it__u/it__us_2.mp3"
      },
      {
        "text": "seat",
        "phoneticUK": "/siːt/",
        "phoneticUS": "/siːt/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/s/sea/seat_/seat__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/s/sea/seat_/seat__us_1.mp3"
      },
      {
        "text": "sit",
        "phoneticUK": "/sɪt/",
        "phoneticUS": "/sɪt/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/s/sit/sit__/sit__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/s/sit/sit__/sit__us_1.mp3"
      }
    ]
  },
  {
    "id": "u-short-vs-u-long",
    "name": "Short 'ʊ' vs Long 'u:'",
    "sound1": "ʊ",
    "sound2": "u:",
    "description": "Short 'ʊ' (good) vs Long 'u:' (shoot)",
    "examples": [
      {
        "text": "full",
        "phoneticUK": "/fʊl/",
        "phoneticUS": "/fʊl/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/f/ful/full_/full__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/f/ful/full_/full__us_1.mp3"
      },
      {
        "text": "fool",
        "phoneticUK": "/fuːl/",
        "phoneticUS": "/fuːl/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/f/foo/fool_/fool__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/f/foo/fool_/fool__us_1.mp3"
      },
      {
        "text": "pull",
        "phoneticUK": "/pʊl/",
        "phoneticUS": "/pʊl/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/p/pul/pull_/pull__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/p/pul/pull_/pull__us_1.mp3"
      },
      {
        "text": "pool",
        "phoneticUK": "/puːl/",
        "phoneticUS": "/puːl/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/p/poo/pool_/pool__gb_3.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/p/poo/pool_/pool__us_1.mp3"
      },
      {
        "text": "foot",
        "phoneticUK": "/fʊt/",
        "phoneticUS": "/fʊt/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/f/foo/foot_/foot__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/f/foo/foot_/foot__us_1.mp3"
      },
      {
        "text": "look",
        "phoneticUK": "/lʊk/",
        "phoneticUS": "/lʊk/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/l/loo/look_/look__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/l/loo/look_/look__us_1.mp3"
      }
    ]
  },
  {
    "id": "e-vs-ei",
    "name": "Short 'e' vs Diphthong 'eɪ'",
    "sound1": "e",
    "sound2": "eɪ",
    "description": "Short 'e' (bed) vs Diphthong 'eɪ' (wait)",
    "examples": [
      {
        "text": "pen",
        "phoneticUK": "/pen/",
        "phoneticUS": "/pen/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/p/pen/pen__/pen__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/p/pen/pen__/pen__us_1.mp3"
      },
      {
        "text": "pain",
        "phoneticUK": "/peɪn/",
        "phoneticUS": "/peɪn/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/p/pai/pain_/pain__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/p/pai/pain_/pain__us_1.mp3"
      },
      {
        "text": "wet",
        "phoneticUK": "/wet/",
        "phoneticUS": "/wet/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/w/wet/wet__/wet__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/w/wet/wet__/wet__us_1.mp3"
      },
      {
        "text": "wait",
        "phoneticUK": "/weɪt/",
        "phoneticUS": "/weɪt/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/w/wai/wait_/wait__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/w/wai/wait_/wait__us_1.mp3"
      },
      {
        "text": "get",
        "phoneticUK": "/ɡet/",
        "phoneticUS": "/ɡet/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/g/get/get__/get__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/g/get/get__/get__us_1.mp3"
      },
      {
        "text": "gate",
        "phoneticUK": "/ɡeɪt/",
        "phoneticUS": "/ɡeɪt/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/g/gat/gate_/gate__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/g/gat/gate_/gate__us_1.mp3"
      }
    ]
  },
  {
    "id": "ae-vs-e",
    "name": "Open 'æ' vs Regular 'e'",
    "sound1": "æ",
    "sound2": "e",
    "description": "Open 'æ' (cat) vs Regular 'e' (bed)",
    "examples": [
      {
        "text": "man",
        "phoneticUK": "/mæn/",
        "phoneticUS": "/mæn/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/m/man/man__/man__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/m/man/man__/man__us_1.mp3"
      },
      {
        "text": "men",
        "phoneticUK": "/men/",
        "phoneticUS": "/men/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/m/men/men__/men__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/m/men/men__/men__us_1.mp3"
      },
      {
        "text": "bad",
        "phoneticUK": "/bæd/",
        "phoneticUS": "/bæd/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/b/bad/bad__/bad__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/b/bad/bad__/bad__us_1.mp3"
      },
      {
        "text": "bed",
        "phoneticUK": "/bed/",
        "phoneticUS": "/bed/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/b/bed/bed__/bed__gb_3.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/b/bed/bed__/bed__us_2.mp3"
      },
      {
        "text": "pat",
        "phoneticUK": "/pæt/",
        "phoneticUS": "/pæt/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/p/pat/pat__/pat__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/p/pat/pat__/pat__us_1.mp3"
      },
      {
        "text": "pet",
        "phoneticUK": "/pet/",
        "phoneticUS": "/pet/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/p/pet/pet__/pet__gb_4.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/p/pet/pet__/pet__us_4.mp3"
      }
    ]
  },
  {
    "id": "wedge-vs-a-long",
    "name": "Short 'ʌ' vs Long 'ɑ:'",
    "sound1": "ʌ",
    "sound2": "ɑ:",
    "description": "Short 'ʌ' (up) vs Long 'ɑ:' (far)",
    "examples": [
      {
        "text": "cut",
        "phoneticUK": "/kʌt/",
        "phoneticUS": "/kʌt/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/c/cut/cut__/cut__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/cut/cut__/cut__us_1.mp3"
      },
      {
        "text": "cart",
        "phoneticUK": "/kɑːt/",
        "phoneticUS": "/kɑːrt/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/c/car/cart_/cart__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/car/cart_/cart__us_1.mp3"
      },
      {
        "text": "much",
        "phoneticUK": "/mʌtʃ/",
        "phoneticUS": "/mʌtʃ/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/m/muc/much_/much__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/m/muc/much_/much__us_1.mp3"
      },
      {
        "text": "march",
        "phoneticUK": "/mɑːtʃ/",
        "phoneticUS": "/mɑːrtʃ/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/m/mar/march/march__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/m/mar/march/march__us_2.mp3"
      },
      {
        "text": "bun",
        "phoneticUK": "/bʌn/",
        "phoneticUS": "/bʌn/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/b/bun/bun__/bun__gb_3.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/b/bun/bun__/bun__us_1.mp3"
      },
      {
        "text": "barn",
        "phoneticUK": "/bɑːn/",
        "phoneticUS": "/bɑːrn/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/b/bar/barn_/barn__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/b/bar/barn_/barn__us_1.mp3"
      }
    ]
  },
  {
    "id": "o-short-vs-o-long",
    "name": "Short 'ɒ' vs Long 'ɔ:'",
    "sound1": "ɒ",
    "sound2": "ɔ:",
    "description": "Short 'ɒ' (on) vs Long 'ɔ:' (door)",
    "examples": [
      {
        "text": "cot",
        "phoneticUK": "/kɒt/",
        "phoneticUS": "/kɑːt/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/c/cot/cot__/cot__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/cot/cot__/cot__us_1.mp3"
      },
      {
        "text": "caught",
        "phoneticUK": "/kɔːt/",
        "phoneticUS": "/kɔːt/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/c/cou/court/court__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/cau/caugh/caught__us_2.mp3"
      },
      {
        "text": "pot",
        "phoneticUK": "/pɒt/",
        "phoneticUS": "/pɑːt/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/p/pot/pot__/pot__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/p/pot/pot__/pot__us_1.mp3"
      },
      {
        "text": "port",
        "phoneticUK": "/pɔːt/",
        "phoneticUS": "/pɔːrt/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/p/por/port_/port__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/p/por/port_/port__us_1.mp3"
      },
      {
        "text": "spot",
        "phoneticUK": "/spɒt/",
        "phoneticUS": "/spɑːt/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/s/spo/spot_/spot__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/s/spo/spot_/spot__us_1.mp3"
      },
      {
        "text": "sport",
        "phoneticUK": "/spɔːt/",
        "phoneticUS": "/spɔːrt/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/s/spo/sport/sport__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/s/spo/sport/sport__us_1.mp3"
      }
    ]
  },
  {
    "id": "ear-vs-air",
    "name": "Diphthong 'ɪə' vs 'eə'",
    "sound1": "ɪə",
    "sound2": "eə",
    "description": "'ɪə' (here) vs 'eə' (hair)",
    "examples": [
      {
        "text": "here",
        "phoneticUK": "/hɪə(r)/",
        "phoneticUS": "/hɪr/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/h/her/here_/here__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/h/her/here_/here__us_1.mp3"
      },
      {
        "text": "hair",
        "phoneticUK": "/heə(r)/",
        "phoneticUS": "/her/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/h/hai/hair_/hair__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/h/hai/hair_/hair__us_1.mp3"
      },
      {
        "text": "beer",
        "phoneticUK": "/bɪə(r)/",
        "phoneticUS": "/bɪr/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/b/bee/beer_/beer__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/b/bee/beer_/beer__us_1.mp3"
      },
      {
        "text": "bear",
        "phoneticUK": "/beə(r)/",
        "phoneticUS": "/ber/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/b/bea/bear_/bear__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/b/bea/bear_/bear__us_1.mp3"
      },
      {
        "text": "ear",
        "phoneticUK": "/ɪə(r)/",
        "phoneticUS": "/ɪr/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/e/ear/ear__/ear__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/e/ear/ear__/ear__us_1.mp3"
      },
      {
        "text": "air",
        "phoneticUK": "/eə(r)/",
        "phoneticUS": "/er/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/a/air/air__/air__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/a/air/air__/air__us_1.mp3"
      }
    ]
  },
  {
    "id": "p-vs-b",
    "name": "Unvoiced 'p' vs Voiced 'b'",
    "sound1": "p",
    "sound2": "b",
    "description": "Unvoiced 'p' (pea) vs Voiced 'b' (boat)",
    "examples": [
      {
        "text": "pea",
        "phoneticUK": "/piː/",
        "phoneticUS": "/piː/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/p/pea/pea__/pea__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/p/pea/pea__/pea__us_1.mp3"
      },
      {
        "text": "bee",
        "phoneticUK": "/biː/",
        "phoneticUS": "/biː/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/b/bee/bee__/bee__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/b/bee/bee__/bee__us_1.mp3"
      },
      {
        "text": "pin",
        "phoneticUK": "/pɪn/",
        "phoneticUS": "/pɪn/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/p/pin/pin__/pin__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/p/pin/pin__/pin__us_2.mp3"
      },
      {
        "text": "bin",
        "phoneticUK": "/bɪn/",
        "phoneticUS": "/bɪn/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/b/bin/bin__/bin__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/b/bin/bin__/bin__us_1.mp3"
      },
      {
        "text": "cap",
        "phoneticUK": "/kæp/",
        "phoneticUS": "/kæp/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/c/cap/cap__/cap__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/cap/cap__/cap__us_3.mp3"
      },
      {
        "text": "cab",
        "phoneticUK": "/kæb/",
        "phoneticUS": "/kæb/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/c/cab/cab__/cab__gb_4.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/cab/cab__/cab__us_1.mp3"
      }
    ]
  },
  {
    "id": "t-vs-d",
    "name": "Unvoiced 't' vs Voiced 'd'",
    "sound1": "t",
    "sound2": "d",
    "description": "Unvoiced 't' (tea) vs Voiced 'd' (dog)",
    "examples": [
      {
        "text": "tie",
        "phoneticUK": "/taɪ/",
        "phoneticUS": "/taɪ/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/t/tie/tie__/tie__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/t/tie/tie__/tie__us_1.mp3"
      },
      {
        "text": "die",
        "phoneticUK": "/daɪ/",
        "phoneticUS": "/daɪ/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/d/die/die__/die__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/d/die/die__/die__us_1.mp3"
      },
      {
        "text": "town",
        "phoneticUK": "/taʊn/",
        "phoneticUS": "/taʊn/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/t/tow/town_/town__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/t/tow/town_/town__us_1.mp3"
      },
      {
        "text": "down",
        "phoneticUK": "/daʊn/",
        "phoneticUS": "/daʊn/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/d/dow/down_/down__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/d/dow/down_/down__us_1.mp3"
      },
      {
        "text": "bat",
        "phoneticUK": "/bæt/",
        "phoneticUS": "/bæt/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/b/bat/bat__/bat__gb_4.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/b/bat/bat__/bat__us_1.mp3"
      },
      {
        "text": "bad",
        "phoneticUK": "/bæd/",
        "phoneticUS": "/bæd/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/b/bad/bad__/bad__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/b/bad/bad__/bad__us_1.mp3"
      }
    ]
  },
  {
    "id": "k-vs-g",
    "name": "Unvoiced 'k' vs Voiced 'g'",
    "sound1": "k",
    "sound2": "g",
    "description": "Unvoiced 'k' (car) vs Voiced 'g' (go)",
    "examples": [
      {
        "text": "cap",
        "phoneticUK": "/kæp/",
        "phoneticUS": "/kæp/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/c/cap/cap__/cap__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/cap/cap__/cap__us_3.mp3"
      },
      {
        "text": "gap",
        "phoneticUK": "/ɡæp/",
        "phoneticUS": "/ɡæp/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/g/gap/gap__/gap__gb_3.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/g/gap/gap__/gap__us_1.mp3"
      },
      {
        "text": "class",
        "phoneticUK": "/klɑːs/",
        "phoneticUS": "/klæs/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/c/cla/class/class__gb_3.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/cla/class/class__us_1.mp3"
      },
      {
        "text": "back",
        "phoneticUK": "/bæk/",
        "phoneticUS": "/bæk/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/b/bac/back_/back__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/b/bac/back_/back__us_1.mp3"
      },
      {
        "text": "bag",
        "phoneticUK": "/bæɡ/",
        "phoneticUS": "/bæɡ/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/b/bag/bag__/bag__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/b/bag/bag__/bag__us_1.mp3"
      }
    ]
  },
  {
    "id": "f-vs-v",
    "name": "Unvoiced 'f' vs Voiced 'v'",
    "sound1": "f",
    "sound2": "v",
    "description": "Unvoiced 'f' (fly) vs Voiced 'v' (video)",
    "examples": [
      {
        "text": "fan",
        "phoneticUK": "/fæn/",
        "phoneticUS": "/fæn/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/f/fan/fan__/fan__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/f/fan/fan__/fan__us_1.mp3"
      },
      {
        "text": "van",
        "phoneticUK": "/ˌvæn ˈklaɪbɜːn/",
        "phoneticUS": "/ˌvæn ˈklaɪbɜːrn/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/v/van/van_c/van_cliburn_1_gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/v/van/van_c/van_cliburn_1_us_1.mp3"
      },
      {
        "text": "fast",
        "phoneticUK": "/fɑːst/",
        "phoneticUS": "/fæst/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/f/fas/fast_/fast__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/f/fas/fast_/fast__us_1.mp3"
      },
      {
        "text": "vast",
        "phoneticUK": "/vɑːst/",
        "phoneticUS": "/væst/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/v/vas/vast_/vast__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/v/vas/vast_/vast__us_1.mp3"
      },
      {
        "text": "leaf",
        "phoneticUK": "/liːf/",
        "phoneticUS": "/liːf/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/l/lea/leaf_/leaf__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/l/lea/leaf_/leaf__us_1.mp3"
      },
      {
        "text": "leave",
        "phoneticUK": "/liːv/",
        "phoneticUS": "/liːv/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/l/lea/leave/leave__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/l/lea/leave/leave__us_1.mp3"
      }
    ]
  },
  {
    "id": "theta-vs-edh",
    "name": "Unvoiced 'θ' vs Voiced 'ð'",
    "sound1": "θ",
    "sound2": "ð",
    "description": "Unvoiced 'θ' (think) vs Voiced 'ð' (this)",
    "examples": [
      {
        "text": "think",
        "phoneticUK": "/θɪŋk/",
        "phoneticUS": "/θɪŋk/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/t/thi/think/think__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/t/thi/think/think__us_1.mp3"
      },
      {
        "text": "that",
        "phoneticUK": "/ðæt/",
        "phoneticUS": "/ðæt/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/t/tha/that_/that__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/t/tha/that_/that__us_1.mp3"
      },
      {
        "text": "thigh",
        "phoneticUK": "/θaɪ/",
        "phoneticUS": "/θaɪ/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/t/thi/thigh/thigh__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/t/thi/thigh/thigh__us_1.mp3"
      },
      {
        "text": "thy",
        "phoneticUK": "/ðaɪ/",
        "phoneticUS": "/ðaɪ/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/t/thy/thy__/thy__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/t/thy/thy__/thy__us_1.mp3"
      }
    ]
  },
  {
    "id": "s-vs-z",
    "name": "Unvoiced 's' vs Voiced 'z'",
    "sound1": "s",
    "sound2": "z",
    "description": "Unvoiced 's' (see) vs Voiced 'z' (zoo)",
    "examples": [
      {
        "text": "sue",
        "phoneticUK": "/suː/",
        "phoneticUS": "/suː/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/s/sue/sue__/sue__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/s/sue/sue__/sue__us_1.mp3"
      },
      {
        "text": "zoo",
        "phoneticUK": "/zuː/",
        "phoneticUS": "/zuː/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/z/zoo/zoo__/zoo__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/z/zoo/zoo__/zoo__us_1.mp3"
      },
      {
        "text": "sip",
        "phoneticUK": "/sɪp/",
        "phoneticUS": "/sɪp/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/s/sip/sip__/sip__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/s/sip/sip__/sip__us_1.mp3"
      },
      {
        "text": "zip",
        "phoneticUK": "/zɪp/",
        "phoneticUS": "/zɪp/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/z/zip/zip__/zip__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/z/zip/zip__/zip__us_1.mp3"
      },
      {
        "text": "bus",
        "phoneticUK": "/bʌs/",
        "phoneticUS": "/bʌs/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/b/bus/bus__/bus__gb_3.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/b/bus/bus__/bus__us_1.mp3"
      },
      {
        "text": "buzz",
        "phoneticUK": "/bʌz/",
        "phoneticUS": "/bʌz/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/b/buz/buzz_/buzz__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/b/buz/buzz_/buzz__us_1.mp3"
      }
    ]
  },
  {
    "id": "sh-vs-ch",
    "name": "'ʃ' vs 'tʃ'",
    "sound1": "ʃ",
    "sound2": "tʃ",
    "description": "'ʃ' (sheep) vs 'tʃ' (cheese)",
    "examples": [
      {
        "text": "sheep",
        "phoneticUK": "/ʃiːp/",
        "phoneticUS": "/ʃiːp/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/s/she/sheep/sheep__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/s/she/sheep/sheep__us_1.mp3"
      },
      {
        "text": "cheap",
        "phoneticUK": "/tʃiːp/",
        "phoneticUS": "/tʃiːp/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/c/che/cheap/cheap__gb_3.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/che/cheap/cheap__us_1.mp3"
      },
      {
        "text": "ship",
        "phoneticUK": "/ʃɪp/",
        "phoneticUS": "/ʃɪp/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/s/shi/ship_/ship__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/s/shi/ship_/ship__us_1.mp3"
      },
      {
        "text": "chip",
        "phoneticUK": "/tʃɪp/",
        "phoneticUS": "/tʃɪp/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/c/chi/chip_/chip__gb_3.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/chi/chip_/chip__us_1.mp3"
      },
      {
        "text": "wash",
        "phoneticUK": "/wɒʃ/",
        "phoneticUS": "/wɑːʃ/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/w/was/wash_/wash__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/w/was/wash_/wash__us_1_rr.mp3"
      },
      {
        "text": "watch",
        "phoneticUK": "/wɒtʃ/",
        "phoneticUS": "/wɑːtʃ/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/w/wat/watch/watch__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/w/wat/watch/watch__us_6.mp3"
      }
    ]
  },
  {
    "id": "ch-vs-j",
    "name": "Unvoiced 'tʃ' vs Voiced 'dʒ'",
    "sound1": "tʃ",
    "sound2": "dʒ",
    "description": "'tʃ' (cheese) vs 'dʒ' (june)",
    "examples": [
      {
        "text": "choke",
        "phoneticUK": "/tʃəʊk/",
        "phoneticUS": "/tʃəʊk/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/c/cho/choke/choke__gb_4.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/cho/choke/choke__us_1.mp3"
      },
      {
        "text": "joke",
        "phoneticUK": "/dʒəʊk/",
        "phoneticUS": "/dʒəʊk/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/j/jok/joke_/joke__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/j/jok/joke_/joke__us_1.mp3"
      },
      {
        "text": "chest",
        "phoneticUK": "/tʃest/",
        "phoneticUS": "/tʃest/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/c/che/chest/chest__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/che/chest/chest__us_1.mp3"
      },
      {
        "text": "jest",
        "phoneticUK": "/dʒest/",
        "phoneticUS": "/dʒest/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/j/jes/jest_/jest__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/j/jes/jest_/jest__us_1.mp3"
      },
      {
        "text": "rich",
        "phoneticUK": "/rɪtʃ/",
        "phoneticUS": "/rɪtʃ/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/r/ric/rich_/rich__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/r/ric/rich_/rich__us_1.mp3"
      },
      {
        "text": "ridge",
        "phoneticUK": "/rɪdʒ/",
        "phoneticUS": "/rɪdʒ/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/r/rid/ridge/ridge__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/r/rid/ridge/ridge__us_1.mp3"
      }
    ]
  },
  {
    "id": "w-vs-v",
    "name": "'w' vs 'v'",
    "sound1": "w",
    "sound2": "v",
    "description": "'w' (wet) vs 'v' (video)",
    "examples": [
      {
        "text": "wet",
        "phoneticUK": "/wet/",
        "phoneticUS": "/wet/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/w/wet/wet__/wet__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/w/wet/wet__/wet__us_1.mp3"
      },
      {
        "text": "vet",
        "phoneticUK": "/vet/",
        "phoneticUS": "/vet/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/v/vet/vet__/vet__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/v/vet/vet__/vet__us_1.mp3"
      },
      {
        "text": "west",
        "phoneticUK": "/west/",
        "phoneticUS": "/west/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/w/wes/west_/west__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/w/wes/west_/west__us_1.mp3"
      },
      {
        "text": "vest",
        "phoneticUK": "/vest/",
        "phoneticUS": "/vest/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/v/ves/vest_/vest__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/v/ves/vest_/vest__us_1.mp3"
      }
    ]
  },
  {
    "id": "l-vs-r",
    "name": "'l' vs 'r'",
    "sound1": "l",
    "sound2": "r",
    "description": "'l' (love) vs 'r' (red)",
    "examples": [
      {
        "text": "light",
        "phoneticUK": "/laɪt/",
        "phoneticUS": "/laɪt/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/l/lig/light/light__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/l/lig/light/light__us_1.mp3"
      },
      {
        "text": "right",
        "phoneticUK": "/raɪt/",
        "phoneticUS": "/raɪt/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/r/rig/right/right__gb_4.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/r/rig/right/right__us_1.mp3"
      },
      {
        "text": "long",
        "phoneticUK": "/lɒŋ/",
        "phoneticUS": "/lɔːŋ/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/l/lon/long_/long__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/l/lon/long_/long__us_8.mp3"
      },
      {
        "text": "wrong",
        "phoneticUK": "/rɒŋ/",
        "phoneticUS": "/rɔːŋ/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/w/wro/wrong/wrong__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/w/wro/wrong/wrong__us_1.mp3"
      },
      {
        "text": "fly",
        "phoneticUK": "/flaɪ/",
        "phoneticUS": "/flaɪ/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/f/fly/fly__/fly__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/f/fly/fly__/fly__us_1.mp3"
      },
      {
        "text": "fry",
        "phoneticUK": "/fraɪ/",
        "phoneticUS": "/fraɪ/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/f/fry/fry__/fry__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/f/fry/fry__/fry__us_1.mp3"
      }
    ]
  }
];
