const generate = () => {
  let chars = 'abcdefghijklnmopqrstuvwxyz0123456789';
     return 'xxxxxxxxxxxxxxxxxxxxxx'.replace(/[x]/g, function(c) {
       return chars.charAt(Math.random() * 37);
 });
};

module.exports  = generate;
