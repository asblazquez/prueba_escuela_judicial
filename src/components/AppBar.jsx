import { useState, Fragment } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';
import LateralMenu from './LateralMenu';
import { Divider } from '@mui/material';
const settings = ['Perfil', 'Cerrar sesión', 'Ajustes'];

function AppBarCoponent() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [ anchordLateralMenu, setAnchordLateralMenu ] = useState(false)

  const optionsCursosFormacion = [
    {
      name: 'Convocatoria de Cursos',
      to: '/convocatoriaCursos'
    },
    {
      name: 'Criterios de Seleccion',
      to: '/criteriosSeleccion'
    },
    {
      name: 'Modulos de Seleccion',
      to: '/modulosSelccion'
    },
    {
      name: 'Catalogo de Actividades',
      to: '/catalogoActividades'
    },
    {
      name: 'Gestion de Dietas',
      to: '/gestionDietas'
    },
    {
      name: 'Gestion de Informes',
      to: '/gestionInformes'
    },
    {
      name: 'Gestion de Alumnos',
      to: '/gestionAlumnos'
    },
    {
      name: 'CENDOJ. Centro de Documentacion Judicial',
      to: '/CENDOJCentroDocJudicial'
    }
  ]

  const optionsAulaIberoAmericana = [
    {
      name: 'Convocatoria de Cursos',
      to: '/convocatoriaCursos'
    },
    {
      name: 'Criterios de Seleccion',
      to: '/criteriosSeleccion'
    },
    {
      name: 'Modulos de Seleccion',
      to: '/modulosSelccion'
    },
    {
      name: 'Catalogo de Actividades',
      to: '/catalogoActividades'
    },
    {
      name: 'Gestion de Dietas',
      to: '/gestionDietas'
    }
  ]

  const optionsEntregaDespachos = [
    {
      name: 'Invitaciones',
      to: '/invitaciones'
    },
    {
      name: 'Organizacion de los asistentes',
      to: '/organizacionAsistentes'
    },
    {
      name: 'Gestion de entradas invitados',
      to: '/gestionEntradasInvitados'
    },
    {
      name: 'Cambio de estado',
      to: '/cambioEstado'
    },
    {
      name: 'Asignacion de plazas de destino',
      to: '/asignacionPlazasDestino'
    }
  ]

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>       
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <Fragment key={'left'}>
              <Button sx={{color: 'white'}}>
                <MenuIcon />
              </Button>
                <Drawer
                  anchor={'left'}
                  open={anchordLateralMenu}
                  onClose={() => { setAnchordLateralMenu(false) }}>
                <Typography mt={3} variant='h6' sx={{padding: '0.25rem', paddingLeft: '0.5rem', color: 'grey'}}>REI Europa</Typography>
                <Divider />
                <LateralMenu tittle='Cursos Formacion' options={optionsCursosFormacion} />
                <MenuItem component={Link} to='visitasInstitucionales' onClick={() => {}}>Visitas Intitucionales</MenuItem>
                <MenuItem component={Link} to='intercambioAutoridadesJudiciales'>Intercambio de autoridades judiciales</MenuItem>
                <Typography mt={3} variant='h6' sx={{padding: '0.25rem', paddingLeft: '0.5rem', color: 'grey'}}>REI Iberoamericana</Typography>
                <Divider />
                <LateralMenu tittle='Aula Iberoamericana' options={optionsAulaIberoAmericana} />
                <MenuItem component={Link} to='formacionJudicialEspeciealizada'>Formacion judicial especiealizada</MenuItem>  
                <MenuItem component={Link} to='visitasInstitucionales'>Visitas Intitucionales</MenuItem>
                <Divider />
                <Typography mt={3} variant='h6' sx={{padding: '0.25rem', paddingLeft: '0.5rem', color: 'grey'}}>Entrega de Despachos</Typography>
                <LateralMenu tittle='Entrega Despachos' options={optionsEntregaDespachos} />
                <Divider />
                <Typography mt={3} variant='h6' sx={{padding: '0.25rem', paddingLeft: '0.5rem', color: 'grey'}}>Pruebas</Typography>
                <MenuItem component={Link} to='tabla'>Tabla</MenuItem>
                <MenuItem component={Link} to='asientos'>Asientos</MenuItem>
                <MenuItem component={Link} to='formulario'>Formulario</MenuItem>
              </Drawer>
            </Fragment>            
            <Box>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  color: 'inherit',
                  textDecoration: 'none',
                  display: { xs: 'none', md: 'flex' }
                }}>
                Escuela Judicial
              </Typography>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Andres" src="https://twitter.com/asanchezb23/photo" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AppBarCoponent;