// pasirasyti funkcija kuri priima 2 zodzius ir paraso ar šie žodžiai yra anagramos

function isAnagram(word1, word2) {
  if (word1.length !== word2.length) {
    console.log('Ne');
  } else if (word1.split('').sort().join('') === word2.split('').sort().join('')) {
    console.log('Taip');
  } else {
    console.log('Ne');
  }
}

isAnagram('asd', 'asd');
