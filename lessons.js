// ══════════════════════════════════════════════════════
//  Las lecciones salen palabra por palabra de los dos manuales
//  del equipo: Conceptos Defensivos del Pick and Roll y el
//  Manual de Conceptos Ofensivos, de Rouldan A. Vélez.
// ══════════════════════════════════════════════════════
var LESSONS = [
  // ---------- defensa ----------
  { id:'ice', side:'DEF', name:'ICE', sub:'Negar la pantalla / mandar baseline',
    blurb:'Se usa sobre todo contra el Side Pick & Roll.',
    points:[
      ['Defensor del balón','Se coloca para negar el uso de la pantalla y obliga al manejador hacia la línea de fondo. No permite que regrese al centro.'],
      ['Defensor del screener','Se posiciona por debajo y hacia la pintura para contener la penetración y controlar el roll.'],
      ['Lado débil','Protege el aro y el roll, preparado para recuperar a tiradores.'],
      ['Comunicación','“ICE! ICE! ICE!” antes de que llegue la pantalla.']
    ],
    chain:['NO MIDDLE','NO SCREEN','BASELINE'],
    key:'No forzar la pantalla negada. En ataque, se ataca el espacio que ICE concede.',
    attack:['Reject o atacar baseline si existe ventaja','Cambiar el ángulo de la pantalla, Re-Screen o Flip Screen','El screener puede Slip antes del contacto','El de esquina mantiene spacing, listo para drift o relocate','Si el big contiene baseline: pocket o bounce pass al roller, o pase al lado débil cuando llegue la ayuda'] },

  { id:'hedge', side:'DEF', name:'HEDGE / SHOW', sub:'Salir a contener',
    blurb:'El defensor del screener sale a frenar al manejador antes de que doble la esquina.',
    points:[
      ['Defensor del screener','Sale agresivamente, muestra el cuerpo, contiene por un momento y luego recupera a su hombre.'],
      ['Defensor del balón','Pelea por encima de la pantalla y recupera rápidamente al manejador.'],
      ['Lado débil','Listo para proteger temporalmente el roll y rotar.'],
      ['Comunicación','“HEDGE!” o “SHOW!” temprano y fuerte.']
    ],
    key:'No queremos que el hedge se convierta en un cambio accidental.',
    attack:['Mantener drible vivo, crear separación y no quedar atrapado','El screener hace Roll rápido o Slip','En Short Roll se ataca 4x3','Buscar Pocket Pass, pase sobre el hedge o salida al lado débil','Dos defensores sobre el balón significa que hay ventaja detrás de ellos'] },

  { id:'bump', side:'DEF', name:'BUMP / TAG', sub:'Contactar y retrasar el roll',
    blurb:'Responsabilidad de ayuda, sobre todo cuando el screener rueda fuerte al aro.',
    points:[
      ['El defensor de ayuda','Entra en la trayectoria del roller, hace contacto legal y retrasa su carrera al aro.'],
      ['Para qué sirve','Ese contacto da tiempo al defensor original del screener para recuperar.'],
      ['Después del tag','Recupera rápido a su jugador, especialmente si es tirador.'],
      ['El resto','La defensa rota para cubrir la ayuda.']
    ],
    key:'Ayudar al roll sin regalar un triple abierto.',
    attack:['El roller reconoce el tag y se prepara para pasar o sellar','El manejador lee al que hace Tag y busca al tirador libre','Skip Pass o Extra Pass para castigar la rotación','El tirador hace Lift o Relocate para mejorar el ángulo','Cuando llega el Tag, alguien del perímetro queda momentáneamente disponible'] },

  { id:'switch', side:'DEF', name:'SWITCH', sub:'Cambio defensivo',
    blurb:'Los dos defensores intercambian asignaciones cuando ocurre la pantalla.',
    points:[
      ['Defensor del balón','Toma inmediatamente al screener/roller.'],
      ['Defensor del screener','Cambia al manejador y debe contenerlo sin permitir penetración.'],
      ['Después del cambio','Reconocer mismatches, negar el pase interior y preparar ayudas si hay ventaja de tamaño.'],
      ['Comunicación','“SWITCH!” antes o durante el contacto.']
    ],
    key:'Se usa con jugadores de tamaños similares, al final del reloj o como cobertura táctica.',
    attack:['Atacar el mismatch: guard contra big con espacio','Big contra guard mediante Seal o Post-up','Slip antes del cambio si la defensa anticipa','Ghost Screen para provocar confusión o un switch sin contacto','Switch no elimina la ventaja: cambia el tipo de ventaja'] },

  { id:'drop', side:'DEF', name:'DROP', sub:'Contención hacia la pintura',
    blurb:'El defensor del screener se queda por debajo, protegiendo pintura y aro.',
    points:[
      ['Defensor del balón','Pelea por encima de la pantalla y trata de recuperar por detrás del manejador.'],
      ['Defensor del screener','Contiene al manejador manteniéndose entre balón y aro mientras controla al roller.'],
      ['Lado débil','Preparado para tag/bump al roll y recuperar.'],
      ['Comunicación','“DROP!” y ubicación clara antes del contacto.']
    ],
    key:'Quitar penetración y roll al aro, aceptando ciertos tiros de media distancia según el scouting.',
    attack:['Pantalla hombro con hombro, manteniendo al defensor del balón detrás','Lecturas: Pull-up, floater, Snake, Pocket Pass, lob o roll según la posición del big','Re-Screen para cambiar el ángulo y obligar al big a moverse','Hacer que el big defienda dos jugadores'] },

  { id:'snake', side:'DEF', name:'SNAKE', sub:'Defender el cambio de dirección hacia el centro',
    blurb:'El manejador usa la pantalla y cruza otra vez al centro para poner al defensor detrás.',
    points:[
      ['Defensor del balón','Pelea la pantalla y recupera buscando colocarse al lado del manejador, no directamente detrás.'],
      ['Defensor del screener','Sobre todo en DROP: mantiene profundidad, permanece cuadrado con el balón y contiene el Snake.'],
      ['Cuidado','No abrir el centro demasiado pronto. El grande no abandona el balón para recuperar al roller.'],
      ['Lado débil','Hace BUMP/TAG al roller para dar tiempo al defensor del screener.']
    ],
    chain:['SNAKE','BIG CONTIENE','BUMP/TAG AL ROLL','GUARD RECUPERA','BIG RECUPERA','AYUDA RECUPERA AL TIRADOR'],
    key:'En Side Pick & Roll, ICE puede prevenir el Snake al negar la pantalla y mantener el balón fuera del centro.',
    attack:['Cruzar al centro después de usar la pantalla','Útil especialmente contra Drop, para mantener al guard detrás y comprometer al big'] },

  { id:'principios', side:'DEF', name:'Principios comunes', sub:'En todas las coberturas',
    blurb:'Lo que no cambia, se llame la cobertura como se llame.',
    points:[
      ['Comunicar','La pantalla se comunica temprano.'],
      ['Defender como cinco','No solamente los dos involucrados en el Pick & Roll.'],
      ['Prioridad','Proteger primero el aro y la pintura.'],
      ['Lado débil','Ver balón y hombre, ayudar y recuperar.'],
      ['Terminar','Finalizar la posesión con BOX OUT + REBOUND.']
    ],
    key:'Todas las coberturas tienen lo mismo en común: comunicación, ayuda, recuperación y rebote.',
    progression:['2x0: posiciones y comunicación','2x2: ejecutar cada cobertura sin ayuda','3x3: añadir jugador de esquina/lado débil para Bump/Tag y recuperación','4x4: trabajar rotaciones','5x5 Live: el coach llama ICE, HEDGE, SWITCH o DROP antes de cada posesión'] },

  // ---------- ataque ----------
  { id:'ventaja', side:'OFF', name:'Los cinco principios', sub:'Crear, leer, mantener, finalizar',
    blurb:'El orden en que atacamos, siempre.',
    points:[
      ['1. Crear ventaja','Penetración, pantalla, corte, transición, post-up o ataque de closeout.'],
      ['2. Reconocer la ayuda','Leer quién ayuda y desde dónde llega.'],
      ['3. Hacer reaccionar a la defensa','Obligar a dos defensores a comprometerse o provocar una rotación.'],
      ['4. Mantener la ventaja','Pass, Extra Pass, Cut, Replace, Lift, Drift o Relocate.'],
      ['5. Finalizar la ventaja','Aro, tiro abierto o pase al compañero con mejor oportunidad.']
    ],
    chain:['CREAR VENTAJA','LEER LA AYUDA','MANTENER LA VENTAJA','ENCONTRAR EL MEJOR TIRO'],
    key:'La diferencia entre un buen tiro y el mejor tiro es un pase más.' },

  { id:'transicion', side:'OFF', name:'Transición y Secondary', sub:'Atacar antes de que se organicen',
    blurb:'Rebote → Outlet → Push.',
    points:[
      ['Carriles','El PG empuja el balón. Los wings corren Wide Lanes. El primer grande hace Rim Run, el segundo es Trailer.'],
      ['Qué buscamos','Aro, pase adelantado o ventaja numérica antes de que la defensa se organice.'],
      ['Si no hay canasto','Entrar directamente al Secondary Break.'],
      ['Herramientas','Drag Screen, Ball Reversal, Post Entry o Attack the Closeout, sin detener el ritmo.']
    ],
    key:'No sacar el balón para empezar desde cero si todavía existe una ventaja.' },

  { id:'lecturas', side:'OFF', name:'Lecturas especiales', sub:'Snake, Reject, Slip, Short Roll, Pocket Pass, Re-Screen, Ghost',
    blurb:'Las siete lecturas del Pick & Roll.',
    points:[
      ['Snake','Cruzar hacia el centro después de usar la pantalla. Útil contra Drop para mantener al guard detrás y comprometer al big.'],
      ['Reject','Atacar por el lado contrario a la pantalla, cuando el defensor anticipa demasiado el P&R.'],
      ['Slip','Cortar al aro antes de completar la pantalla. Excelente contra Switch, Hedge o defensores que se adelantan.'],
      ['Short Roll','Recibir entre la línea de tres y el aro tras una cobertura agresiva. El receptor lee aro, roller/cutter, esquina y pase extra.'],
      ['Pocket Pass','Pase corto al screener en el espacio entre los dos defensores. Requiere timing y ángulo.'],
      ['Re-Screen','Segunda pantalla, muchas veces cambiando el ángulo, cuando la primera cobertura neutraliza la acción.'],
      ['Ghost Screen','Amenazar la pantalla y abrirse sin contacto. Crea confusión, switch innecesario o tiro abierto.']
    ],
    key:'Cada lectura responde a una cobertura. No se escogen al azar.' },

  { id:'diccionario', side:'OFF', name:'El diccionario', sub:'El lenguaje común del equipo',
    blurb:'Treinta y cinco conceptos, con para qué sirve cada uno.',
    dict:[
      ['Spacing','Mantener distancias y posiciones adecuadas entre los cinco jugadores.','Crear espacio para penetraciones, cortes, posteos y Pick & Roll.'],
      ['Attack the Closeout','Atacar al defensor mientras recupera hacia el tirador.','Aprovechar que está fuera de balance.'],
      ['Drive & Kick','Penetrar y pasar afuera cuando llega la ayuda.','Colapsar la defensa y crear tiros abiertos.'],
      ['Drive & Replace','Cuando uno penetra, otro ocupa el espacio que queda libre.','Mantener spacing y líneas de pase.'],
      ['Pass & Cut','Cortar hacia el aro después de pasar.','Castigar defensores que pierden visión del balón y su jugador.'],
      ['Backdoor','Corte al aro por detrás del defensor.','Castigar negación o sobrejuego.'],
      ['Extra Pass','Pasar de un jugador abierto a otro con ventaja mayor.','Convertir un buen tiro en uno excelente.'],
      ['Paint Touch','Que el balón llegue a la pintura por penetración, pase o post-up.','Obligar a la defensa a colapsar.'],
      ['Ball Reversal','Mover el balón rápido de un lado al otro.','Cambiar el lado de ayuda y atacar una defensa en recuperación.'],
      ['Skip Pass','Pase que cruza la cancha hacia el lado débil.','Castigar ayudas profundas y crear closeouts largos.'],
      ['Post Entry','Pase del perímetro al jugador interior.','Crear ataque interior y provocar ayudas.'],
      ['Post Split','Acción entre perimetrales después de entrar el balón al poste.','Castigar defensas concentradas en el poste.'],
      ['Cut','Movimiento sin balón hacia un espacio disponible.','Crear ventaja y obligar a reaccionar.'],
      ['45° Cut','Corte desde wing hacia el aro durante una penetración.','Atacar el espacio que deja la ayuda.'],
      ['Baseline Drift','El de esquina se desplaza por baseline durante una penetración.','Crear línea de pase detrás de la ayuda.'],
      ['Lift','El de esquina sube hacia el wing durante la acción.','Mejorar ángulo y línea de pase.'],
      ['Relocate','El tirador cambia de posición después de pasar.','Crear una nueva ventana de pase y tiro.'],
      ['Screen Away','Después de pasar, bloquear a un compañero lejos del balón.','Crear cortes y tiros sin balón.'],
      ['Pin Down','Pantalla vertical para liberar a un jugador hacia el perímetro.','Crear recepción para tiro o ataque de closeout.'],
      ['Flare Screen','Pantalla que libera al jugador alejándolo del balón.','Crear espacio para tiro exterior.'],
      ['Back Screen','Pantalla en la espalda del defensor.','Crear cortes hacia el aro.'],
      ['DHO','Entrega mano a mano mientras el jugador driblea.','Crear una pantalla dinámica y ventaja.'],
      ['Pick & Roll','Pantalla al balón seguida de roll hacia el aro.','Crear 2x2 y obligar a la defensa a decidir.'],
      ['Pick & Pop','Después de bloquear, el screener se abre al perímetro.','Aprovechar un screener con tiro.'],
      ['Short Roll','El screener rueda hasta free throw o elbow.','Recibir detrás de defensa agresiva y jugar 4x3.'],
      ['Slip','El screener corta al aro antes de completar la pantalla.','Castigar switch, hedge o anticipación.'],
      ['Ghost Screen','Simular la pantalla y abrirse rápido.','Confundir cobertura y generar tiro o penetración.'],
      ['Re-Screen','Segunda pantalla al balón.','Atacar otra vez tras detenerse la primera acción.'],
      ['Reject','El manejador rechaza la pantalla y ataca por el lado contrario.','Castigar al defensor que anticipa.'],
      ['Snake','Tras la pantalla, el manejador cruza al centro.','Poner al defensor detrás y atacar pintura o media distancia.'],
      ['Pocket Pass','Pase corto entre los defensores hacia el roller.','Castigar las ventanas del P&R.'],
      ['Roll','El screener gira y ataca el aro después de bloquear.','Crear presión vertical.'],
      ['Seal','Usar el cuerpo para mantener al defensor detrás.','Crear recepción profunda cerca del aro.'],
      ['Rim Run','El grande corre directo al aro en transición.','Crear presión en la pintura.'],
      ['Wide Lanes','Los wings corren abiertos cerca de las líneas.','Ensanchar la defensa y abrir el centro.'],
      ['Drag Screen','Pantalla temprana al balón en transición.','Atacar antes de que la defensa se establezca.'],
      ['Secondary Break','Continuación organizada tras la transición primaria.','Mantener ventaja y ritmo sin empezar de cero.'],
      ['Advantage Basketball','Atacar continuamente una defensa en desventaja.','Mantener la ventaja hasta conseguir el mejor tiro.']
    ] }
];

function lessonById(id){
  for (var i = 0; i < LESSONS.length; i++) if (LESSONS[i].id === id) return LESSONS[i];
  return null;
}
