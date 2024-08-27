import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Box, Typography, Checkbox, FormControlLabel } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Validasi form menggunakan Yup
const LoginSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  // Fungsi untuk mengirim data login
  const handleSubmit = async (values: { email: string; password: string; rememberMe: boolean }) => {
    // console.log('Form values:', values); // Menampilkan nilai yang dikirim dari form
  
    try {
      // Mengirim request POST ke server
      const response = await axios.post('http://localhost:8080/login', {
        email: values.email,
        password: values.password
      });
      // console.log('Login response:', response); // Menampilkan respons dari server
  
      // Menyimpan username di localStorage jika "Remember Me" dicentang
      if (values.rememberMe) {
        localStorage.setItem('username', values.email);
      } else {
        localStorage.removeItem('username');
      }
  
      // Menavigasi ke halaman kategori setelah login berhasil
      navigate('/categories');
    } catch (error) {
      // Menangani error jika login gagal
      if (axios.isAxiosError(error) && error.response) {
        console.error('Login error response:', error.response); // Menampilkan respons error dari server
        setError(error.response.data.message || 'Login failed');
      } else {
        console.error('Unexpected error:', error); // Menampilkan error yang tidak terduga
        setError('An unexpected error occurred');
      }
    }
  };
  

  return (
    <Box sx={{ width: '100%' }}>
      <Formik
        initialValues={{ email: '', password: '', rememberMe: false }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6">Login</Typography>
              <Field
                as={TextField}
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <Field
                as={TextField}
                name="password"
                type="password"
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <FormControlLabel
                control={<Field as={Checkbox} name="rememberMe" />}
                label="Remember Me"
              />
              <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                Login
              </Button>
              {error && <Typography color="error">{error}</Typography>}
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default LoginPage;
