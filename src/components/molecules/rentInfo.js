import React from 'react'
import Radium from 'radium'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import DateTimePicker from 'material-ui-datetimepicker'
import DatePickerDialog from 'material-ui/DatePicker/DatePickerDialog'
import TimePickerDialog from 'material-ui/TimePicker/TimePickerDialog'

import FormSection from '../atoms/formSection'
import FormRow from '../atoms/formRow'
import HalfSizeFieldWrapper from '../atoms/halfsizeFormWrapper'

const styles = {
  field: {
    textAlign: 'left',
    margin: 'auto',
    position: 'relative',
    width: '100%'
  }
}

const RentInfo = ({startDate, endDate, rate, status, error, onChangeStartDate, onChangeEndDate, onChangeRate, onChangeStatus}) => (
  <FormSection>
    <FormRow>
      <HalfSizeFieldWrapper>
        <DateTimePicker
          textFieldStyle={styles.field}
          value={new Date(startDate)}
          format={'MM.DD.YY HH:mma'}
          onChange={onChangeStartDate}
          DatePicker={DatePickerDialog}
          TimePicker={TimePickerDialog}
          floatingLabelText="start date"
          clearIconStyle={{
            display: 'none'
          }}
          errorText={error.startDate}
        />
      </HalfSizeFieldWrapper>
      <HalfSizeFieldWrapper>
        <DateTimePicker
          textFieldStyle={styles.field}
          format={'MM.DD.YY HH:mma'}
          value={new Date(endDate)}
          onChange={onChangeEndDate}
          DatePicker={DatePickerDialog}
          TimePicker={TimePickerDialog}
          floatingLabelText="end date"
          clearIconStyle={{
            display: 'none'
          }}
          errorText={error.endDate}
        />
      </HalfSizeFieldWrapper>
    </FormRow>
    <FormRow>
      <HalfSizeFieldWrapper>
        <TextField
          style={styles.field}
          value={rate}
          onChange={onChangeRate}
          floatingLabelText="rate"
          errorText={error.rate}
        />
      </HalfSizeFieldWrapper>
      <HalfSizeFieldWrapper>
        <SelectField
          style={styles.field}
          floatingLabelText="status"
          value={status}
          onChange={onChangeStatus}
          errorText={error.status}
        >
          <MenuItem value={'reserved'} primaryText="Reserved" />
          <MenuItem value={'active'} primaryText="Active" />
          <MenuItem value={'returned'} primaryText="Returned" />
          <MenuItem value={'archived'} primaryText="Archived" />
        </SelectField>
      </HalfSizeFieldWrapper>
    </FormRow>
  </FormSection>
)

export default Radium(RentInfo)