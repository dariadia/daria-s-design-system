module.exports = {
  '*.ts?(x)': [
    // TODO: uncomment this when most typescript errors are fixed
    // 'ts-node eslint-custom/typecheck-files',
    'eslint --ignore-path .formatignore -c .eslintrc.json --fix --ext .ts,.tsx',
  ]
}
