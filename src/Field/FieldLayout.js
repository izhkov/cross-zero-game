import styles from './field.module.css'

const Fieldlayout = ({ field, handle }) => {
  return (
    <div className={styles.container}>
      {field.map((player, index) => (
        <div
          key={index}
          className={styles.fieldItem}
          onClick={() => handle(player, index)}
        >
          {player}
        </div>
      ))}
    </div>
  )
}

export default Fieldlayout
