// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

// DNAStrand ("ATTGC") // return "TAACG"

// // DNAStrand ("GTAT") // return "CATA" 

dna = "ATTGC"

const DNAStrand = dna => {
    complementaryDna = ""

    for (i = 0; i < dna.length; i++) {
        switch (dna[i]) {
            case "A":
                complementaryDna += "T"
                break
            case "T":
                complementaryDna += "A"
                break
            case "C":
                complementaryDna += "G"
                break
            case "G":
                complementaryDna += "C"
                break
        }
    }
    return complementaryDna
}

// console.log(DNAStrand(dna))

//Best Solution
function DNAStrand(dna) {
    return dna.replace(/./g, function (c) {
        return DNAStrand.pairs[c]
    })
}

DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
}

//Another version
var pairs = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' }

function DNAStrand(dna) {
    // console.log(dna.split('').map(function (v) { return pairs[v] }).join(''))
    //1. Split the string into an array. [ 'A', 'T', 'T', 'G', 'C' ]
    //2. Map over array and return a new array with complementary
    //ellements => [ 'T', 'A', 'A', 'C', 'G' ]
    //3. Join them back together into a string => TAACG
    return dna.split('').map(function (v) { return pairs[v] }).join('')
}

console.log(DNAStrand(dna))
