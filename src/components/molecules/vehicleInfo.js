import React from 'react'
import Radium from 'radium'
import TextField from 'material-ui/TextField'

import FormSection from '../atoms/formSection'
import FormRow from '../atoms/formRow'
import FullSizeFieldWrapper from '../atoms/fullsizeFormWrapper'

const styles = {
  field: {
    textAlign: 'left',
    width: '100%',
    position: 'relative',
  }
}

const VehicleInfo = ({vehicle, error, onChangeVehicle}) => (
  <FormSection>
    <FormRow>
      <FullSizeFieldWrapper>
        <TextField
          style={styles.field}
          value={vehicle}
          onChange={onChangeVehicle}
          floatingLabelText="vehicle"
          errorText={error.brand}
        />
      </FullSizeFieldWrapper>
    </FormRow>
  </FormSection>
)

export default Radium(VehicleInfo)