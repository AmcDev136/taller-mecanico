export const site = {

    name: "Torque",
    tagline: "Taller mecánico de confianza",
    description: "Mantenimiento, frenos, suspensión y diagnóstico para tu auto. Agenda tu cita por WhatsApp.",
    whatsapp: "52XXXXXXXXXX", // código de país + número, sin + ni espacios
    city: "Ciudad, Estado",
    address: "Calle Ejemplo #Numero, Col. Ejemplo2, CodPost, Ciudad, Estado",
    horarios: [
        { dia: "Lunes a viernes", horas: "09:00 a.m. - 06:00 p.m." },
        { dia: "Sábado a domingo", horas: "Cerrado" },
    ],
    avisoDemo: "Sitio de demostración. La dirección, los horarios, el teléfono y el mapa son solo de ejemplo y no corresponden a un taller real.",

    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60187.546751188296!2d-99.2564981786596!3d19.46756332041921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f88feeed02ef%3A0x143d61825e657a58!2sTALLER%20MEC%C3%81NICO!5e0!3m2!1ses-419!2smx!4v1792886018483!5m2!1ses-419!2smx"
};

export const servicios = [
    { icono: "aceite", titulo: "Cambio de aceite", texto: "Aceite y filtro con la viscosidad que pide tu motor." },
    { icono: "frenos", titulo: "Frenos", texto: "Revisión, balatas, discos y líquido de frenos." },
    { icono: "afinacion", titulo: "Afinación", texto: "Bujías, filtros e inyectores para que rinda como nuevo." },
    { icono: "suspension", titulo: "Suspensión", texto: "Amortiguadores, rotulas y terminales." },
    { icono: "electrico", titulo: "Sistema eléctrico", texto: "Batería, alternador, marcha y diagnóstico." },
    { icono: "diagnostico", titulo: "Diagnóstico por escáner", texto: "Lectura de códigos de falla y pruebas del motor." },
] as const;

export const pasos = [
    { titulo: "Escríbenos", texto: "Mándanos un WhatsApp con tu auto y lo que necesita." },
    { titulo: "Agenda tu cita", texto: "Te confirmamos día y hora disponibles." },
    { titulo: "Revisamos y cotizamos", texto: "Diagnóstico claro y presupuesto antes de empezar." },
    { titulo: "Recoge tu auto", texto: "Te avisamos cuando esté listo." },
];

export const whatsappLink = (mensaje: string) =>
    `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensaje)}`;