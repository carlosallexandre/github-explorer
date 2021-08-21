module.exports = {
  presets: [
    '@babel/preset-env',
    // { runtime: 'automatic' } - configuração para evitar o import de
    // react em todos os arquivos .jsx
    ['@babel/preset-react', {
      runtime: 'automatic'
    }]
  ]
};
