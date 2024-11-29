import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import theme from './theme';
import Navigation from './components/Navigation';
// import SubNavigation from './components/SubNavigation';
import AdmissionForm from './components/AdmissionForm';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container  sx={{ py: 2, ml:0 }}>
        <Navigation />
        {/* <SubNavigation /> */}
        <AdmissionForm />
      </Container>
    </ThemeProvider>
  );
}

export default App;