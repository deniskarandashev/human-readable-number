module.exports = function toReadable(number) {

    let res = "";

    const d = number % 10;
    const dec = (number % 100 - number % 10) / 10;
    const decF = number % 100
    const hund = (number - number % 100) / 100;

    if (number < 10) {
        if (number === 0) res = "zero";
        if (number === 1) res = "one";
        if (number === 2) res = "two";
        if (number === 3) res = "three";
        if (number === 4) res = "four";
        if (number === 5) res = "five";
        if (number === 6) res = "six";
        if (number === 7) res = "seven";
        if (number === 8) res = "eight";
        if (number === 9) res = "nine";
        return res;
    }

    if (hund > 0) {
        if (hund === 1) res = "one hundred"
        if (hund === 2) res = "two hundred"
        if (hund === 3) res = "three hundred"
        if (hund === 4) res = "four hundred"
        if (hund === 5) res = "five hundred"
        if (hund === 6) res = "six hundred"
        if (hund === 7) res = "seven hundred"
        if (hund === 8) res = "eight hundred"
        if (hund === 9) res = "nine hundred"
    }

    if (hund > 0 && dec > 0) res = res + " ";

    if (dec > 1) {
        if (dec === 2) res = res + "twenty";
        if (dec === 3) res = res + "thirty";
        if (dec === 4) res = res + "forty";
        if (dec === 5) res = res + "fifty";
        if (dec === 6) res = res + "sixty";
        if (dec === 7) res = res + "seventy";
        if (dec === 8) res = res + "eighty";
        if (dec === 9) res = res + "ninety";
        if (d != 0) res = res + " ";
    } else if (dec === 1) {
        if (decF === 10) res = res + "ten";
        if (decF === 11) res = res + "eleven";
        if (decF === 12) res = res + "twelve";
        if (decF === 13) res = res + "thirteen";
        if (decF === 14) res = res + "fourteen";
        if (decF === 15) res = res + "fifteen";
        if (decF === 16) res = res + "sixteen";
        if (decF === 17) res = res + "seventeen";
        if (decF === 18) res = res + "eighteen";
        if (decF === 19) res = res + "nineteen";
        return res;
    }

    if (d != 0) {
        if (hund > 0 && dec === 0) res = res + " ";
        if (d === 1) res = res + "one";
        if (d === 2) res = res + "two";
        if (d === 3) res = res + "three";
        if (d === 4) res = res + "four";
        if (d === 5) res = res + "five";
        if (d === 6) res = res + "six";
        if (d === 7) res = res + "seven";
        if (d === 8) res = res + "eight";
        if (d === 9) res = res + "nine";
    }
    return res;
}
