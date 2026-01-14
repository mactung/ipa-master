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
      },
      {
        "text": "see",
        "phoneticUK": "/siː/",
        "phoneticUS": "/siː/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/s/see/see__/see__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/s/see/see__/see__us_1.mp3"
      },
      {
        "text": "agree",
        "phoneticUK": "/əˈɡriː/",
        "phoneticUS": "/əˈɡriː/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/a/agr/agree/agree__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/a/agr/agree/agree__us_1.mp3"
      },
      {
        "text": "team",
        "phoneticUK": "/tiːm/",
        "phoneticUS": "/tiːm/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/t/tea/team_/team__gb_3.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/t/tea/team_/team__us_1.mp3"
      },
      {
        "text": "field",
        "phoneticUK": "/fiːld/",
        "phoneticUS": "/fiːld/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/f/fie/field/field__gb_3.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/f/fie/field/field__us_1.mp3"
      },
      {
        "text": "piece",
        "phoneticUK": "/piːs/",
        "phoneticUS": "/piːs/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/p/pie/piece/piece__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/p/pie/piece/piece__us_1.mp3"
      },
      {
        "text": "these",
        "phoneticUK": "/ðiːz/",
        "phoneticUS": "/ðiːz/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/t/the/these/these__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/t/the/these/these__us_1.mp3"
      },
      {
        "text": "meter",
        "phoneticUK": "/ˈmiːtə(r)/",
        "phoneticUS": "/ˈmiːtər/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/m/met/meter/meter__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/m/met/meter/meter__us_1.mp3"
      },
      {
        "text": "secret",
        "phoneticUK": "/ˈsiːkrət/",
        "phoneticUS": "/ˈsiːkrət/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/s/sec/secre/secret__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/s/sec/secre/secret__us_1.mp3"
      },
      {
        "text": "evening",
        "phoneticUK": "/ˈiːvnɪŋ/",
        "phoneticUS": "/ˈiːvnɪŋ/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/e/eve/eveni/evening__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/e/eve/eveni/evening__us_1.mp3"
      },
      {
        "text": "Peter"
      },
      {
        "text": "museum",
        "phoneticUK": "/mjuˈziːəm/",
        "phoneticUS": "/mjuˈziːəm/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/m/mus/museu/museum__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/m/mus/museu/museum__us_2.mp3"
      },
      {
        "text": "key",
        "phoneticUK": "/kiː/",
        "phoneticUS": "/kiː/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/k/key/key__/key__gb_3.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/k/key/key__/key__us_1.mp3"
      },
      {
        "text": "ski",
        "phoneticUK": "/skiː/",
        "phoneticUS": "/skiː/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/s/ski/ski__/ski__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/s/ski/ski__/ski__us_1.mp3"
      },
      {
        "text": "kilo",
        "phoneticUK": "/ˈkiːləʊ/",
        "phoneticUS": "/ˈkiːləʊ/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/k/kil/kilo_/kilo__gb_4.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/k/kil/kilo_/kilo__us_1.mp3"
      },
      {
        "text": "pizza",
        "phoneticUK": "/ˈpiːtsə/",
        "phoneticUS": "/ˈpiːtsə/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/p/piz/pizza/pizza__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/p/piz/pizza/pizza__us_1.mp3"
      },
      {
        "text": "police",
        "phoneticUK": "/pəˈliːs/",
        "phoneticUS": "/pəˈliːs/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/p/pol/polic/police__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/p/pol/polic/police__us_1.mp3"
      },
      {
        "text": "machine",
        "phoneticUK": "/məˈʃiːn/",
        "phoneticUS": "/məˈʃiːn/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/m/mac/machi/machine__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/m/mac/machi/machine__us_1.mp3"
      },
      {
        "text": "magazine",
        "phoneticUK": "/ˌmæɡəˈziːn/",
        "phoneticUS": "/ˈmæɡəziːn/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/m/mag/magaz/magazine__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/m/mag/magaz/magazine__us_1_rr.mp3"
      },
      {
        "text": "people",
        "phoneticUK": "/ˈpiːpl/",
        "phoneticUS": "/ˈpiːpl/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/p/peo/peopl/people__gb_4.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/p/peo/peopl/people__us_4.mp3"
      },
      {
        "text": "if",
        "phoneticUK": "/ɪf/",
        "phoneticUS": "/ɪf/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/i/if_/if__g/if__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/i/if_/if__u/if__us_1.mp3"
      },
      {
        "text": "listen",
        "phoneticUK": "/ˈlɪsn/",
        "phoneticUS": "/ˈlɪsn/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/l/lis/liste/listen__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/l/lis/liste/listen__us_1.mp3"
      },
      {
        "text": "miss",
        "phoneticUK": "/mɪs/",
        "phoneticUS": "/mɪs/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/m/mis/miss_/miss__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/m/mis/miss_/miss__us_1.mp3"
      },
      {
        "text": "dinner",
        "phoneticUK": "/ˈdɪnə(r)/",
        "phoneticUS": "/ˈdɪnər/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/d/din/dinne/dinner__gb_3.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/d/din/dinne/dinner__us_3.mp3"
      },
      {
        "text": "swim",
        "phoneticUK": "/swɪm/",
        "phoneticUS": "/swɪm/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/s/swi/swim_/swim__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/s/swi/swim_/swim__us_1.mp3"
      },
      {
        "text": "busy",
        "phoneticUK": "/ˈbɪzi/",
        "phoneticUS": "/ˈbɪzi/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/b/bus/busy_/busy__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/b/bus/busy_/busy__us_2.mp3"
      },
      {
        "text": "business",
        "phoneticUK": "/ˈbɪznəs/",
        "phoneticUS": "/ˈbɪznəs/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/b/bus/busin/business__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/b/bus/busin/business__us_4.mp3"
      },
      {
        "text": "building",
        "phoneticUK": "/ˈbɪldɪŋ/",
        "phoneticUS": "/ˈbɪldɪŋ/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/b/bui/build/building__gb_3.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/b/bui/build/building__us_3.mp3"
      },
      {
        "text": "system",
        "phoneticUK": "/ˈsɪstəm/",
        "phoneticUS": "/ˈsɪstəm/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/s/sys/syste/system__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/s/sys/syste/system__us_1.mp3"
      },
      {
        "text": "happy",
        "phoneticUK": "/ˈhæpi/",
        "phoneticUS": "/ˈhæpi/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/h/hap/happy/happy__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/h/hap/happy/happy__us_2.mp3"
      },
      {
        "text": "coffee",
        "phoneticUK": "/ˈkɒfi/",
        "phoneticUS": "/ˈkɔːfi/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/c/cof/coffe/coffee__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/cof/coffe/coffee__us_1_rr.mp3"
      },
      {
        "text": "sixty",
        "phoneticUK": "/ˈsɪksti/",
        "phoneticUS": "/ˈsɪksti/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/s/six/sixty/sixty__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/s/six/sixty/sixty__us_1.mp3"
      },
      {
        "text": "fifty",
        "phoneticUK": "/ˈfɪfti/",
        "phoneticUS": "/ˈfɪfti/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/f/fif/fifty/fifty__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/f/fif/fifty/fifty__us_2.mp3"
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
      },
      {
        "text": "too",
        "phoneticUK": "/tuː/",
        "phoneticUS": "/tuː/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/t/too/too__/too__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/t/too/too__/too__us_1.mp3"
      },
      {
        "text": "food",
        "phoneticUK": "/fuːd/",
        "phoneticUS": "/fuːd/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/f/foo/food_/food__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/f/foo/food_/food__us_1.mp3"
      },
      {
        "text": "group",
        "phoneticUK": "/ɡruːp/",
        "phoneticUS": "/ɡruːp/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/g/gro/group/group__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/g/gro/group/group__us_1.mp3"
      },
      {
        "text": "shoe",
        "phoneticUK": "/ʃuː/",
        "phoneticUS": "/ʃuː/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/s/sho/shoe_/shoe__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/s/sho/shoe_/shoe__us_1.mp3"
      },
      {
        "text": "blue",
        "phoneticUK": "/bluː/",
        "phoneticUS": "/bluː/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/b/blu/blue_/blue__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/b/blu/blue_/blue__us_1.mp3"
      },
      {
        "text": "true",
        "phoneticUK": "/truː/",
        "phoneticUS": "/truː/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/t/tru/true_/true__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/t/tru/true_/true__us_1.mp3"
      },
      {
        "text": "drew",
        "phoneticUK": "/druː/",
        "phoneticUS": "/druː/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/d/dre/drew_/drew__gb_3.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/d/dre/drew_/drew__us_1.mp3"
      },
      {
        "text": "blew",
        "phoneticUK": "/bluː/",
        "phoneticUS": "/bluː/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/b/ble/blew_/blew__gb_3.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/b/ble/blew_/blew__us_1.mp3"
      },
      {
        "text": "threw",
        "phoneticUK": "/θruː/",
        "phoneticUS": "/θruː/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/t/thr/threw/threw__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/t/thr/threw/threw__us_1.mp3"
      },
      {
        "text": "flew",
        "phoneticUK": "/fluː/",
        "phoneticUS": "/fluː/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/f/fle/flew_/flew__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/f/fle/flew_/flew__us_1.mp3"
      },
      {
        "text": "two",
        "phoneticUK": "/tuː/",
        "phoneticUS": "/tuː/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/t/two/two__/two__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/t/two/two__/two__us_1.mp3"
      },
      {
        "text": "fruit",
        "phoneticUK": "/fruːt/",
        "phoneticUS": "/fruːt/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/f/fru/fruit/fruit__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/f/fru/fruit/fruit__us_1.mp3"
      },
      {
        "text": "juice",
        "phoneticUK": "/dʒuːs/",
        "phoneticUS": "/dʒuːs/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/j/jui/juice/juice__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/j/jui/juice/juice__us_1.mp3"
      },
      {
        "text": "you",
        "phoneticUK": "/ju//juː/",
        "phoneticUS": "/jə//juː/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/y/you/you__/you__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/y/you/you__/you__us_1_rr.mp3"
      },
      {
        "text": "music",
        "phoneticUK": "/ˈmjuːzɪk/",
        "phoneticUS": "/ˈmjuːzɪk/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/m/mus/music/music__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/m/mus/music/music__us_2.mp3"
      },
      {
        "text": "cute",
        "phoneticUK": "/kjuːt/",
        "phoneticUS": "/kjuːt/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/c/cut/cute_/cute__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/cut/cute_/cute__us_1.mp3"
      },
      {
        "text": "sugar",
        "phoneticUK": "/ˈʃʊɡə(r)/",
        "phoneticUS": "/ˈʃʊɡər/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/s/sug/sugar/sugar__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/s/sug/sugar/sugar__us_2.mp3"
      },
      {
        "text": "sure",
        "phoneticUK": "/ʃʊə(r)//ʃɔː(r)/",
        "phoneticUS": "/ʃʊr/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/s/sur/sure_/sure__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/s/sur/sure_/sure__us_1_rr.mp3"
      },
      {
        "text": "book",
        "phoneticUK": "/bʊk/",
        "phoneticUS": "/bʊk/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/b/boo/book_/book__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/b/boo/book_/book__us_1.mp3"
      },
      {
        "text": "good",
        "phoneticUK": "/ɡʊd/",
        "phoneticUS": "/ɡʊd/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/g/goo/good_/good__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/g/goo/good_/good__us_1.mp3"
      },
      {
        "text": "would",
        "phoneticUK": "/wʊd//wəd//əd/",
        "phoneticUS": "/wʊd//wəd//əd/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/w/wou/would/would__gb_3.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/w/wou/would/would__us_8_rr.mp3"
      },
      {
        "text": "could",
        "phoneticUK": "/kəd//kʊd/",
        "phoneticUS": "/kəd//kʊd/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/c/cou/could/could__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/cou/could/could__us_3_rr.mp3"
      },
      {
        "text": "woman",
        "phoneticUK": "/ˈwʊmən/",
        "phoneticUS": "/ˈwʊmən/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/w/wom/woman/woman__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/w/wom/woman/woman__us_1.mp3"
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
      },
      {
        "text": "bar",
        "phoneticUK": "/bɑː(r)/",
        "phoneticUS": "/bɑːr/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/b/bar/bar__/bar__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/b/bar/bar__/bar__us_1.mp3"
      },
      {
        "text": "car",
        "phoneticUK": "/kɑː(r)/",
        "phoneticUS": "/kɑːr/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/c/car/car__/car__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/car/car__/car__us_2.mp3"
      },
      {
        "text": "card",
        "phoneticUK": "/kɑːd/",
        "phoneticUS": "/kɑːrd/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/c/car/card_/card__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/car/card_/card__us_1.mp3"
      },
      {
        "text": "far",
        "phoneticUK": "/fɑː(r)/",
        "phoneticUS": "/fɑːr/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/f/far/far__/far__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/f/far/far__/far__us_1.mp3"
      },
      {
        "text": "park",
        "phoneticUK": "/pɑːk/",
        "phoneticUS": "/pɑːrk/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/p/par/park_/park__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/p/par/park_/park__us_1.mp3"
      },
      {
        "text": "father",
        "phoneticUK": "/ˈfɑːðə(r)/",
        "phoneticUS": "/ˈfɑːðər/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/f/fat/fathe/father__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/f/fat/fathe/father__us_2.mp3"
      },
      {
        "text": "heart",
        "phoneticUK": "/hɑːt/",
        "phoneticUS": "/hɑːrt/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/h/hea/heart/heart__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/h/hea/heart/heart__us_1.mp3"
      },
      {
        "text": "bus",
        "phoneticUK": "/bʌs/",
        "phoneticUS": "/bʌs/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/b/bus/bus__/bus__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/b/bus/bus__/bus__us_1.mp3"
      },
      {
        "text": "cup",
        "phoneticUK": "/kʌp/",
        "phoneticUS": "/kʌp/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/c/cup/cup__/cup__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/cup/cup__/cup__us_1.mp3"
      },
      {
        "text": "luck",
        "phoneticUK": "/lʌk/",
        "phoneticUS": "/lʌk/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/l/luc/luck_/luck__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/l/luc/luck_/luck__us_1.mp3"
      },
      {
        "text": "number",
        "phoneticUK": "/ˈnʌmbə(r)/",
        "phoneticUS": "/ˈnʌmbər/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/n/num/numbe/number__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/n/num/numbe/number__us_1.mp3"
      },
      {
        "text": "run",
        "phoneticUK": "/rʌn/",
        "phoneticUS": "/rʌn/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/r/run/run__/run__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/r/run/run__/run__us_1.mp3"
      },
      {
        "text": "study",
        "phoneticUK": "/ˈstʌdi/",
        "phoneticUS": "/ˈstʌdi/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/s/stu/study/study__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/s/stu/study/study__us_1.mp3"
      },
      {
        "text": "uncle",
        "phoneticUK": "/ˈʌŋkl/",
        "phoneticUS": "/ˈʌŋkl/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/u/unc/uncle/uncle__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/u/unc/uncle/uncle__us_1.mp3"
      },
      {
        "text": "sun",
        "phoneticUK": "/sʌn/",
        "phoneticUS": "/sʌn/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/s/sun/sun__/sun__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/s/sun/sun__/sun__us_1.mp3"
      },
      {
        "text": "son",
        "phoneticUK": "/sʌn/",
        "phoneticUS": "/sʌn/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/s/son/son__/son__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/s/son/son__/son__us_1.mp3"
      },
      {
        "text": "front",
        "phoneticUK": "/frʌnt/",
        "phoneticUS": "/frʌnt/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/f/fro/front/front__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/f/fro/front/front__us_1.mp3"
      },
      {
        "text": "Monday",
        "phoneticUK": "/ˈmʌndeɪ//ˈmʌndi/",
        "phoneticUS": "/ˈmʌndeɪ/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/m/mon/monda/monday__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/m/mon/monda/monday__us_1.mp3"
      },
      {
        "text": "mother",
        "phoneticUK": "/ˈmʌðə(r)/",
        "phoneticUS": "/ˈmʌðər/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/m/mot/mothe/mother__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/m/mot/mothe/mother__us_1.mp3"
      },
      {
        "text": "color",
        "phoneticUK": "/ˈkʌlə(r)/",
        "phoneticUS": "/ˈkʌlər/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/c/col/color/color__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/col/color/color__us_1.mp3"
      },
      {
        "text": "come",
        "phoneticUK": "/kʌm/",
        "phoneticUS": "/kʌm/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/c/com/come_/come__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/com/come_/come__us_1.mp3"
      },
      {
        "text": "nothing",
        "phoneticUK": "/ˈnʌθɪŋ/",
        "phoneticUS": "/ˈnʌθɪŋ/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/n/not/nothi/nothing__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/n/not/nothi/nothing__us_1.mp3"
      },
      {
        "text": "one",
        "phoneticUK": "/wʌn/",
        "phoneticUS": "/wʌn/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/o/one/one__/one__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/o/one/one__/one__us_1.mp3"
      },
      {
        "text": "money",
        "phoneticUK": "/ˈmʌni/",
        "phoneticUS": "/ˈmʌni/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/m/mon/money/money__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/m/mon/money/money__us_1.mp3"
      },
      {
        "text": "honey",
        "phoneticUK": "/ˈhʌni/",
        "phoneticUS": "/ˈhʌni/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/h/hon/honey/honey__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/h/hon/honey/honey__us_1.mp3"
      },
      {
        "text": "what",
        "phoneticUK": "/wɒt/",
        "phoneticUS": "/wʌt/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/w/wha/what_/what__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/w/wha/what_/what__us_1.mp3"
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
      },
      {
        "text": "bottle",
        "phoneticUK": "/ˈbɒtl/",
        "phoneticUS": "/ˈbɑːtl/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/b/bot/bottl/bottle__gb_3.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/b/bot/bottl/bottle__us_1.mp3"
      },
      {
        "text": "box",
        "phoneticUK": "/bɒks/",
        "phoneticUS": "/bɑːks/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/b/box/box__/box__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/b/box/box__/box__us_1.mp3"
      },
      {
        "text": "shop",
        "phoneticUK": "/ʃɒp/",
        "phoneticUS": "/ʃɑːp/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/s/sho/shop_/shop__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/s/sho/shop_/shop__us_1.mp3"
      },
      {
        "text": "got",
        "phoneticUK": "/ɡɒt/",
        "phoneticUS": "/ɡɑːt/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/g/got/got__/got__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/g/got/got__/got__us_1.mp3"
      },
      {
        "text": "holiday",
        "phoneticUK": "/ˈhɒlədeɪ//ˈhɒlədi/",
        "phoneticUS": "/ˈhɑːlədeɪ/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/h/hol/holid/holiday__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/h/hol/holid/holiday__us_1.mp3"
      },
      {
        "text": "quality",
        "phoneticUK": "/ˈkwɒləti/",
        "phoneticUS": "/ˈkwɑːləti/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/q/qua/quali/quality__gb_3.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/q/qua/quali/quality__us_2.mp3"
      },
      {
        "text": "want",
        "phoneticUK": "/wɒnt/",
        "phoneticUS": "/wɑːnt/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/w/wan/want_/want__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/w/wan/want_/want__us_1_rr.mp3"
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
  },
  {
    "id": "schwa-vs-nurse",
    "name": "Schwa 'ə' vs Long '3:'",
    "sound1": "ə",
    "sound2": "3:",
    "description": "Schwa 'ə' (about) vs Long '3:' (bird)",
    "examples": [
      {
        "text": "away",
        "phoneticUK": "/əˈweɪ/",
        "phoneticUS": "/əˈweɪ/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/a/awa/away_/away__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/a/awa/away_/away__us_1.mp3"
      },
      {
        "text": "banana",
        "phoneticUK": "/bəˈnɑːnə/",
        "phoneticUS": "/bəˈnænə/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/b/ban/banan/banana__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/b/ban/banan/banana__us_2.mp3"
      },
      {
        "text": "woman",
        "phoneticUK": "/ˈwʊmən/",
        "phoneticUS": "/ˈwʊmən/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/w/wom/woman/woman__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/w/wom/woman/woman__us_1.mp3"
      },
      {
        "text": "sugar",
        "phoneticUK": "/ˈʃʊɡə(r)/",
        "phoneticUS": "/ˈʃʊɡər/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/s/sug/sugar/sugar__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/s/sug/sugar/sugar__us_2.mp3"
      },
      {
        "text": "are",
        "phoneticUK": "/ə(r)//ɑː(r)/",
        "phoneticUS": "/ər//ɑːr/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/a/are/are__/are__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/a/are/are__/are__us_1_rr.mp3"
      },
      {
        "text": "about",
        "phoneticUK": "/əˈbaʊt/",
        "phoneticUS": "/əˈbaʊt/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/a/abo/about/about__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/a/abo/about/about__us_1.mp3"
      },
      {
        "text": "paper",
        "phoneticUK": "/ˈpeɪpə(r)/",
        "phoneticUS": "/ˈpeɪpər/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/p/pap/paper/paper__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/p/pap/paper/paper__us_3.mp3"
      },
      {
        "text": "under",
        "phoneticUK": "/ˈʌndə(r)/",
        "phoneticUS": "/ˈʌndər/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/u/und/under/under__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/u/und/under/under__us_1.mp3"
      },
      {
        "text": "the",
        "phoneticUK": "/ðə//ði//ðiː/",
        "phoneticUS": "/ðə//ði//ðiː/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/t/the/the__/the__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/t/the/the__/the__us_1_rr.mp3"
      },
      {
        "text": "police",
        "phoneticUK": "/pəˈliːs/",
        "phoneticUS": "/pəˈliːs/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/p/pol/polic/police__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/p/pol/polic/police__us_1.mp3"
      },
      {
        "text": "doctor",
        "phoneticUK": "/ˈdɒktə(r)/",
        "phoneticUS": "/ˈdɑːktər/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/d/doc/docto/doctor__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/d/doc/docto/doctor__us_2.mp3"
      },
      {
        "text": "correct",
        "phoneticUK": "/kəˈrekt/",
        "phoneticUS": "/kəˈrekt/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/c/cor/corre/correct__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/cor/corre/correct__us_1.mp3"
      },
      {
        "text": "from",
        "phoneticUK": "/frəm//frɒm/",
        "phoneticUS": "/frəm//frʌm//frɑːm/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/f/fro/from_/from__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/f/fro/from_/from__us_1_rr.mp3"
      },
      {
        "text": "to",
        "phoneticUK": "/tə//tu//tuː/",
        "phoneticUS": "/tə//tu//tuː/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/t/to_/to__g/to__gb_7.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/t/to_/to__u/to__us_1_rr.mp3"
      },
      {
        "text": "of",
        "phoneticUK": "/əv//ɒv/",
        "phoneticUS": "/əv//ʌv/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/o/of_/of__g/of__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/o/of_/of__u/of__us_1_rr.mp3"
      },
      {
        "text": "support",
        "phoneticUK": "/səˈpɔːt/",
        "phoneticUS": "/səˈpɔːrt/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/s/sup/suppo/support__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/s/sup/suppo/support__us_1.mp3"
      },
      {
        "text": "figure",
        "phoneticUK": "/ˈfɪɡə(r)/",
        "phoneticUS": "/ˈfɪɡjər/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/f/fig/figur/figure__gb_3.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/f/fig/figur/figure__us_2.mp3"
      },
      {
        "text": "ability",
        "phoneticUK": "/əˈbɪləti/",
        "phoneticUS": "/əˈbɪləti/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/a/abi/abili/ability__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/a/abi/abili/ability__us_4.mp3"
      },
      {
        "text": "possibility",
        "phoneticUK": "/ˌpɒsəˈbɪləti/",
        "phoneticUS": "/ˌpɑːsəˈbɪləti/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/p/pos/possi/possibility__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/p/pos/possi/possibility__us_4.mp3"
      },
      {
        "text": "responsibility",
        "phoneticUK": "/rɪˌspɒnsəˈbɪləti/",
        "phoneticUS": "/rɪˌspɑːnsəˈbɪləti/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/r/res/respo/responsibility__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/r/res/respo/responsibility__us_5.mp3"
      },
      {
        "text": "community",
        "phoneticUK": "/kəˈmjuːnəti/",
        "phoneticUS": "/kəˈmjuːnəti/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/c/com/commu/community__gb_3.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/com/commu/community__us_2.mp3"
      },
      {
        "text": "bird",
        "phoneticUK": "/bɜːd/",
        "phoneticUS": "/bɜːrd/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/b/bir/bird_/bird__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/b/bir/bird_/bird__us_1.mp3"
      },
      {
        "text": "first",
        "phoneticUK": "/fɜːst/",
        "phoneticUS": "/fɜːrst/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/f/fir/first/first__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/f/fir/first/first__us_1.mp3"
      },
      {
        "text": "circle",
        "phoneticUK": "/ˈsɜːkl/",
        "phoneticUS": "/ˈsɜːrkl/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/c/cir/circl/circle__gb_3.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/cir/circl/circle__us_2.mp3"
      },
      {
        "text": "girl",
        "phoneticUK": "/ɡɜːl/",
        "phoneticUS": "/ɡɜːrl/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/g/gir/girl_/girl__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/g/gir/girl_/girl__us_1.mp3"
      },
      {
        "text": "word",
        "phoneticUK": "/wɜːd/",
        "phoneticUS": "/wɜːrd/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/w/wor/word_/word__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/w/wor/word_/word__us_1.mp3"
      },
      {
        "text": "work",
        "phoneticUK": "/wɜːk/",
        "phoneticUS": "/wɜːrk/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/w/wor/work_/work__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/w/wor/work_/work__us_1.mp3"
      },
      {
        "text": "world",
        "phoneticUK": "/wɜːld/",
        "phoneticUS": "/wɜːrld/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/w/wor/world/world__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/w/wor/world/world__us_1.mp3"
      },
      {
        "text": "worse",
        "phoneticUK": "/wɜːs/",
        "phoneticUS": "/wɜːrs/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/w/wor/worse/worse__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/w/wor/worse/worse__us_1.mp3"
      },
      {
        "text": "worst",
        "phoneticUK": "/wɜːst/",
        "phoneticUS": "/wɜːrst/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/w/wor/worst/worst__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/w/wor/worst/worst__us_1.mp3"
      },
      {
        "text": "turn",
        "phoneticUK": "/tɜːn/",
        "phoneticUS": "/tɜːrn/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/t/tur/turn_/turn__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/t/tur/turn_/turn__us_1.mp3"
      },
      {
        "text": "church",
        "phoneticUK": "/tʃɜːtʃ/",
        "phoneticUS": "/tʃɜːrtʃ/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/c/chu/churc/church__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/chu/churc/church__us_1.mp3"
      },
      {
        "text": "journey",
        "phoneticUK": "/ˈdʒɜːni/",
        "phoneticUS": "/ˈdʒɜːrni/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/j/jou/journ/journey__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/j/jou/journ/journey__us_1.mp3"
      },
      {
        "text": "nerve",
        "phoneticUK": "/nɜːv/",
        "phoneticUS": "/nɜːrv/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/n/ner/nerve/nerve__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/n/ner/nerve/nerve__us_1.mp3"
      },
      {
        "text": "service",
        "phoneticUK": "/ˈsɜːvɪs/",
        "phoneticUS": "/ˈsɜːrvɪs/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/s/ser/servi/service__gb_2.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/s/ser/servi/service__us_3.mp3"
      },
      {
        "text": "Germany"
      },
      {
        "text": "prefer",
        "phoneticUK": "/prɪˈfɜː(r)/",
        "phoneticUS": "/prɪˈfɜːr/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/p/pre/prefe/prefer__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/p/pre/prefe/prefer__us_3.mp3"
      },
      {
        "text": "dessert",
        "phoneticUK": "/dɪˈzɜːt/",
        "phoneticUS": "/dɪˈzɜːrt/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/d/des/desse/dessert__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/d/des/desse/dessert__us_1.mp3"
      },
      {
        "text": "university",
        "phoneticUK": "/ˌjuːnɪˈvɜːsəti/",
        "phoneticUS": "/ˌjuːnɪˈvɜːrsəti/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/u/uni/unive/university__gb_3.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/u/uni/unive/university__us_1.mp3"
      },
      {
        "text": "early",
        "phoneticUK": "/ˈɜːli/",
        "phoneticUS": "/ˈɜːrli/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/e/ear/early/early__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/e/ear/early/early__us_1.mp3"
      },
      {
        "text": "earth",
        "phoneticUK": "/ɜːθ/",
        "phoneticUS": "/ɜːrθ/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/e/ear/earth/earth__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/e/ear/earth/earth__us_1.mp3"
      },
      {
        "text": "heard"
      },
      {
        "text": "learn",
        "phoneticUK": "/lɜːn/",
        "phoneticUS": "/lɜːrn/",
        "audioUK": "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/l/lea/learn/learn__gb_1.mp3",
        "audioUS": "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/l/lea/learn/learn__us_1.mp3"
      }
    ]
  }
];
