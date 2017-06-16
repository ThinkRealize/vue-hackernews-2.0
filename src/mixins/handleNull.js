import {isEmptyParam} from '../common/object'

export default {
  methods: {
    handleNullString (param) {
      if (isEmptyParam(param)) {
        return ''
      } else {
        return param
      }
    },
    handleNullArray (param) {
      if (isEmptyParam(param)) {
        return []
      } else {
        return param
      }
    }
  }
}
