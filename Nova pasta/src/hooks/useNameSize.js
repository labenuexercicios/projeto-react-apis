const useNameSize = (nameLength, firstLetter, d, md, lg, xl, xxl, xxxl) => {
  const size = () => {
    switch (true) {
      case nameLength > 10 && firstLetter === 'w':
        return xxxl
      case nameLength > 18 && firstLetter === 'd':
        return xxl
      case nameLength > 19:
        return xl
      case nameLength > 15 && firstLetter === 'p':
        return xxl
      case nameLength > 14 && firstLetter === 'l':
        return lg
      case nameLength > 15:
        return lg
      case nameLength > 10:
        return md
      default:
        return d
    }
  }
  return size
}
export default useNameSize
