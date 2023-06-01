import Info from '../Info/Info'
import Field from '../Field/Field'
import styles from './game.module.css'

const GameLayout = (props) => {
  return (
    <>
      <Info
        isDraw={props.isDraw}
        isGameEnded={props.isGameEnded}
        currentPlayer={props.currentPlayer}
      />
      <Field
        field={props.field}
        setField={props.setField}
        currentPlayer={props.currentPlayer}
        handle={props.handle}
      />
      <button onClick={props.handleClick} className={styles.newGameButton}>
        Начать заново
      </button>
    </>
  )
}

export default GameLayout
