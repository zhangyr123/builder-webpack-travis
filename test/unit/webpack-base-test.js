// 测试webpack.base.js
const assert = require('assert')

describe('webpack.base.js test case', () => {
    const baseConfig = require('../../lib/webpack.base')

    it('entry', () => {
        // 覆盖率
        assert.equal(baseConfig.entry.index, 'E:/前端学习/webpack/webpack9/builder-webpack/test/smoke/template/src/index/index.js')
        assert.equal(baseConfig.entry.search, 'E:/前端学习/webpack/webpack9/builder-webpack/test/smoke/template/src/search/index.js')
    })
})