// Task:
// Your goal is to create a function instrumental() which returns the valid form of a valid Hungarian word w in instrumental case i. e. append the correct suffix -vel or -val to the word w based on vowel harmony rules.

// Vowel Harmony Rules (simplified)
// Front vowels: e, é, i, í, ö, ő, ü, ű

// Back vowels: a, á, o, ó, u, ú

// Vowel pairs (short -> long): a -> á, e -> é, i -> í, o -> ó, u -> ú, ö -> ő, ü -> ű

// Digraphs: sz, zs, cs

// Word ends with a vowel
// Change the ending vowel from short to long form.
// Append the suffix:
// vel if the ending vowel is a front vowel
// val if the ending vowel is a back vowel
// Word ends with a consonant
// Step one
// Default case: Double the ending consonant and continue with step two.
// Special case: If the word ends with a digraph then double the first letter (e. g. sz -> ssz)
// Step two
// Append the suffix:

// el if the last vowel is a front vowel
// al if the last vowel is a back vowel
// Examples:
// instrumental("fa") === "fával"
// instrumental("teve") === "tevével"
// instrumental("betű") === "betűvel"
// instrumental("ablak") === "ablakkal"
// instrumental("szék") === "székkel"
// instrumental("otthon") === "otthonnal"
// instrumental("kar") === "karral"
// instrumental("rács") === "ráccsal"
// instrumental("kosz") === "kosszal"
// Preconditions:
// All strings are unicode strings.
// The tests don't contain:
// exceptional cases like kávé -> kávéval
// words ending with doubled consonants (e. g. tett)
// words ending with y
// words ending with u, i

const cWord = "ablak"
const vWord = "betű"
const vWord2 = "fa"
const digraph = "gonosz"

function instrumentalPseudo(word) {
    //Figure out whether the word ends in a vowel or a constant
    //Assign the the finalLetter to a variable
    return ''
}

//Solution 1
const vowelPairs = {
    a: "á",
    e: "é",
    i: "í",
    o: "ó",
    u: "ú",
    ö: "ő",
    ü: "ű"
}

function instrumental(word) {
    const finalLetter = word.slice(-1)
    const finalTwoLeters = word.slice(-2)
    const allVowels = "eéiíöőüűaáoóuú"
    const frontVowels = "eéiíöőüű"
    const digraphs = ["sz", "zs", "cs"]
    const reverseWord = word.split('').reverse()
    const lastVowel = reverseWord.find(char => allVowels.includes(char))
    let result = ""

    if (allVowels.includes(finalLetter)) {
        vowelPairs[finalLetter]
            ? result += word.replace(/.$/, vowelPairs[finalLetter])
            : result += word

        return frontVowels.includes(finalLetter)
            ? result += "vel"
            : result += "val"
    }

    if (digraphs.includes(finalTwoLeters)) {
        const newEnding = finalTwoLeters[0] + finalTwoLeters
        result = word.replace(finalTwoLeters, newEnding)

        return frontVowels.includes(lastVowel)
            ? result += "el"
            : result += "al"
    }

    const doubleEnding = finalLetter + finalLetter
    result = word.replace(finalLetter, doubleEnding)

    return frontVowels.includes(lastVowel)
        ? result += "el"
        : result += "al"
}

console.log(instrumental(cWord))