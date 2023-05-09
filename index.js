const model = [
    { type: 'title', value: 'Hello World from Js' },
    { type: 'text', value: 'here we go with some text' },
    {type: 'columns', value: [
            '111111111',
            '222222222',
            '333333333'
    ]}
]

const $site = document.querySelector('#site')

model.forEach(block => {
    console.log(block)
})