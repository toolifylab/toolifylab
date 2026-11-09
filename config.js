// ═══════════════════════════════════════════════════════════════
//  DATOS DE COBRO DE TOOLIFYLAB
//  Edita SOLO lo que está entre comillas '...'. No borres comillas,
//  comas ni llaves. Después de editar, guarda con "Commit changes".
// ═══════════════════════════════════════════════════════════════
window.TOOLIFY_CONFIG = {

  // 1) Clave de Web3Forms. Te llega por correo cuando registras
  //    toolifylab26@gmail.com en web3forms.com. Es un código largo.
  //    Con ella, el aviso de "Ya pagué" te llega solo a tu correo.
  web3formsKey: '',

  // 2) Correo de Toolifylab (contacto y respaldo de avisos)
  correo: 'toolifylab26@gmail.com',

  // 3) Enlaces de los 3 productos de Payhip (pega cada uno entre comillas)
  payhip: {
    basico: '',     // Fluu Básico, 1 mes, $12
    popular: '',    // Fluu Popular, 3 meses, $30
    mejor: ''       // Fluu Mejor precio, 12 meses, $99
  },

  // 4) Datos de Pago Móvil que verá el cliente
  pagoMovil: {
    banco: 'PENDIENTE',      // ejemplo: Banesco
    cedula: 'PENDIENTE',     // cédula o RIF
    telefono: 'PENDIENTE'    // teléfono afiliado al Pago Móvil
  },

  // 5) Tu ID de Binance Pay
  binance: {
    payId: 'PENDIENTE'
  },

  // 6) TASA DEL DÍA: cuántos bolívares vale 1 dólar. Cámbiala cada día.
  //    Usa punto para los decimales, sin comillas. Ejemplo: 38.45
  tasaBs: 0,
  tasaFecha: ''     // fecha de esa tasa, por ejemplo: '10/11/2026'

};
