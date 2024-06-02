import {read} from 'to-vfile'
import {toString} from 'nlcst-to-string'
import {retext} from 'retext'
import retextPos from 'retext-pos'
import retextKeywords from 'retext-keywords'

export const file = await retext()
  .use(retextPos) // Make sure to use `retext-pos` before `retext-keywords`.
  .use(retextKeywords)
  .process(await read('src/components/example.txt'))

console.log('Keywords:')
file.data.keywords.forEach((keyword) => {
  console.log(toString(keyword.matches[0].node))
})

console.log()
console.log('Key-phrases:')
file.data.keyphrases.forEach((phrase) => {
  console.log(phrase.matches[0].nodes.map((d) => toString(d)).join(''))
})