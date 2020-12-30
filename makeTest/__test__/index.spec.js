test('测试测试代码生成', ()=> {
  const src = new(require('../index'))()
  const ret = src.getTestSource('fn', 'class')
  console.log('ret:', ret)
  expect(ret)
    .toBe(`
      test('测试fn', ()=> {
        const fn = require('../class')
        const ret = fn()
        // expect(ret)
        //  .toBe('ret return')
      })
    `)
})
test('测试文件名生成', ()=> {
  const src = new(require('../index'))()
  const ret = src.getTestFileName('/d/class.js')
  expect(ret)
    .toBe('/d/__test__/class.spec.js')
})