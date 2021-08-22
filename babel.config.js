module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    // { runtime: 'automatic' } - configuração para evitar o import de
    // react em todos os arquivos .jsx
    ['@babel/preset-react', {
      runtime: 'automatic'
    }]
  ]
};
