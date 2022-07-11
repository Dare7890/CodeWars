function alphabetPosition(text) {
    const regExp = /[A-Za-z]/g;
    const letters = text.match(regExp);
    if (letters == null || letters.length === 0) {
      return '';
    }
  
    return letters.map(l => l.toLowerCase().charCodeAt() - 96).join(' ');
}

const positions = alphabetPosition("The sunset sets at twelve o' clock.");
console.log(positions);