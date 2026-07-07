const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf-8');
const rawMatch = html.match(/const RAW_DATA = (\[.*?\]);/s);
const RAW_DATA = JSON.parse(rawMatch[1]);

function parseDate(s){ return new Date(s + 'T00:00:00'); }
function toISO(d){ return d.toISOString().slice(0,10); }
function addDays(d, n){ const r = new Date(d); r.setDate(r.getDate()+n); return r; }
function round2(n){ return Math.round(n*100)/100; }
function fmtDateShort(d){ return d.toLocaleDateString('en-US',{month:'short',day:'numeric'}); }

function finalizeBucket(b, label){
  return {
    label, spend: round2(b.spend), impressions: b.impressions, clicks: b.clicks, lpClicks: b.lpClicks,
    ctr: b.impressions > 0 ? round2(b.clicks / b.impressions * 100) : null,
    costPerLP: b.lpClicks > 0 ? round2(b.spend / b.lpClicks) : null
  };
}
function aggregateDaily(data){ return data.map(d => finalizeBucket(d, fmtDateShort(parseDate(d.date)))); }
function getWeekStart(dateStr){
  const d = parseDate(dateStr);
  const day = d.getDay();
  const diff = (day === 0 ? -6 : 1 - day);
  return addDays(d, diff);
}
function aggregateWeekly(data){
  const map = new Map();
  data.forEach(d => {
    const monday = getWeekStart(d.date);
    const key = toISO(monday);
    if (!map.has(key)) map.set(key, {key, weekStart: monday, spend:0, impressions:0, clicks:0, lpClicks:0});
    const b = map.get(key);
    b.spend += d.spend; b.impressions += d.impressions; b.clicks += d.clicks; b.lpClicks += d.lpClicks;
  });
  return Array.from(map.values()).sort((a,b) => a.key.localeCompare(b.key)).map(b => {
    const end = addDays(b.weekStart, 6);
    const label = fmtDateShort(b.weekStart) + ' – ' + fmtDateShort(end);
    return finalizeBucket(b, label);
  });
}
function monthLabel(key){
  const [y,m] = key.split('-');
  return new Date(parseInt(y), parseInt(m)-1, 1).toLocaleDateString('en-US',{month:'short',year:'numeric'});
}
function aggregateMonthly(data){
  const map = new Map();
  data.forEach(d => {
    const key = d.date.slice(0,7);
    if (!map.has(key)) map.set(key, {key, spend:0, impressions:0, clicks:0, lpClicks:0});
    const b = map.get(key);
    b.spend += d.spend; b.impressions += d.impressions; b.clicks += d.clicks; b.lpClicks += d.lpClicks;
  });
  return Array.from(map.values()).sort((a,b) => a.key.localeCompare(b.key)).map(b => finalizeBucket(b, monthLabel(b.key)));
}

// Tests
const daily = aggregateDaily(RAW_DATA);
console.log('daily buckets:', daily.length, 'sum spend', daily.reduce((a,d)=>a+d.spend,0).toFixed(2));

const weekly = aggregateWeekly(RAW_DATA);
console.log('weekly buckets:', weekly.length, 'sum spend', weekly.reduce((a,d)=>a+d.spend,0).toFixed(2));
console.log('first 3 weekly (chronological):', JSON.stringify(weekly.slice(0,3)));
console.log('last 3 weekly (chronological, most recent):', JSON.stringify(weekly.slice(-3)));
const weeklyReversed = [...weekly].reverse();
console.log('reversed[0] (should be most recent):', weeklyReversed[0].label);
console.log('reversed[last] (should be oldest):', weeklyReversed[weeklyReversed.length-1].label);

const monthly = aggregateMonthly(RAW_DATA);
console.log('monthly buckets:', monthly.length, JSON.stringify(monthly.map(m=>({label:m.label, spend:m.spend}))));

const totalSpend = RAW_DATA.reduce((a,d)=>a+d.spend,0);
console.log('RAW total spend', totalSpend.toFixed(2));
