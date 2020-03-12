// 测试webpack.base.js
const assert = require('assert')

describe('webpack.base.js test case', () => {
    const baseConfig = require('../../lib/webpack.base')

    it('entry', () => {
        // 覆盖率
        assert.equal(baseConfig.entry.index, '/home/travis/build/zhangyr123/builder-webpack-travis/test/smoke/template/src/index/index.js')
        assert.equal(baseConfig.entry.search, '/home/travis/build/zhangyr123/builder-webpack-travis/test/smoke/template/src/search/index.js')
    })
})