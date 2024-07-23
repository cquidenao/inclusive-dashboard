import axios from 'axios';
import qs from 'qs';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());

const BASE_API_URL = 'https://api2.arduino.cc/iot/v2';
const THING_ID = process.env.THING_ID;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

let tokenCache = {
  token: null,
  expiresAt: null,
};

const getAccessToken = async () => {
  const now = new Date();
  if (tokenCache.token && tokenCache.expiresAt > now) {
    return tokenCache.token;
  }
  
  try {
    const response = await axios.post('https://api2.arduino.cc/iot/v1/clients/token', 
      qs.stringify({
        grant_type: 'client_credentials',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        audience: 'https://api2.arduino.cc/iot'
      }), 
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    const expiresIn = response.data.expires_in;
    tokenCache.token = response.data.access_token;
    tokenCache.expiresAt = new Date(now.getTime() + expiresIn * 1000);
    return tokenCache.token;
  } catch (error) {
    console.error('Error al obtener el token de acceso:', error.response ? error.response.data : error.message);
  }
};

const fetchData = async () => {
  try {
    const token = await getAccessToken();
    if (!token) {
      throw new Error('No se pudo obtener el token de acceso');
    }
    const response = await axios.get(`${BASE_API_URL}/things/${THING_ID}/properties`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (err) {
    console.error('Error al obtener datos de la API:', err);
    return null;
  }
};

// Función para formatear números con separador de miles y signo de peso
const formatCurrency = (num) => {
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'CLP' }).format(num);
};

// Endpoint para servir el voltaje
app.get('/data/voltaje', async (req, res) => {
  const data = await fetchData();
  if (data) {
    const voltaje = data.find(property => property.name === 'voltaje');
    if (voltaje) {
      res.json({ voltaje: voltaje.last_value.toFixed(2) });
    } else {
      res.status(404).json({ error: 'Voltaje no encontrado' });
    }
  } else {
    res.status(500).json({ error: 'Error al obtener datos de la API' });
  }
});

// Endpoint para servir proIngresosHr
app.get('/data/proIngresosHr', async (req, res) => {
  const data = await fetchData();
  if (data) {
    const proIngresosHr = data.find(property => property.name === 'proIngresosHr');
    if (proIngresosHr) {
      res.json({ proIngresosHr: formatCurrency(proIngresosHr.last_value) });
    } else {
      res.status(404).json({ error: 'proIngresosHr no encontrado' });
    }
  } else {
    res.status(500).json({ error: 'Error al obtener datos de la API' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}/data`);
});
