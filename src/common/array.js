export function isEmptyArray (a) {
  if (a === undefined || a === null || !(a instanceof Array) || a.length === 0) {
    return true
  }
  return false
}

export function listItemLabelValue (list, labelName, valueName) {
  if (!isEmptyArray(list)) {
    let newList = []
    for (var i = 0; i < list.length; i++) {
      let item = list[i]
      let newItem = {value: null, label: null}
      newItem.value = item[valueName]
      newItem.label = item[labelName]
      newList.push(newItem)
    }
    return newList
  } else {
    return []
  }
}

export function listItemLabelUrl (list, labelName, url) {
  if (!isEmptyArray(list)) {
    let newList = []
    for (var i = 0; i < list.length; i++) {
      let item = list[i]
      let newItem = {}
      newItem.url = item[url]
      newItem.label = item[labelName]
      newList.push(newItem)
    }
    return newList
  } else {
    return []
  }
}

/**
 * 将根据设置的 length 将一个数组拆分成多个数组。
 * 返回的结果是单个数组，包含拆分后生成的数组。
 * @param  {Array} data   数据源
 * @param  {Number} length 拆分间隔
 * @return {Array}        拆分结果
 */
export function split (data, length) {
  let resultList = []
  if (Array.isArray(data)) {
    for (var i = 0, len = data.length; i < len; i += length) {
      resultList.push(data.slice(i, i + length))
    }
    resultList.forEach(item => {
    })
  }
  return resultList
}
