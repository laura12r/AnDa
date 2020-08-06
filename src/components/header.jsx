import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LogoEstudiante from './1.png';
import LogoUniversidad from './4.png';
import LogoEmpresa from './5.png';
// import Logo from './4.png';
// import Logo from './5.png';



const useStyles = makeStyles((theme) => ({

  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  logoUniversidad:{
    width:'100%',
    maxWidth:'150px',
    marginTop: '10px'
  },
  logoEstudiante:{
    width:'100%',
    maxWidth:'150px',
    marginTop: '10px'
  },
  logoEmpresa:{
    width:'100%',
    maxWidth:'150px',
    marginTop: '10px'
  },
}));


function Header() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>

      <div>
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/QoNL7hj7HKY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
               ANDA'S
            </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Transformamos e innovamos en educación
            </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Quiero saber más
                  </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              <Grid item key='id1' xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  
                <img src={LogoEmpresa} className={classes.logoEmpresa}/>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Estudiantes
                    </Typography>
                    <Typography>
                      Aqui va lo del estudiante
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <div>
                      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                        Quiero saber mas
      </Button>
                      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            To subscribe to this website, please enter your email address here. We will send updates
                            occasionally.
          </DialogContentText>
                          <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                          />
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose} color="primary">
                            Cancel
          </Button>
                          <Button onClick={handleClose} color="primary">
                            Subscribe
          </Button>
                        </DialogActions>
                      </Dialog>
                    </div>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item key='id2' xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  
                <img src={LogoUniversidad} className={classes.logoUniversidad}/>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Universidad
                    </Typography>
                    <Typography>
                      Aqui va lo de la universidad
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <div>
                      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                      Quiero saber mas
      </Button>
                      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            To subscribe to this website, please enter your email address here. We will send updates
                            occasionally.
          </DialogContentText>
                          <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                          />
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose} color="primary">
                            Cancel
          </Button>
                          <Button onClick={handleClose} color="primary">
                            Subscribe
          </Button>
                        </DialogActions>
                      </Dialog>
                    </div>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item key='id3' xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <img src={LogoEstudiante} className={classes.logoEstudiante}/>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Empresa
                    </Typography>
                    <Typography>
                      Aqui va lo de la Empresa
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <div>
                      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                      Quiero saber mas
      </Button>
                      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            To subscribe to this website, please enter your email address here. We will send updates
                            occasionally.
          </DialogContentText>
                          <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                          />
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose} color="primary">
                            Cancel
          </Button>
                          <Button onClick={handleClose} color="primary">
                            Subscribe
          </Button>
                        </DialogActions>
                      </Dialog>
                    </div>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
        </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
        </Typography>

        </footer>
        {/* End footer */}
      </div>
    </React.Fragment>
  );
}

export default Header;