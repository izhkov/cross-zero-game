import GameLayout from '../Game/GameLayout'
import { useState } from 'react'

const Game = () => {
  let [currentPlayer, setCurrentPlayer] = useState('X')
  let [isGameEnded, setisGameEnded] = useState(false)
  let [isDraw, setisDraw] = useState(false)
  let [field, setField] = useState(['', '', '', '', '', '', '', '', ''])

  function checkWin(fill, player) {
    const patterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    return patterns.some((pattern) =>
      pattern.every((playerIndex) => fill[playerIndex] === player)
    )
  }

  function handle(player, index) {
    const arr = [...field]
    if (arr[index] === '' && isGameEnded === false) {
      arr[index] = currentPlayer
      setField(arr)
    } else {
      return
    }

    let fullItems = arr.every((fieldItem) => {
      return fieldItem !== ''
    })

    if (!isGameEnded && fullItems === false && currentPlayer === 'X') {
      setCurrentPlayer('O')
    } else if (!isGameEnded && fullItems === false && currentPlayer === 'O') {
      setCurrentPlayer('X')
    }

    if (
      checkWin(arr, currentPlayer) &&
      arr.filter((item) => item > currentPlayer)
    ) {
      setisGameEnded(true)
      setCurrentPlayer(currentPlayer)
    }

    if (fullItems === true && !checkWin(arr, currentPlayer)) {
      setisDraw(true)
    }
  }

  function handleClick() {
    setCurrentPlayer('X')
    setisGameEnded(false)
    setisDraw(false)
    setField(['', '', '', '', '', '', '', '', ''])
  }

  return (
    <GameLayout
      currentPlayer={currentPlayer}
      setCurrentPlayer={setCurrentPlayer}
      isGameEnded={isGameEnded}
      setisGameEnded={setisGameEnded}
      isDraw={isDraw}
      setisDraw={setisDraw}
      field={field}
      setField={setField}
      handle={handle}
      handleClick={handleClick}
    />
  )
}

export default Game
