import styles from './info.module.css'

const Infolayout = ({ isDraw, isGameEnded, currentPlayer }) => {
  return (
    <p className={styles.infoBlock}>
      {!isDraw && !isGameEnded
        ? `Ходит ${currentPlayer}`
        : !isDraw && isGameEnded
        ? `Победа: ${currentPlayer}`
        : isDraw
        ? `Ничья`
        : ``}
    </p>
  )
}

export default Infolayout
