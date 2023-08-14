import { TextField } from "@mui/material";

export function CustomTextField(props){
    const { name, type, register, error, message } = props

    const textFieldOptions = {
        variant:"outlined",
        fullWidth: true,
      }
    return (
        <TextField id={name} label={name} type={type} error={error} helperText={message} {...register} {...textFieldOptions}/>
    )
}