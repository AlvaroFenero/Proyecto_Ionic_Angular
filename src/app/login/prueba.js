import { supabase } from './trabajo/src/app/login/supabase'; // Asegúrate de ajustar la ruta según la ubicación real del archivo.
 
async function testConnection() {
  try {
    const { data, error } = await supabase.from('Tipo_usuario').select('*');
    if (error) {
      console.error('Error al consultar la base de datos:', error.message);
    } else {
      console.log('Conexión exitosa a la base de datos.');
      console.log('Datos de la consulta:', data);
    }
  } catch (error) {
    console.error('Error al realizar la consulta:', error);
  }
}
 
// Llama a la función para probar la conexión.
testConnection();
