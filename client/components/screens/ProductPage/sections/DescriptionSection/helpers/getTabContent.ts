function removeFirstClosingTag(inputString: string) {
  const closingTagMatch = inputString.match(/<\/[^>]+>/)
  if (closingTagMatch) {
    const closingTag = closingTagMatch[0]
    const startIndex = inputString.indexOf(closingTag)
    if (startIndex !== -1) {
      const updatedString = inputString.substring(0, startIndex) + inputString.substring(startIndex + closingTag.length)
      return updatedString
    }
  }
  return inputString
}

function removeLastOpeningTag(inputString: string) {
  const openingTagMatch = inputString.match(/<[^/][^>]*>[^<]*$/)
  if (openingTagMatch) {
    const openingTag = openingTagMatch[0]
    const endIndex = inputString.lastIndexOf(openingTag)
    if (endIndex !== -1) {
      const updatedString = inputString.substring(0, endIndex) + inputString.substring(endIndex + openingTag.length)
      return updatedString
    }
  }
  return inputString
}

function findNextOpeningBraceIndex(inputString: string, startIndex: number) {
  if (startIndex !== -1) {
    const nextOpeningBraceIndex = inputString.indexOf('{', startIndex + 1)

    if (nextOpeningBraceIndex !== -1) {
      return nextOpeningBraceIndex
    }
  }
  return -1 
}

const getSubstring = (startIndex: number, endIndex: number, fullStr: string) => {
  if (startIndex === -1 && endIndex === -1  ) return
  
  const sub = fullStr.substring(startIndex, endIndex)
  return removeLastOpeningTag(removeFirstClosingTag(sub))
}

export const getTabContent = (selector: '{tab Характеристики}' | '{tab Описание}' | '<p>{tab Видео}', fullString: string) => {
  if (!fullString.includes(selector)) return ''

  const startIndex = fullString.indexOf(selector) + selector.length
  const endIndex = findNextOpeningBraceIndex(fullString, startIndex)

  return getSubstring(startIndex, endIndex, fullString) || ''
}