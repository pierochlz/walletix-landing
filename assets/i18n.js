/*
 * Walletix landing: i18n (es-419 / en-US)
 * - The Spanish text stays in the HTML. This script keeps the original of every text
 *   and replaces it with the English translation from the EN dictionary (Spanish -> English).
 * - It also translates attributes: placeholder, aria-label, alt, title, <title> and meta description.
 * - The language is saved in localStorage with the same key as the Angular web app
 *   ("walletix_lang"), so the choice is kept when the user goes from the landing to the app.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'walletix_lang';
  var LOCALES = { es: 'es-419', en: 'en-US' };
  var ATTRIBUTES = ['placeholder', 'aria-label', 'alt', 'title'];

  var EN = {
    // <head>
    'Walletix - Empieza a Ahorrar, Empieza a Ganar | Gestión Financiera Inteligente': 'Walletix - Start Saving, Start Winning | Smart Money Management',
    'Walletix es la plataforma fintech de gestión financiera inteligente que te ayuda a organizar ingresos, controlar gastos en tiempo real y alcanzar metas de ahorro.': 'Walletix is the smart money management fintech platform that helps you organize your income, track your expenses in real time and reach your savings goals.',
    'Walletix - Iniciar Sesión': 'Walletix - Log In',
    'Accede a tu cuenta de Walletix y gestiona tus finanzas personales de manera inteligente.': 'Access your Walletix account and manage your personal finances the smart way.',

    // Header and navigation
    'Saltar al contenido principal': 'Skip to main content',
    'Navegación principal': 'Main navigation',
    'Inicio': 'Home',
    'Funciones': 'Features',
    'Beneficios': 'Benefits',
    'Atención al Usuario': 'Customer Support',
    'Iniciar Sesión': 'Log In',
    'Regístrate Gratis': 'Sign Up Free',
    'Abrir menú': 'Open menu',
    'Abrir Gastos en la app': 'Open Expenses in the app',
    'Abrir el panel de inicio en la app': 'Open the dashboard in the app',
    'Abrir Presupuestos en la app': 'Open Budgets in the app',
    'Abrir Metas de ahorro en la app': 'Open Savings goals in the app',
    'Abrir Mi perfil en la app': 'Open My profile in the app',
    'Registrarse': 'Sign Up',
    'Volver': 'Back',

    // Hero
    'EMPIEZA A': 'START',
    'AHORRAR': 'SAVING',
    'GANAR': 'WINNING',
    'En un mundo donde cada gasto cuenta, tener control de tus finanzas nunca fue tan importante.': 'In a world where every expense counts, being in control of your finances has never been so important.',
    'está diseñado para ayudarte a organizar tus ingresos, controlar tus egresos y alcanzar tus metas de ahorro, sin importar si eres estudiante dando tus primeros pasos o un profesional en crecimiento.': 'is designed to help you organize your income, control your spending and reach your savings goals, whether you are a student taking your first steps or a growing professional.',
    'Regístrate': 'Sign Up',
    'Sin comisiones ocultas': 'No hidden fees',
    'Walletix Logo': 'Walletix logo',
    'Walletix - Tarjeta Oficial de Marca': 'Walletix - Official brand card',

    // Features
    'Funcionalidades del Sistema': 'System Features',
    'Todo lo que necesitas para dominar tus finanzas personales': 'Everything you need to master your personal finances',
    'Módulos diseñados específicamente para resolver los problemas reales de presupuesto, control de gastos diarios y creación de patrimonio.': 'Modules designed specifically to solve real problems of budgeting, daily expense control and wealth building.',
    'Control de Gastos e Ingresos en Tiempo Real': 'Real-Time Expense and Income Tracking',
    'Actualización instantánea': 'Instant updates',
    'Análisis Comparativo y Gráficos Visuales': 'Comparative Analysis and Visual Charts',
    'Métricas en PEN (S/.)': 'Metrics in PEN (S/.)',
    'Límites Presupuestales y Alertas Inteligentes': 'Budget Limits and Smart Alerts',
    'Alertas preventivas': 'Early warnings',
    'Gamificación, Retos y Logros de Ahorro': 'Gamification, Challenges and Savings Achievements',
    'Insignias de constancia': 'Consistency badges',
    'Método 50 / 30 / 20': '50 / 30 / 20 Method',
    'Seguridad y Privacidad de tus Datos': 'Security and Privacy of Your Data',
    'Contraseñas cifradas con BCrypt, sesiones protegidas con tokens JWT y permisos por rol: cada usuario solo puede ver y editar su propia información.': 'Passwords encrypted with BCrypt, sessions protected with JWT tokens and role-based permissions: each user can only see and edit their own information.',

    // Dashboard showcase
    'Diseñado para la velocidad y la claridad financiera': 'Designed for speed and financial clarity',
    'Análisis Financiero • Auditoría Temporal': 'Financial Analysis • Time Audit',
    'Marzo 2025': 'March 2025',
    'Cierre oficial': 'Official close',
    'Curva de Ingresos vs Egresos': 'Income vs. Expenses Curve',
    'Ingresos (S/)': 'Income (S/)',
    'Egresos (S/)': 'Expenses (S/)',
    'Enero 2025': 'January 2025',
    'Febrero 2025': 'February 2025',
    'Marzo 2025 (S/ +1,200)': 'March 2025 (S/ +1,200)',
    'Ingreso Medio Mensual': 'Average Monthly Income',
    'Gasto Medio Controlado': 'Average Controlled Spending',
    '✓ Dentro del tope sugerido de S/ 1,500': '✓ Within the suggested cap of S/ 1,500',
    'Mes / Período': 'Month / Period',
    'Ingresos': 'Income',
    'Egresos': 'Expenses',
    'Balance Neto': 'Net Balance',
    'Diagnóstico': 'Diagnosis',
    'RÉCORD': 'RECORD',
    '★ Excelente': '★ Excellent',
    'Dentro de lo previsto': 'As expected',
    'Desglose de Ingresos y Egresos': 'Income and Expenses Breakdown',
    '4 fuentes activas': '4 active sources',
    'Sueldo Fijo (Nómina)': 'Fixed Salary (Payroll)',
    'Depósito Bancario BCP • Recurrente': 'BCP Bank Deposit • Recurring',
    '73.5% del total': '73.5% of total',
    'Cobrado puntual el 28': 'Paid on time on the 28th',
    'Proyectos Freelance & Asesorías': 'Freelance Projects & Consulting',
    'Consultorías de UX & Desarrollo • Variable': 'UX & Development Consulting • Variable',
    '16.3% del total': '16.3% of total',
    '2 entregables liquidados': '2 deliverables paid',
    'Topes de Seguridad Preventiva': 'Preventive Safety Caps',
    'Límites Presupuestales Mensuales': 'Monthly Budget Limits',
    'Regla 50 / 30 / 20': '50 / 30 / 20 Rule',
    'Alimentación & Supermercado': 'Food & Groceries',
    'Estado óptimo: Quedan S/ 180 para los próximos 7 días': 'Optimal status: S/ 180 left for the next 7 days',
    '⚠️ Delivery & Restaurantes (Rappi / PedidosYa)': '⚠️ Delivery & Restaurants (Rappi / PedidosYa)',
    'Alerta: Estás a S/ 5.00 de alcanzar tu límite mensual sugerido': 'Alert: You are S/ 5.00 away from your suggested monthly limit',

    // How it works
    'Flujo de Usuario Optimizado': 'Optimized User Flow',
    '¿Cómo funciona Walletix?': 'How does Walletix work?',
    'Empieza a transformar tu relación con el dinero en menos de 3 minutos.': 'Start transforming your relationship with money in less than 3 minutes.',
    'Crea tu cuenta gratis': 'Create your free account',
    'Registra y categoriza': 'Record and categorize',
    'Ahorra y gana retos': 'Save and win challenges',

    // Benefits and testimonials
    'Ventaja Competitiva': 'Competitive Advantage',
    '¿Por qué Walletix supera las hojas de cálculo tradicionales?': 'Why is Walletix better than traditional spreadsheets?',
    'Erradicación de gastos hormiga': 'Get rid of small daily expenses',
    'Comenzar a Ahorrar Hoy': 'Start Saving Today',

    // Sign-up call to action
    'Toma el control de tu dinero hoy mismo': 'Take control of your money today',
    'Únete a la nueva generación que no deja sus ahorros a la suerte. Regístrate en Walletix de forma 100% gratuita.': 'Join the new generation that does not leave its savings to chance. Sign up for Walletix 100% free.',
    'Crear Cuenta Gratis': 'Create Free Account',

    // Contact
    '¿Tienes dudas o sugerencias?': 'Questions or suggestions?',
    'Nuestro equipo de soporte y arquitectura de producto está listo para ayudarte.': 'Our support and product team is ready to help you.',
    'Correo Electrónico': 'Email',
    'Sede Central': 'Headquarters',
    'Lima, Perú': 'Lima, Peru',
    'Proyecto académico UPC': 'UPC academic project',
    'Nombre Completo': 'Full Name',
    'Ej. Piero Valdivia': 'E.g. Piero Valdivia',
    'Correo Institucional / Personal': 'School / Personal Email',
    'tu@correo.com': 'you@email.com',
    'Asunto': 'Subject',
    'Consulta sobre Walletix o Arquitectura': 'Question about Walletix or its architecture',
    'Mensaje': 'Message',
    'Escribe tu consulta o requerimiento aquí...': 'Write your question or request here...',
    'Enviar Mensaje': 'Send Message',
    'Abrimos tu aplicación de correo con el mensaje listo. Envíalo desde allí para que nos llegue a walletix.soporte@gmail.com.': 'We opened your email app with the message ready. Send it from there so it reaches walletix.soporte@gmail.com.',

    // Footer
    'Plataforma de gestión financiera personal basada en la arquitectura oficial de Walletix. Monitoreo en tiempo real, erradicación de gastos hormiga y cumplimiento de metas presupuestales.': 'Personal finance management platform based on the official Walletix architecture. Real-time monitoring, elimination of small daily expenses and budget goal tracking.',
    'Producto': 'Product',
    'Control de Gastos': 'Expense Tracking',
    'Alertas Inteligentes': 'Smart Alerts',
    'Centro de Retos y Logros': 'Challenges and Achievements',
    'Recursos': 'Resources',
    'Guía de Inicio Rápido': 'Quick Start Guide',
    'API para Desarrolladores': 'API for Developers',
    'Centro de Soporte': 'Support Center',
    'Reportar una Falla': 'Report an Issue',
    'Términos y Condiciones': 'Terms and Conditions',
    'Política de Privacidad': 'Privacy Policy',
    'Contraseñas cifradas con BCrypt': 'Passwords encrypted with BCrypt',
    'Proyecto:': 'Project:',
    'Walletix - Arquitectura de Aplicaciones': 'Walletix - Application Architecture',
    '• Diseño Frontend Responsive': '• Responsive Frontend Design',

    // Login modal (index.html)
    'ejemplo@correo.com': 'example@email.com',
    'Contraseña': 'Password',
    '¿Olvidaste tu contraseña?': 'Forgot your password?',

    // login.html
    'Walletix Emblema Oficial': 'Walletix official emblem',
    '“Empieza a': '“Start',
    'ahorrar': 'saving',
    ', empieza a': ', start',
    'ganar': 'winning',
    'Plataforma': 'A',
    'financiera inteligente': 'smart financial',
    'diseñada para maximizar el rendimiento de tu capital diario.': 'platform designed to get the most out of your everyday money.',
    'Seguimiento inteligente en tiempo real': 'Smart real-time tracking',
    'Detección automática de gastos hormiga': 'Automatic detection of small daily expenses',
    'Contraseñas cifradas y sesiones seguras': 'Encrypted passwords and secure sessions',
    'Bienvenido de vuelta,': 'Welcome back,',
    'ingresa': 'enter',
    'tus': 'your',
    'credenciales': 'credentials',
    'para acceder.': 'to log in.',
    'CORREO ELECTRÓNICO': 'EMAIL',
    'Usa un correo activo': 'Use an active email',
    'CONTRASEÑA': 'PASSWORD',
    'Mínimo 6 caracteres': 'At least 6 characters',
    'Tu contraseña': 'Your password',
    'Recuérdame en este dispositivo': 'Remember me on this device',
    'O CONTINÚA CON': 'OR CONTINUE WITH',
    '¿No tienes una cuenta aún?': "Don't have an account yet?",
    'Regístrate gratis': 'Sign up for free',

    // Messages built from JavaScript (see t() below)
    'Iniciando sesión...': 'Logging in...',
    'Nombre': 'Name',
    'Correo': 'Email',

    'Las libretas y hojas de cálculo suelen abandonarse pronto. Walletix usa retos, niveles y medallas para mantenerte motivado y constante.': 'Notebooks and spreadsheets are often abandoned quickly. Walletix uses challenges, levels and medals to keep you motivated and consistent.',
    // Landing alineada con la web app (textos nuevos)
    'Finanzas personales en soles, con retos y microlecciones': 'Personal finance in soles, with challenges and micro-lessons',
    'Español e inglés': 'Spanish and English',
    'Vista previa del panel de Walletix: saldo, ingresos, gastos y puntos': 'Preview of the Walletix dashboard: balance, income, expenses and points',
    'Resumen': 'Summary',
    'Saldo actual': 'Current balance',
    '↗ Este mes llevas S/ 320.00 a favor': '↗ This month you are S/ 320.00 ahead',
    'Ingresos del mes': 'Income this month',
    'Gastos del mes': 'Expenses this month',
    'Gastos hormiga': 'Small daily expenses',
    'Puntos': 'Points',
    '¡Progreso registrado! +20 XP': 'Progress registered! +20 XP',
    'Semana sin delivery · Día 3 de 7': 'Week without delivery · Day 3 of 7',
    'Registra tus gastos e ingresos por categoría y comercio: tu saldo se actualiza al instante y ves los gastos hormiga que frenan tu ahorro.': 'Record your expenses and income by category and merchant: your balance updates instantly and you see the small daily expenses that slow down your savings.',
    'Gráficos de ingresos vs gastos, evolución de tu saldo y gastos por categoría, un reporte en PDF y tu saldo convertido a otras monedas.': 'Income vs expense charts, the evolution of your balance and expenses by category, a PDF report and your balance converted to other currencies.',
    'Configura topes mensuales por categoría: verás en ámbar cuando te acerques al límite y recibirás una alerta si lo superas, por ejemplo en Comida, Entretenimiento o Transporte.': 'Set monthly limits per category: you will see amber when you get close and receive an alert if you go over, for example in Food, Entertainment or Transport.',
    'Retos como «Semana sin delivery» o «Sin gastos hormiga» que se verifican con tus gastos, más niveles y medallas que premian tu constancia.': 'Challenges like "Week without delivery" or "No small daily expenses" that are checked against your expenses, plus levels and medals that reward your consistency.',
    'Aprende Finanzas en 1 Minuto': 'Learn Finance in 1 Minute',
    'Microlecciones de un minuto con quiz, como la regla 50/30/20, y un tip financiero cada día para mejorar tus hábitos.': 'One-minute micro-lessons with a quiz, like the 50/30/20 rule, and a financial tip every day to improve your habits.',
    'Así se ve el panel de Walletix: tus números de un vistazo, sin fórmulas ni hojas de cálculo.': 'This is the Walletix dashboard: your numbers at a glance, without formulas or spreadsheets.',
    'Vista previa': 'Preview',
    'Promedio de los últimos 3 meses': 'Average of the last 3 months',
    'Regístrate con tu correo en un minuto y crea tu primera meta de ahorro.': 'Sign up with your email in a minute and create your first savings goal.',
    'Anota tus ingresos y gastos con su categoría. Walletix los suma por categoría y te avisa si superas un presupuesto.': 'Log your income and expenses with their category. Walletix adds them up by category and warns you if you go over a budget.',
    'Únete a retos, mira cómo avanzan tus metas en el panel y aprende con microlecciones.': 'Join challenges, watch your goals grow on the dashboard and learn with micro-lessons.',
    'Todo en un solo lugar': 'Everything in one place',
    'Sin fórmulas manuales: tu saldo, presupuestos y metas se calculan solos.': 'No manual formulas: your balance, budgets and goals are calculated for you.',
    'Detecta las compras pequeñas (menos de S/ 10) que se acumulan sin que lo notes.': 'Spot the small purchases (under S/ 10) that add up without you noticing.',
    'Tus datos protegidos': 'Your data protected',
    'Contraseñas cifradas con BCrypt y cada usuario solo ve sus propios datos.': 'Passwords encrypted with BCrypt and each user only sees their own data.',
    'Pensado para': 'Designed for',
    'Perfil de usuario': 'User profile',
    'Freelancer con ingresos variables': 'Freelancer with variable income',
    'Necesita saber cuánto puede gastar cuando sus ingresos cambian cada mes.': 'Needs to know how much they can spend when their income changes every month.',
    '→ Comparativo de ingresos vs gastos': '→ Income vs expense comparison',
    'Estudiante universitario': 'University student',
    'Quiere ahorrar para un curso sin dejar de salir con sus amigos.': 'Wants to save for a course without giving up going out with friends.',
    '→ Metas de ahorro y retos': '→ Savings goals and challenges',
    'Profesional joven': 'Young professional',
    'Busca una vista clara para no pasarse de sus presupuestos.': 'Wants a clear view so they do not go over their budgets.',
    '→ Presupuestos con alertas': '→ Budgets with alerts',
    'Sin tarjeta de crédito • 100% gratis': 'No credit card • 100% free',
    '© 2026 Walletix. Todos los derechos reservados.': '© 2026 Walletix. All rights reserved.',
    // Capturas reales y etiquetas unificadas
    'Capturas reales de la app': 'Real screenshots of the app',
    'Panel principal': 'Dashboard',
    'Gastos': 'Expenses',
    'Presupuestos': 'Budgets',
    'Datos de ejemplo': 'Sample data',
    'Capturas de la aplicación web real, con datos de ejemplo.': 'Screenshots of the real web app, with sample data.',
    'Panel principal de Walletix: saldo actual, ingresos y gastos del mes, puntos y evolución del saldo': 'Walletix dashboard: current balance, income and expenses of the month, points and balance evolution',
    'Tabla de gastos de Walletix con categoría, comercio, monto y fecha': 'Walletix expenses table with category, merchant, amount and date',
    'Presupuestos del mes en Walletix: excedido, cerca del límite y vas bien': 'Walletix monthly budgets: over the limit, close to the limit and on track',
    'Privado': 'Private',
    'Solo tú ves tus datos': 'Only you see your data',
  };

  var originalText = new WeakMap(); // text node -> original Spanish text
  var originalAttr = new WeakMap(); // element -> { attribute: original Spanish value }

  function normalize(text) {
    return text.replace(/\s+/g, ' ').trim();
  }

  function currentLang() {
    var lang = document.documentElement.getAttribute('data-lang');
    return lang === 'en' ? 'en' : 'es';
  }

  // Translation for texts built in JavaScript (alerts, buttons that change)
  function t(spanish) {
    return currentLang() === 'en' && EN[spanish] ? EN[spanish] : spanish;
  }

  function translateTextNodes(lang) {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        var parent = node.parentElement;
        if (!parent || parent.closest('script, style, svg, [data-no-i18n]')) return NodeFilter.FILTER_REJECT;
        return normalize(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      },
    });
    var node;
    while ((node = walker.nextNode())) {
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      var original = originalText.get(node);
      var translation = EN[normalize(original)];
      if (lang === 'en' && translation) {
        // keep the spaces around the text so inline elements stay separated
        var lead = original.match(/^\s*/)[0];
        var trail = original.match(/\s*$/)[0];
        node.nodeValue = lead + translation + trail;
      } else {
        node.nodeValue = original;
      }
    }
  }

  function translateAttributes(lang) {
    var selector = ATTRIBUTES.map(function (a) { return '[' + a + ']'; }).join(',');
    document.querySelectorAll(selector).forEach(function (el) {
      if (el.closest('[data-no-i18n]')) return;
      if (!originalAttr.has(el)) {
        var saved = {};
        ATTRIBUTES.forEach(function (a) { if (el.hasAttribute(a)) saved[a] = el.getAttribute(a); });
        originalAttr.set(el, saved);
      }
      var saved = originalAttr.get(el);
      Object.keys(saved).forEach(function (a) {
        var translation = EN[normalize(saved[a])];
        el.setAttribute(a, lang === 'en' && translation ? translation : saved[a]);
      });
    });
  }

  function translateHead(lang) {
    var title = document.querySelector('title');
    var description = document.querySelector('meta[name="description"]');
    [title, description].forEach(function (el) {
      if (!el) return;
      var isMeta = el.tagName === 'META';
      if (!el.hasAttribute('data-es')) el.setAttribute('data-es', isMeta ? el.content : el.textContent);
      var original = el.getAttribute('data-es');
      var value = lang === 'en' && EN[normalize(original)] ? EN[normalize(original)] : original;
      if (isMeta) el.content = value; else el.textContent = value;
    });
  }

  // Updates the ES / EN buttons: they show the language you can switch to
  function updateToggles(lang) {
    document.querySelectorAll('[data-lang-toggle]').forEach(function (button) {
      var next = lang === 'en' ? 'es' : 'en';
      button.textContent = next.toUpperCase();
      button.setAttribute('lang', LOCALES[next]);
      button.setAttribute('aria-label', next === 'en' ? 'Cambiar idioma a inglés' : 'Switch language to Spanish');
      button.setAttribute('title', button.getAttribute('aria-label'));
    });
  }

  function setLang(lang) {
    lang = lang === 'en' ? 'en' : 'es';
    var html = document.documentElement;
    html.setAttribute('data-lang', lang);
    html.setAttribute('lang', LOCALES[lang]); // accessibility: screen readers use the right voice
    translateHead(lang);
    translateTextNodes(lang);
    translateAttributes(lang);
    updateToggles(lang);
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* private mode: ignore */ }
  }

  function initialLang() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignore */ }
    if (saved === 'en' || saved === 'es') return saved;
    return (navigator.language || 'es').toLowerCase().indexOf('es') === 0 ? 'es' : 'en';
  }

  document.addEventListener('click', function (event) {
    var button = event.target.closest('[data-lang-toggle]');
    if (button) setLang(currentLang() === 'en' ? 'es' : 'en');
  });

  window.WalletixI18n = { t: t, setLang: setLang, currentLang: currentLang };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setLang(initialLang()); });
  } else {
    setLang(initialLang());
  }
})();
