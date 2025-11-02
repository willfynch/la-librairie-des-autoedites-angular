export function slugify(input: string | undefined): string {

  if(!input){
    throw new SlugifyError("NO INPUT ! An error occurred with slugify function.\n Impossible to slugify the content title which was " + input)
  }
  input = input.replace(/^\s+|\s+$/g, '');

  // Make the inputing lowercase
  input = input.toLowerCase();

  // Remove accents, swap ñ for n, etc
  const from = "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;";
  const to   = "AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------";
  for (let i=0, l=from.length ; i<l ; i++) {
      input = input.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }
  input = input.replace('œ', 'oe').replace("’", '-')
  // Remove invalid chars
  input = input.replace(/[^a-z0-9 -]/g, '').trim()
  // Collapse whitespace and replace by -
  input = input.replace(/\s+/g, '-') 
  // Collapse dashes
  input = input.replace(/-+/g, '-')
  

  return input;
}


export class SlugifyError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'SlugifyError'
  }
}