module.exports = {
  '*.ts?(x)': [
    'eslint --ignore-path .formatignore -c .eslintrc.json --fix --ext .ts,.tsx',
  ]
}
