// import {createComponent} from '../vm'
import Comment from '../../../src/components/Comment.vue'

describe('Comment', () => {
  it('has a created hook', () => {
    expect(typeof Comment.created).toBe('function')
  })
  it('data options is function', () => {
    expect(typeof Comment.data).toBe('function')
    const defaultData = Comment.data()
    expect(defaultData.open).to.true
  })
})
