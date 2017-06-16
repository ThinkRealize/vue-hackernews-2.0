export function isEmptyObject (o) {
  if (o === undefined || o === null) {
    return true
  }
  for (let t in o) {
    if (o.hasOwnProperty(t)) {
      return false
    }
  }
  return true
}

export function isEmptyParam (param) {
  if (param === undefined || param === null) {
    return true
  } else {
    return false
  }
}

export function setPageCount (page, totalCount) {
  if (isEmptyObject(page)) {
    return
  } else {
    page.totalCount = totalCount
    page.pageCount = Math.ceil(totalCount / page.pageSize)
  }
}
