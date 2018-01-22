import React from 'react'
import Radium from 'radium'
import TextField from 'material-ui/TextField'

import FormSection from '../atoms/formSection'
import FormRow from '../atoms/formRow'
import HalfSizeFieldWrapper from '../atoms/halfsizeFormWrapper'
import FullSizeFieldWrapper from '../atoms/fullsizeFormWrapper'

const styles = {
  field: {
    textAlign: 'left',
    width: '100%'
  }
}

const DriverInfo = ({fname, lname, email, error, onFnameChange, onLnameChange, onEmailChange}) => (
  <FormSection>
    <FormRow>
      <HalfSizeFieldWrapper>
        <TextField
          style={styles.field}
          value={fname}
          onChange={onFnameChange}
          errorText={error.fname}
          floatingLabelText="first name"
        />
      </HalfSizeFieldWrapper>
      <HalfSizeFieldWrapper>
        <TextField
          style={styles.field}
          value={lname}
          errorText={error.lname}
          onChange={onLnameChange}
          floatingLabelText="last name"
        />
      </HalfSizeFieldWrapper>
    </FormRow>
    <FormRow>
      <FullSizeFieldWrapper>
        <TextField
          style={styles.field}
          value={email}
          errorText={error.email}
          onChange={onEmailChange}
          floatingLabelText="email"
        />
      </FullSizeFieldWrapper>
    </FormRow>
  </FormSection>
)

export default Radium(DriverInfo)