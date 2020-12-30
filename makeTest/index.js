const { basename, extname } = require('path')
const path = require('path')

module.exports = class MakeTest {
  getTestSource (methodName, classFile, isClass=false) {
    console.log('getTestSource:', methodName)
    return `
      test('测试${methodName}', ()=> {
        const ${isClass?'{'+methodName+'}':methodName} = require('${'../'+classFile}')
        const ret = ${methodName}()
        // expect(ret)
        //  .toBe('ret return')
      })
    `
  }
  /**
   * @desc 生成测试文件名
   * @param {*} filename 代码文件名
   */
  getTestFileName (filename) {
    const dirName = path.dirname(filename)
    const baseName = path.basename(filename)
    const extName = path.extname(filename)
    // console.log('filename:',filename)
    // console.log('dirName:', dirName)
    // console.log('baseName:', baseName)
    // console.log('extName:', extName)

    const testName = baseName.replace(extName, `.spec${extName}`)
    return path.format({
      root: `${dirName}/__test__/`,
      base: testName
    })
  }
}