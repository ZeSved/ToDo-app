
export function compare() {
  const black = [0, 0, 0]
  const white = [255, 255, 255]
  const color = [0, 0, 0]

  const colorToBlackDistance = Math.pow(Math.pow(black[0] - color[0], 2) + Math.pow(black[1] - color[1], 2) + Math.pow(black[2] - color[2], 2), 2)

  const colorToWhiteDistance = Math.pow(Math.pow(white[0] - color[0], 2) + Math.pow(white[1] - color[1], 2) + Math.pow(white[2] - color[2], 2), 2)

  if (colorToBlackDistance < colorToWhiteDistance) {
    return true
  } else {
    return false
  }
}

export function convert(color: string) {
  const arr: string[] = color.split('')
  arr.forEach(item => {
    item = item.replace('a', '10')
    item = item.replace('b', '11')
    item = item.replace('c', '12')
    item = item.replace('d', '13')
    item = item.replace('e', '14')
    item = item.replace('f', '15')
  })

  // const newArr =
  // return newArr
}
