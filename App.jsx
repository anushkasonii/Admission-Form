import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './theme';
import Navigation from './components/Navigation';
import AdmissionDetails from './components/AdmissionDetails';
import AdmissionForm from './components/AdmissionForm';
import FormPreview from './components/FormPreview';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth={false} sx={{ py: 2, ml: 0 }}>
          <Navigation />
          <Routes>
            <Route path="/" element={<AdmissionDetails />} />
            <Route path="/admission-form" element={<AdmissionForm />} />
            <Route path="/form-preview" element={<FormPreview />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
