const myName = 'Sergio';

const stringSubstitute = (string) => {
  const stringReplace = string.replace('x', myName);
  return stringReplace
} 

console.log(stringSubstitute(`Tryber x aqui.`));