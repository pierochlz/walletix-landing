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
    'Vista Previa': 'Preview',
    'Registrarse': 'Sign Up',
    'Volver': 'Back',

    // Hero
    'Plataforma Financiera Inteligente en Soles (PEN) y USD': 'Smart Financial Platform in Soles (PEN) and USD',
    'EMPIEZA A': 'START',
    'AHORRAR': 'SAVING',
    'GANAR': 'WINNING',
    'En un mundo donde cada gasto cuenta, tener control de tus finanzas nunca fue tan importante.': 'In a world where every expense counts, being in control of your finances has never been so important.',
    'está diseñado para ayudarte a organizar tus ingresos, controlar tus egresos y alcanzar tus metas de ahorro, sin importar si eres estudiante dando tus primeros pasos o un profesional en crecimiento.': 'is designed to help you organize your income, control your spending and reach your savings goals, whether you are a student taking your first steps or a growing professional.',
    'Regístrate': 'Sign Up',
    'Sin comisiones ocultas': 'No hidden fees',
    'Ahorro trimestral prom.': 'Avg. quarterly savings',
    'Sesiones con token seguro': 'Secure token-based sessions',
    'Walletix Logo': 'Walletix logo',
    'Walletix - Tarjeta Oficial de Marca': 'Walletix - Official brand card',

    // Features
    'Funcionalidades del Sistema': 'System Features',
    'Todo lo que necesitas para dominar tus finanzas personales': 'Everything you need to master your personal finances',
    'Módulos diseñados específicamente para resolver los problemas reales de presupuesto, control de gastos diarios y creación de patrimonio.': 'Modules designed specifically to solve real problems of budgeting, daily expense control and wealth building.',
    'Control de Gastos e Ingresos en Tiempo Real': 'Real-Time Expense and Income Tracking',
    'Registro ágil, categorización automática y monitoreo permanente de fugas de dinero para erradicar los gastos hormiga que frenan tu ahorro.': 'Quick entry, automatic categorization and constant monitoring of money leaks to get rid of the small daily expenses that hold back your savings.',
    'Actualización instantánea': 'Instant updates',
    'Análisis Comparativo y Gráficos Visuales': 'Comparative Analysis and Visual Charts',
    'Reportes interactivos de gastos vs ingresos, proyecciones a fin de mes y balances consolidados configurados en Soles (PEN) y multimoneda.': 'Interactive expense vs. income reports, end-of-month projections and consolidated balances in Soles (PEN) and multiple currencies.',
    'Métricas en PEN (S/.)': 'Metrics in PEN (S/.)',
    'Límites Presupuestales y Alertas Inteligentes': 'Budget Limits and Smart Alerts',
    'Configura topes mensuales y recibe notificaciones preventivas automáticas antes de sobrepasar tus límites en Alimentos, Ocio o Transporte.': 'Set monthly caps and get automatic early warnings before you go over your limits on Food, Leisure or Transportation.',
    'Alertas preventivas': 'Early warnings',
    'Gamificación, Retos y Logros de Ahorro': 'Gamification, Challenges and Savings Achievements',
    'Desafíos semanales activos como "7 días sin delivery" o "Ahorro Express", desbloqueando medallas e insignias que premian tu constancia financiera.': 'Weekly challenges such as "7 days without delivery" or "Express Savings" that unlock medals and badges rewarding your financial consistency.',
    'Insignias de constancia': 'Consistency badges',
    'Consejos Financieros Personalizados': 'Personalized Financial Tips',
    'Recomendaciones inteligentes basadas en tus hábitos de consumo directo y la adaptación práctica de la regla 50/30/20 a tus ingresos mensuales.': 'Smart recommendations based on your spending habits and a practical adaptation of the 50/30/20 rule to your monthly income.',
    'Método 50 / 30 / 20': '50 / 30 / 20 Method',
    'Seguridad y Privacidad de tus Datos': 'Security and Privacy of Your Data',
    'Contraseñas cifradas con BCrypt, sesiones protegidas con tokens JWT y permisos por rol: cada usuario solo puede ver y editar su propia información.': 'Passwords encrypted with BCrypt, sessions protected with JWT tokens and role-based permissions: each user can only see and edit their own information.',

    // Dashboard showcase
    'Arquitectura de Software & Interfaz': 'Software Architecture & Interface',
    'Diseñado para la velocidad y la claridad financiera': 'Designed for speed and financial clarity',
    'Explora las pantallas reales de la plataforma web de Walletix tal como fueron concebidas en la arquitectura de la aplicación.': 'Explore the real screens of the Walletix web platform as they were designed in the application architecture.',
    'Comparativa de Flujos': 'Cash Flow Comparison',
    'Distribución por Categorías': 'Breakdown by Category',
    'Límites Presupuestales': 'Budget Limits',
    'En vivo': 'Live',
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
    '↗ +36.1% comparado al trimestre anterior': '↗ +36.1% compared to the previous quarter',
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
    'Regístrate con tu correo o Google en 30 segundos. Configura tu moneda principal (PEN o USD) y tus objetivos financieros iniciales.': 'Sign up with your email or Google in 30 seconds. Set your main currency (PEN or USD) and your first financial goals.',
    'Registra y categoriza': 'Record and categorize',
    'Ingresa tus movimientos o programa gastos fijos. Walletix agrupa automáticamente tus egresos y activa las alertas presupuestales.': 'Enter your transactions or schedule fixed expenses. Walletix groups your spending automatically and turns on budget alerts.',
    'Ahorra y gana retos': 'Save and win challenges',
    'Supera desafíos semanales de ahorro, visualiza cómo crece tu fondo de emergencia y recibe recomendaciones basadas en tus hábitos.': 'Beat weekly savings challenges, watch your emergency fund grow and get recommendations based on your habits.',

    // Benefits and testimonials
    'Ventaja Competitiva': 'Competitive Advantage',
    '¿Por qué Walletix supera las hojas de cálculo tradicionales?': 'Why is Walletix better than traditional spreadsheets?',
    'Las libretas y hojas de Excel se abandonan a las dos semanas. Walletix está diseñado con psicología de hábitos y micro-recompensas para mantenerte motivado y consistente.': 'Notebooks and Excel sheets are abandoned after two weeks. Walletix is designed with habit psychology and micro-rewards to keep you motivated and consistent.',
    'Ahorro de hasta 4 horas al mes': 'Save up to 4 hours a month',
    'Olvídate de cuadrar fórmulas manuales o perder tickets de compra.': 'Forget about fixing manual formulas or losing receipts.',
    'Erradicación de gastos hormiga': 'Get rid of small daily expenses',
    'Detecta consumos que parecen invisibles pero que representan hasta el 25% de tu sueldo.': 'Spot purchases that seem invisible but can add up to 25% of your salary.',
    'Privacidad blindada': 'Bulletproof privacy',
    'Tus datos nunca se venden ni se comparten con entidades publicitarias.': 'Your data is never sold or shared with advertisers.',
    'Comenzar a Ahorrar Hoy': 'Start Saving Today',
    'Diseñador UX / Freelance': 'UX Designer / Freelancer',
    '"Con los ingresos variables de freelance siempre me costaba saber cuánto podía gastar en el mes. La comparativa de flujos de Walletix me dio tranquilidad total."': '"With variable freelance income it was always hard to know how much I could spend each month. The Walletix cash flow comparison gave me total peace of mind."',
    'Estudiante Universitaria': 'University Student',
    '"Los retos como \'7 días sin delivery\' son súper adictivos. Logré ahorrar mis primeros S/ 600 para un curso sin sentir que me estaba privando de todo."': '"Challenges like \'7 days without delivery\' are super addictive. I saved my first S/ 600 for a course without feeling I was giving up everything."',
    'Ingeniero de Software': 'Software Engineer',
    '"La interfaz es limpia, rápida y sin saturación. La regla 50/30/20 adaptada en tiempo real funciona perfecto para mantener a raya los límites presupuestales."': '"The interface is clean, fast and uncluttered. The 50/30/20 rule adapted in real time works perfectly to keep budget limits in check."',

    // Sign-up call to action
    'Toma el control de tu dinero hoy mismo': 'Take control of your money today',
    'Únete a la nueva generación que no deja sus ahorros a la suerte. Regístrate en Walletix de forma 100% gratuita.': 'Join the new generation that does not leave its savings to chance. Sign up for Walletix 100% free.',
    'Crear Cuenta Gratis': 'Create Free Account',
    'Sin tarjeta de crédito requerida • Cancela o exporta tus datos cuando quieras': 'No credit card required • Cancel or export your data anytime',

    // Contact
    '¿Tienes dudas o sugerencias?': 'Questions or suggestions?',
    'Nuestro equipo de soporte y arquitectura de producto está listo para ayudarte.': 'Our support and product team is ready to help you.',
    'Correo Electrónico': 'Email',
    'Sede Central': 'Headquarters',
    'Hub Financiero San Isidro, Lima, Perú': 'San Isidro Financial Hub, Lima, Peru',
    'Operaciones para Latinoamérica': 'Operations for Latin America',
    'Línea de Soporte': 'Support Line',
    'Lunes a Viernes: 9:00 AM - 6:00 PM': 'Monday to Friday: 9:00 AM - 6:00 PM',
    'Nombre Completo': 'Full Name',
    'Ej. Piero Valdivia': 'E.g. Piero Valdivia',
    'Correo Institucional / Personal': 'School / Personal Email',
    'tu@correo.com': 'you@email.com',
    'Asunto': 'Subject',
    'Consulta sobre Walletix o Arquitectura': 'Question about Walletix or its architecture',
    'Mensaje': 'Message',
    'Escribe tu consulta o requerimiento aquí...': 'Write your question or request here...',
    'Enviar Mensaje': 'Send Message',
    '¡Mensaje recibido con éxito! Un especialista de Walletix te responderá a la brevedad.': 'Message received! A Walletix specialist will reply shortly.',

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
    '© 2026 Walletix Inc. Todos los derechos reservados.': '© 2026 Walletix Inc. All rights reserved.',
    'Proyecto:': 'Project:',
    'Walletix - Arquitectura de Aplicaciones': 'Walletix - Application Architecture',
    '• Diseño Frontend Responsive': '• Responsive Frontend Design',

    // Login modal (index.html)
    'Cerrar ventana': 'Close window',
    'Iniciar Sesión en Walletix': 'Log In to Walletix',
    'Bienvenido de vuelta, ingresa tus credenciales para acceder al panel.': 'Welcome back, enter your credentials to access the dashboard.',
    'ejemplo@correo.com': 'example@email.com',
    'Contraseña': 'Password',
    'Recordarme': 'Remember me',
    '¿Olvidaste tu contraseña?': 'Forgot your password?',
    'Acceder al Dashboard': 'Go to Dashboard',
    'Continuar con Google': 'Continue with Google',

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
    'Enviando...': 'Sending...',
    '¡Mensaje Enviado!': 'Message Sent!',
    'Iniciando sesión...': 'Logging in...',
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
