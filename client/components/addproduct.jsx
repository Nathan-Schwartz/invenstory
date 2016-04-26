import React from 'react'
import { Button, Input, Dialog } from 'react-toolbox'
// import Dashboard from '../containers/dashboard'


export default (props) =>

  <div>
    <Dialog active={true} title="ADD PRODUCT">
      <Input 
        className=""
        type='text' 
        label='ASIN for product'
        name='asin'
        required={true}
        maxLength={10}
        value={props.asin}
        error={props.err_asin}
        onChange={props.handleInput.bind(this, 'asin')} 
      />
      <Input 
        className=""
        type='number' 
        label='Purchase Price'
        name='purchase_price'
        required={true}
        value={props.purchase_price}
        error={props.err_purchase_price}
        onChange={props.handleInput.bind(this, 'purchase_price')} 
      />
      <Input 
        className=""
        type='number' 
        label='Quantity'
        name='quantity'
        required={true}
        value={props.quantity}
        error={props.err_quantity}
        onChange={props.handleInput.bind(this, 'quantity')} 
      />
      <Input 
        className=""
        type='date' 
        label='Date Purchased' 
        name='purchase_date'
        required={true}
        value={props.purchase_date}
        error={props.err_purchase_date}
        onChange={props.handleInput.bind(this, 'purchase_date')} 
      />
      <Button
        className=""
        label='Submit' raised floating
        onMouseUp={props.handleSubmit.bind(this)}
      />
      <Button
        className=""
        label='Cancel' raised floating
        onMouseUp={props.resetModal.bind(this)}
      />
    </Dialog>
  </div>

/*

disabled  Specifies that an input field should be disabled
max       Specifies the maximum value for an input field
maxlength Specifies the maximum number of character for an input field
min       Specifies the minimum value for an input field
pattern   Specifies a regular expression to check the input value against
readonly  Specifies that an input field is read only (cannot be changed)
required  Specifies that an input field is required (must be filled out)
size      Specifies the width (in characters) of an input field
step      Specifies the legal number intervals for an input field
value     Specifies the default value for an input field

 */