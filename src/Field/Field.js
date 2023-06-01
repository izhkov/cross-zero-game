import Fieldlayout from './FieldLayout'

const Field = ({ field, setField, currentPlayer, handle }) => {
  return (
    <Fieldlayout
      field={field}
      setField={setField}
      currentPlayer={currentPlayer}
      handle={handle}
    />
  )
}

export default Field
