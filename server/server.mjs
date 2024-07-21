import express from 'express';
import ModbusRTU from 'modbus-serial';

const app = express();
const port = 3000;

const client = new ModbusRTU();
// Asegúrate de usar el nombre correcto del puerto para tu sistema operativo.
client.connectRTUBuffered("COM3", { baudRate: 9600 });
client.setID(1);

app.get('/data', async (req, res) => {
  try {
    const data = await client.readHoldingRegisters(100, 2);
    const temperature = data.data[0] / 10.0;
    const humidity = data.data[1] / 10.0;
    res.json({ temperature, humidity });
  } catch (err) {
    res.status(500).send(err.toString());
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
