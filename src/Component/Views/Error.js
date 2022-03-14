import React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Error = () => {
    return (

        <Stack sx={{ width: '100%' }} spacing={2} >
        <Alert variant="filled" severity="error">
            El sitio web al que ud. intenta ingresar no está disponible
        <h2> Error 404</h2>
        </Alert>
        </Stack>
    );
};

export default Error;