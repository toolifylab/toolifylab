// ═══════════════════════════════════════════════════════════════
//  DATOS DE COBRO DE TOOLIFYLAB
//  Edita SOLO lo que está entre comillas '...'. No borres comillas,
//  comas ni llaves. Después de editar, guarda con "Commit changes".
// ═══════════════════════════════════════════════════════════════
window.TOOLIFY_CONFIG = {

  // 1) Clave de Web3Forms. Te llega por correo cuando registras
  //    toolifylab26@gmail.com en web3forms.com. Es un código largo.
  //    Con ella, el aviso de "Ya pagué" te llega solo a tu correo.
  web3formsKey: '56f231fc-85e9-4e68-9580-db16eb35600b',

  // 2) Correo de Toolifylab (contacto y respaldo de avisos)
  correo: 'toolifylab26@gmail.com',

  // 3) Enlaces de los 3 productos de Payhip (pega cada uno entre comillas)
  payhip: {
    basico: 'https://payhip.com/b/TPK21',     // Fluu Básico, 1 mes, $12
    popular: 'https://payhip.com/b/b23Tx',    // Fluu Popular, 3 meses, $30
    mejor: 'https://payhip.com/b/px6QL'       // Fluu Mejor precio, 12 meses, $99
  },

  // 4) Datos de Pago Móvil que verá el cliente
  pagoMovil: {
    banco: 'Mercantil',      // ejemplo: Banesco
    cedula: '22282428',     // cédula o RIF
    telefono: '04122057832'    // teléfono afiliado al Pago Móvil
  },

  // 5) Tu ID de Binance Pay
  binance: {
    payId: '234154587'
  },

  // 6) TASA DEL DÍA: cuántos bolívares vale 1 dólar. Cámbiala cada día.
  //    Usa punto para los decimales, sin comillas. Ejemplo: 38.45
  tasaBs: 897.53,
  tasaFecha: '09/11/2026'     // fecha de esa tasa, por ejemplo: '10/11/2026'

};
