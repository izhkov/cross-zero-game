import Infolayout from './InfoLayout'

const Info = ({ isDraw, isGameEnded, currentPlayer }) => {
  return (
    <Infolayout
      isDraw={isDraw}
      isGameEnded={isGameEnded}
      currentPlayer={currentPlayer}
    />
  )
}

export default Info
