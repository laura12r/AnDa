import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
       Datos profesionales
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="semestre" label="Semestre" fullWidth autoComplete="cc-name" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Escriba las materias que haya cursado en las que se sentiría capacitado para enseñar a otros."
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField required id="materias" label="¿Que materias está cursando actualmente?" fullWidth autoComplete="cc-exp" />
        </Grid>
        <Typography variant="h6" gutterBottom>
       Tienes experiencia laboral?
      </Typography>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Si"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}