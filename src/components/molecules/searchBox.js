import React from 'react'
import TextFieldIcon from 'material-ui-textfield-icon'
import ActionSearch from 'react-material-icons/icons/action/search'

const SearchBox = ({onChange}) => {
  return (
    <TextFieldIcon
      hintText='Search...'
      icon={<ActionSearch />}
      iconPosition="before"
      fullWidth={false}
      onChange={(event, newValue) => {
        onChange(newValue)
      }}
    />
  )
}

export default SearchBox