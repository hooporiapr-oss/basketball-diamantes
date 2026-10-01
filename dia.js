// ══════════════════════════════════════════════════════
//  Diamantes — shared behaviour.
//
//  A player signs in once and stays signed in on that device.
//  Everything that touches the database goes through a function,
//  so the page never reads the roster or a PIN directly.
// ══════════════════════════════════════════════════════
var SB_URL = 'https://sdaphocueugzfvjovuxd.supabase.co';
var SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkYXBob2N1ZXVnemZ2am92dXhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM2MjQyMDgsImV4cCI6MjA5OTIwMDIwOH0.pDAzf4P6dD9eNEBlnP95SdF5BI-R84-Rdc0vKzYcn7M';

function api(path, body){
  return fetch(SB_URL + '/rest/v1/' + path, {
    method: body ? 'POST' : 'GET',
    headers: {
      'apikey': SB_KEY,
      'Authorization': 'Bearer ' + SB_KEY,
      'Content-Type': 'application/json'
    },
    body: body ? JSON.stringify(body) : undefined
  }).then(function(r){
    if (!r.ok) throw new Error('request failed');
    return r.json();
  });
}

function rpc(name, args){ return api('rpc/' + name, args || {}); }

// ---- who is signed in ----
var ME_KEY = 'dia-me';

function me(){
  try { return JSON.parse(localStorage.getItem(ME_KEY) || 'null'); }
  catch(e){ return null; }
}
function setMe(p){
  try { localStorage.setItem(ME_KEY, JSON.stringify(p)); } catch(e){}
}
function signOut(){
  try { localStorage.removeItem(ME_KEY); } catch(e){}
  location.href = 'index.html';
}

// The bar on every page: the badge on the left, who is signed in on
// the right. Pages that need a player send them to sign in first.
function chrome(opts){
  opts = opts || {};
  var p = me();

  var head = document.querySelector('header .bar');
  if (head){
    head.innerHTML =
      '<a class="mark" href="' + (p ? 'academia.html' : 'index.html') + '"><span>Diamantes de Arecibo</span>' +
        (opts.title || 'Academia') + '</a>' +
      '<div class="who">' +
        (p ? p.name + ' · <a href="#" onclick="signOut();return false;">Salir</a>'
           : '<a href="index.html">Entrar</a>') +
      '</div>';
  }

  if (opts.needPlayer && !p){
    location.href = 'index.html?next=' + encodeURIComponent(location.pathname.split('/').pop());
    return null;
  }
  return p;
}

// ---- progress ----
function markSeen(lesson){
  var p = me();
  if (!p) return;
  rpc('dia_seen', { p_player: p.id, p_lesson: lesson }).catch(function(e){
    console.error('progress:', e);
  });
  try {
    var done = JSON.parse(localStorage.getItem('dia-done') || '{}');
    done[lesson] = 1;
    localStorage.setItem('dia-done', JSON.stringify(done));
  } catch(e){}
}

function seenLocally(){
  try { return JSON.parse(localStorage.getItem('dia-done') || '{}'); }
  catch(e){ return {}; }
}

function saveScore(setKey, correct, total){
  var p = me();
  if (!p) return Promise.resolve();
  return rpc('dia_score', {
    p_player: p.id, p_set: setKey, p_correct: correct, p_total: total
  }).catch(function(e){ console.error('score:', e); });
}
