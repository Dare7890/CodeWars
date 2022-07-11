// 1 вариант
let uniqueInOrder=function(iterable){
    let characters = [];
    if (iterable == null || iterable.length === 0) {
        return characters;
    }

    let currentCharacter = iterable[0];
    characters.push(currentCharacter);
    for (const ch of iterable) {
        if (currentCharacter !== ch) {
            currentCharacter = ch;
            characters.push(currentCharacter);
        }
    }

    return characters;
  }

// 2 вариант
let uniqueInOrder=function(iterable){
    return [...iterable].filter((i, index) => i !== iterable[index - 1])
  }
testString = 'AAAABBBCCDAABBB';
uniqueInOrderString = uniqueInOrder(testString);
alert(uniqueInOrderString);