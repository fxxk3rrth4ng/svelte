var ghpages = require('gh-pages');

ghpages.publish (
    'public',
    {
        branch 'gh-pages',
        repo: 'https://github.com/fxxk3rrth4ng/svelte.git',
        user: {
            name: 'fxxk3rrth4ng',
            email: 'baech00@kakao.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)