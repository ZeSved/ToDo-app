export default class ManageColors {
  compare(){
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

  convert(color: string){
    const arr: string[] | number[] = color.split('')
    arr.forEach(item => {
      item.replace('a', '10')
      item.replace('b', '11')
      item.replace('c', '12')
      item.replace('d', '13')
      item.replace('e', '14')
      item.replace('f', '15')

      Number(item)
    })

    //const newArr = arr[arr[0] + arr[1]]
  }
}
