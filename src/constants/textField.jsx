import React from 'react';
import { TextField } from '@material-ui/core';

export const TextFieldInput = ({
  disabled, helperText, label, placeholder, size, variant, onChange,
}) => (
  <TextField
    id="standard-basic"
    label={label}
    disabled={disabled}
    placeholder={placeholder}
    helperText={helperText}
    size={size}
    variant={variant}
    onChange={(e) => onChange(e.target.value)}
  />
);
