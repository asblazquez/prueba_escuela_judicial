import { Container, Grid, TextField, MenuItem, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useForm } from "react-hook-form"; 
import { CustomTextField } from "../components/CustomTextField";

export function Formulario(){
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
  }

  const options = [
    { value: '0', label: 'Seleccione su género'},
    { value: '1', label: 'Hombre' },
    { value: '2', label: 'Mujer' },
    { value: '3', label: 'Otro' }
  ];

    return (
        <Container maxWidth="xl" sx={{ mt: 3 }}>
          <form onSubmit={handleSubmit(onSubmit)}>           
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <CustomTextField 
                    name='Nombre' 
                    type='text' 
                    register={register("Nombre", { required: 'El campo Nombre es necesario'})} 
                    error = {!!errors.Nombre}
                    message = {errors.Nombre?.message}/>
                </Grid>
                <Grid item xs={12} md={8}>
                <CustomTextField 
                    name='Apellidos' 
                    type='text' 
                    register={register("Apellidos", { required: 'El campo Apellidos es necesario' })} 
                    error = {!!errors.Apellidos}
                    message = {errors.Apellidos?.message}/>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{mt: 2}}>
                <Grid item xs={12} md={8}>
                <CustomTextField 
                    name='Correo Electronico' 
                    type='text' 
                    register={register("Correo", { required: 'El campo Apellidos es necesario' })} 
                    error = {!!errors.Correo}
                    message = {errors.Correo?.message}/>
                </Grid>
                <Grid item xs={12} md={4}>
                <TextField
                    id="Genero"
                    select
                    label="Select"
                    defaultValue="0"
                    helperText={errors.Genero?.message}
                    fullWidth
                    error = {!!errors.Genero}
                    {...register("Genero", { required: 'El Genero es necesario', min: 1 })}
                  >
                    {options.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                </TextField>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{mt: 1}}>
              <Grid item xs={12} md={2}>
                <CustomTextField 
                    name='Telefono' 
                    type='number' 
                    register={register("Telefono", { required: 'El campo Apellidos es necesario' })} 
                    error = {!!errors.Telefono}
                    message = {errors.Telefono?.message}/>
              </Grid>
              <Grid item xs={12} md={10}>
              <CustomTextField 
                    name='Direccion' 
                    type='text' 
                    register={register("Direccion", { required: 'El campo Apellidos es necesario' })} 
                    error = {!!errors.Direccion}
                    message = {errors.Direccion?.message}/>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{mt: 2}}>
              <Grid item xs={12} md={12}>
              <CustomTextField 
                    name='Descripcion' 
                    type='text' 
                    register={register("Descripcion", { required: 'El campo Apellidos es necesario' })} 
                    error = {!!errors.Descripcion}
                    message = {errors.Descripcion?.message}/>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{mt: 2, justifyContent: "end"}}>
              <Grid item xs={12} md={2}>
                <Button variant="contained" type="submit" fullWidth onClick={handleSubmit(onSubmit)} size="lage" endIcon={<SendIcon />} >Enviar</Button>
              </Grid>
            </Grid>
          </form>          
        </Container>
    )
}