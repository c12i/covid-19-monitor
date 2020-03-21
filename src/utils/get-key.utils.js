import randomstring from 'randomstring';

export const getKey = name => name.toLowerCase().split(' ').join('') + randomstring.generate(5);