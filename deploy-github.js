const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/mohakjain/mohakjain.github.io.git',
  },
  () => {
    console.log('Deployed.')
  }
)
