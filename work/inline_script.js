
/* ============================================================
   DATA
   Replace RAW_DATA with a new array (same shape) to refresh numbers.
   Each record: { date: "YYYY-MM-DD", spend, impressions, clicks, lpClicks }
   ============================================================ */
const RAW_DATA = [{"date": "2026-01-01", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-01-02", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-01-03", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-01-04", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-01-05", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-01-06", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-01-07", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-01-08", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-01-09", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-01-10", "spend": 100.51, "impressions": 2672, "clicks": 20, "lpClicks": 20}, {"date": "2026-01-11", "spend": 346.98, "impressions": 7110, "clicks": 73, "lpClicks": 73}, {"date": "2026-01-12", "spend": 477.33, "impressions": 7726, "clicks": 107, "lpClicks": 107}, {"date": "2026-01-13", "spend": 490.13, "impressions": 7482, "clicks": 119, "lpClicks": 119}, {"date": "2026-01-14", "spend": 479.15, "impressions": 5895, "clicks": 99, "lpClicks": 99}, {"date": "2026-01-15", "spend": 445.13, "impressions": 5332, "clicks": 120, "lpClicks": 120}, {"date": "2026-01-16", "spend": 460.67, "impressions": 6035, "clicks": 99, "lpClicks": 99}, {"date": "2026-01-17", "spend": 346.98, "impressions": 5264, "clicks": 93, "lpClicks": 93}, {"date": "2026-01-18", "spend": 321.3, "impressions": 4638, "clicks": 86, "lpClicks": 86}, {"date": "2026-01-19", "spend": 470.73, "impressions": 5602, "clicks": 108, "lpClicks": 108}, {"date": "2026-01-20", "spend": 510.17, "impressions": 5803, "clicks": 114, "lpClicks": 114}, {"date": "2026-01-21", "spend": 481.78, "impressions": 4148, "clicks": 64, "lpClicks": 64}, {"date": "2026-01-22", "spend": 435.66, "impressions": 5036, "clicks": 85, "lpClicks": 85}, {"date": "2026-01-23", "spend": 463.82, "impressions": 5121, "clicks": 99, "lpClicks": 99}, {"date": "2026-01-24", "spend": 344.5, "impressions": 4934, "clicks": 93, "lpClicks": 93}, {"date": "2026-01-25", "spend": 314.22, "impressions": 5207, "clicks": 70, "lpClicks": 70}, {"date": "2026-01-26", "spend": 435.74, "impressions": 7042, "clicks": 79, "lpClicks": 79}, {"date": "2026-01-27", "spend": 489.03, "impressions": 5218, "clicks": 75, "lpClicks": 75}, {"date": "2026-01-28", "spend": 502.19, "impressions": 5130, "clicks": 78, "lpClicks": 78}, {"date": "2026-01-29", "spend": 481.68, "impressions": 5725, "clicks": 86, "lpClicks": 86}, {"date": "2026-01-30", "spend": 477.58, "impressions": 5789, "clicks": 77, "lpClicks": 77}, {"date": "2026-01-31", "spend": 344.75, "impressions": 4376, "clicks": 63, "lpClicks": 63}, {"date": "2026-02-01", "spend": 0.0, "impressions": 1, "clicks": 1, "lpClicks": 1}, {"date": "2026-02-02", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-02-03", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-02-04", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-02-05", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-02-06", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-02-07", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-02-08", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-02-09", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-02-10", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-02-11", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-02-12", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-02-13", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-02-14", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-02-15", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-02-16", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-02-17", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-02-18", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-02-19", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-02-20", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-02-21", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-02-22", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-02-23", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-02-24", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-02-25", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-02-26", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-02-27", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-02-28", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-03-01", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-03-02", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-03-03", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-03-04", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-03-05", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-03-06", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-03-07", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-03-08", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-03-09", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-03-10", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-03-11", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-03-12", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-03-13", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-03-14", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-03-15", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-03-16", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-03-17", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-03-18", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-03-19", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-03-20", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-03-21", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-03-22", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-03-23", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-03-24", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-03-25", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-03-26", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-03-27", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-03-28", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-03-29", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-03-30", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-03-31", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-04-01", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-04-02", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-04-03", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-04-04", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-04-05", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-04-06", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-04-07", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-04-08", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-04-09", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-04-10", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-04-11", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-04-12", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-04-13", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-04-14", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-04-15", "spend": 199.46, "impressions": 23495, "clicks": 11, "lpClicks": 11}, {"date": "2026-04-16", "spend": 198.94, "impressions": 34591, "clicks": 12, "lpClicks": 12}, {"date": "2026-04-17", "spend": 189.06, "impressions": 18280, "clicks": 13, "lpClicks": 13}, {"date": "2026-04-18", "spend": 137.26, "impressions": 9772, "clicks": 9, "lpClicks": 9}, {"date": "2026-04-19", "spend": 121.57, "impressions": 9078, "clicks": 7, "lpClicks": 7}, {"date": "2026-04-20", "spend": 196.51, "impressions": 10449, "clicks": 9, "lpClicks": 9}, {"date": "2026-04-21", "spend": 197.23, "impressions": 8569, "clicks": 6, "lpClicks": 6}, {"date": "2026-04-22", "spend": 201.86, "impressions": 8095, "clicks": 7, "lpClicks": 6}, {"date": "2026-04-23", "spend": 194.58, "impressions": 23147, "clicks": 7, "lpClicks": 7}, {"date": "2026-04-24", "spend": 185.33, "impressions": 5885, "clicks": 4, "lpClicks": 4}, {"date": "2026-04-25", "spend": 134.29, "impressions": 3175, "clicks": 3, "lpClicks": 3}, {"date": "2026-04-26", "spend": 124.43, "impressions": 2663, "clicks": 7, "lpClicks": 6}, {"date": "2026-04-27", "spend": 193.81, "impressions": 2613, "clicks": 3, "lpClicks": 2}, {"date": "2026-04-28", "spend": 202.3, "impressions": 2210, "clicks": 2, "lpClicks": 2}, {"date": "2026-04-29", "spend": 197.76, "impressions": 1768, "clicks": 3, "lpClicks": 2}, {"date": "2026-04-30", "spend": 201.14, "impressions": 4354, "clicks": 1, "lpClicks": 1}, {"date": "2026-05-01", "spend": 185.64, "impressions": 5037, "clicks": 4, "lpClicks": 4}, {"date": "2026-05-02", "spend": 133.22, "impressions": 3190, "clicks": 2, "lpClicks": 2}, {"date": "2026-05-03", "spend": 126.55, "impressions": 3245, "clicks": 5, "lpClicks": 5}, {"date": "2026-05-04", "spend": 193.51, "impressions": 3699, "clicks": 10, "lpClicks": 9}, {"date": "2026-05-05", "spend": 310.57, "impressions": 2672, "clicks": 7, "lpClicks": 7}, {"date": "2026-05-06", "spend": 189.6, "impressions": 589, "clicks": 1, "lpClicks": 1}, {"date": "2026-05-07", "spend": 193.91, "impressions": 647, "clicks": 0, "lpClicks": 0}, {"date": "2026-05-08", "spend": 184.12, "impressions": 473, "clicks": 2, "lpClicks": 2}, {"date": "2026-05-09", "spend": 131.34, "impressions": 337, "clicks": 1, "lpClicks": 1}, {"date": "2026-05-10", "spend": 123.41, "impressions": 326, "clicks": 2, "lpClicks": 2}, {"date": "2026-05-11", "spend": 184.07, "impressions": 605, "clicks": 2, "lpClicks": 2}, {"date": "2026-05-12", "spend": 193.1, "impressions": 669, "clicks": 4, "lpClicks": 4}, {"date": "2026-05-13", "spend": 148.45, "impressions": 421, "clicks": 1, "lpClicks": 1}, {"date": "2026-05-14", "spend": 61.78, "impressions": 5606, "clicks": 5, "lpClicks": 5}, {"date": "2026-05-15", "spend": 131.65, "impressions": 4374, "clicks": 4, "lpClicks": 3}, {"date": "2026-05-16", "spend": 102.93, "impressions": 2984, "clicks": 5, "lpClicks": 5}, {"date": "2026-05-17", "spend": 85.38, "impressions": 2419, "clicks": 1, "lpClicks": 0}, {"date": "2026-05-18", "spend": 118.26, "impressions": 3176, "clicks": 3, "lpClicks": 1}, {"date": "2026-05-19", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-05-20", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-05-21", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-05-22", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-05-23", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-05-24", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-05-25", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-05-26", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-05-27", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-05-28", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-05-29", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-05-30", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-05-31", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-06-01", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-06-02", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-06-03", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-06-04", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-06-05", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-06-06", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-06-07", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-06-08", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-06-09", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-06-10", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-06-11", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-06-12", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-06-13", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-06-14", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-06-15", "spend": 0.0, "impressions": 0, "clicks": 0, "lpClicks": 0}, {"date": "2026-06-16", "spend": 87.13, "impressions": 226, "clicks": 2, "lpClicks": 2}, {"date": "2026-06-17", "spend": 82.19, "impressions": 186, "clicks": 4, "lpClicks": 4}, {"date": "2026-06-18", "spend": 85.81, "impressions": 122, "clicks": 4, "lpClicks": 2}, {"date": "2026-06-19", "spend": 86.36, "impressions": 172, "clicks": 0, "lpClicks": 0}, {"date": "2026-06-20", "spend": 70.08, "impressions": 106, "clicks": 0, "lpClicks": 0}, {"date": "2026-06-21", "spend": 79.04, "impressions": 92, "clicks": 1, "lpClicks": 1}, {"date": "2026-06-22", "spend": 70.11, "impressions": 101, "clicks": 1, "lpClicks": 1}, {"date": "2026-06-23", "spend": 36.07, "impressions": 57, "clicks": 1, "lpClicks": 1}, {"date": "2026-06-24", "spend": 33.45, "impressions": 45, "clicks": 0, "lpClicks": 0}, {"date": "2026-06-25", "spend": 35.68, "impressions": 59, "clicks": 0, "lpClicks": 0}, {"date": "2026-06-26", "spend": 33.3, "impressions": 55, "clicks": 0, "lpClicks": 0}, {"date": "2026-06-27", "spend": 27.38, "impressions": 52, "clicks": 0, "lpClicks": 0}, {"date": "2026-06-28", "spend": 30.56, "impressions": 28, "clicks": 0, "lpClicks": 0}, {"date": "2026-06-29", "spend": 31.13, "impressions": 42, "clicks": 0, "lpClicks": 0}, {"date": "2026-06-30", "spend": 28.55, "impressions": 41, "clicks": 0, "lpClicks": 0}, {"date": "2026-07-01", "spend": 54.49, "impressions": 122, "clicks": 2, "lpClicks": 0}, {"date": "2026-07-02", "spend": 60.73, "impressions": 90, "clicks": 0, "lpClicks": 0}, {"date": "2026-07-03", "spend": 52.69, "impressions": 72, "clicks": 1, "lpClicks": 0}, {"date": "2026-07-04", "spend": 38.21, "impressions": 62, "clicks": 0, "lpClicks": 0}, {"date": "2026-07-05", "spend": 43.17, "impressions": 52, "clicks": 0, "lpClicks": 0}, {"date": "2026-07-06", "spend": 48.28, "impressions": 67, "clicks": 0, "lpClicks": 0}, {"date": "2026-07-07", "spend": 38.67, "impressions": 59, "clicks": 0, "lpClicks": 0}];

/* ============================================================
   COLORS
   ============================================================ */
const COLOR = {
  navy:'#0A0F1A', navyDark:'#0D1B2A', white:'#FFFFFF',
  grayBlue:'#E5E9F2', grayText:'#4A4F57', blue:'#3A7AFE', cyan:'#00C6FF'
};

Chart.register(ChartDataLabels);
Chart.defaults.font.family = "'Inter','Segoe UI',Helvetica,Arial,sans-serif";
Chart.defaults.color = COLOR.grayText;

/* ============================================================
   HELPERS
   ============================================================ */
const DATA_MIN = RAW_DATA[0].date;
const DATA_MAX = RAW_DATA[RAW_DATA.length - 1].date;

function parseDate(s){ return new Date(s + 'T00:00:00'); }
function toISO(d){ return d.toISOString().slice(0,10); }
function addDays(d, n){ const r = new Date(d); r.setDate(r.getDate()+n); return r; }
function round2(n){ return Math.round(n*100)/100; }
function fmtDateShort(d){ return d.toLocaleDateString('en-US',{month:'short',day:'numeric'}); }
function fmtCurrency(v){ return '$' + v.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}); }
function fmtCurrencyShort(v){
  if (v >= 1000) return '$' + (v/1000).toFixed(1).replace(/\.0$/,'') + 'k';
  return '$' + v.toFixed(0);
}
function fmtNumber(v){ return Math.round(v).toLocaleString('en-US'); }

function filterRange(data, start, end){
  return data.filter(d => d.date >= start && d.date <= end);
}
function sumField(arr, field){ return arr.reduce((a,d)=>a+d[field],0); }

function finalizeBucket(b, label){
  return {
    label,
    spend: round2(b.spend),
    impressions: b.impressions,
    clicks: b.clicks,
    lpClicks: b.lpClicks,
    ctr: b.impressions > 0 ? round2(b.clicks / b.impressions * 100) : null,
    costPerLP: b.lpClicks > 0 ? round2(b.spend / b.lpClicks) : null
  };
}

function aggregateDaily(data){
  return data.map(d => finalizeBucket(d, fmtDateShort(parseDate(d.date))));
}

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
  return Array.from(map.values())
    .sort((a,b) => a.key.localeCompare(b.key))
    .map(b => {
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
  return Array.from(map.values())
    .sort((a,b) => a.key.localeCompare(b.key))
    .map(b => finalizeBucket(b, monthLabel(b.key)));
}

/* ============================================================
   STATE
   ============================================================ */
const state = {
  start: DATA_MIN,
  end: DATA_MAX,
  granularity: 'weekly'
};

let spendChart, impressionsChart, clicksChart;
let fp; // flatpickr instance

/* ============================================================
   DARK PERIOD NOTE
   ============================================================ */
function updateDarkNote(filtered){
  const sorted = [...filtered].sort((a,b) => a.date.localeCompare(b.date));
  const runs = [];
  let runStart = null;
  sorted.forEach((d, i) => {
    const isDark = d.spend === 0 && d.impressions === 0;
    if (isDark) {
      if (runStart === null) runStart = d.date;
    } else if (runStart !== null) {
      runs.push([runStart, sorted[i-1].date]);
      runStart = null;
    }
  });
  if (runStart !== null) runs.push([runStart, sorted[sorted.length-1].date]);

  const longRuns = runs.filter(([s,e]) => (parseDate(e) - parseDate(s)) / 86400000 + 1 >= 7);
  const el = document.getElementById('darkNote');
  if (longRuns.length === 0) { el.style.display = 'none'; return; }
  el.style.display = 'flex';
  el.querySelector('.note-text').textContent = 'No active campaigns during: ' +
    longRuns.map(([s,e]) => fmtDateShort(parseDate(s)) + ' – ' + fmtDateShort(parseDate(e))).join(',  ');
}

/* ============================================================
   KPI CARDS
   ============================================================ */
function updateKPIs(filtered){
  const spend = sumField(filtered, 'spend');
  const impressions = sumField(filtered, 'impressions');
  const clicks = sumField(filtered, 'clicks');
  const lpClicks = sumField(filtered, 'lpClicks');
  const ctr = impressions > 0 ? clicks / impressions * 100 : 0;
  const costPerLP = lpClicks > 0 ? spend / lpClicks : 0;

  document.getElementById('kpiSpend').textContent = fmtCurrency(spend);
  document.getElementById('kpiImpressions').textContent = fmtNumber(impressions);
  document.getElementById('kpiCTR').textContent = ctr.toFixed(2) + '%';
  document.getElementById('kpiLPClicks').textContent = fmtNumber(lpClicks);
  document.getElementById('kpiCostPerLP').textContent = fmtCurrency(costPerLP);

  const startLabel = fmtDateShort(parseDate(state.start));
  const endLabel = fmtDateShort(parseDate(state.end));
  document.getElementById('kpiRangeLabel').textContent = startLabel + ' – ' + endLabel;
}

/* ============================================================
   CHARTS
   ============================================================ */
function commonScalesX(isDense){
  return {
    grid:{ display:false },
    ticks:{
      autoSkip:true,
      maxRotation: isDense ? 60 : 0,
      minRotation: isDense ? 45 : 0,
      font:{ size:10.5 }
    }
  };
}

function renderSpendChart(buckets){
  const isDense = buckets.length > 32;
  const labels = buckets.map(b => b.label);
  const spendData = buckets.map(b => b.spend);
  const cplData = buckets.map(b => b.costPerLP);
  const maxCpl = Math.max(1, ...cplData.filter(v => v !== null));

  const cfg = {
    data:{
      labels,
      datasets:[
        {
          type:'bar',
          label:'Spend',
          data:spendData,
          backgroundColor:COLOR.blue,
          borderRadius:4,
          maxBarThickness:46,
          yAxisID:'y',
          order:2,
          datalabels:{
            anchor:'end', align:'top', offset:4,
            color:COLOR.navy, font:{ size:10, weight:'600' },
            formatter:v => v > 0 ? fmtCurrencyShort(v) : '',
            display: ctx => !isDense && ctx.dataset.data[ctx.dataIndex] > 0
          }
        },
        {
          type:'line',
          label:'Cost per LP Click',
          data:cplData,
          borderColor:COLOR.cyan,
          backgroundColor:COLOR.cyan,
          pointBackgroundColor:COLOR.cyan,
          pointBorderColor:COLOR.white,
          pointBorderWidth:1.5,
          pointRadius:4,
          pointHoverRadius:6,
          borderWidth:2.5,
          tension:0.3,
          spanGaps:false,
          yAxisID:'y1',
          order:1,
          datalabels:{
            anchor:'end', align:'top', offset:8,
            backgroundColor:COLOR.navyDark, borderRadius:4, color:COLOR.white,
            padding:{top:3,bottom:3,left:6,right:6},
            font:{ size:9.5, weight:'600' },
            formatter:v => v !== null ? '$' + v.toFixed(2) : '',
            display: ctx => !isDense && ctx.dataset.data[ctx.dataIndex] !== null
          }
        }
      ]
    },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      interaction:{ mode:'index', intersect:false },
      layout:{ padding:{ top:26 } },
      scales:{
        y:{
          position:'left', beginAtZero:true,
          title:{ display:true, text:'Spend ($)', color:COLOR.grayText, font:{size:11,weight:'600'} },
          grid:{ color:'#EEF1F7' },
          ticks:{ callback:v => '$' + v }
        },
        y1:{
          position:'right', beginAtZero:true, suggestedMax: maxCpl * 2.6,
          title:{ display:true, text:'Cost per LP Click ($)', color:COLOR.grayText, font:{size:11,weight:'600'} },
          grid:{ drawOnChartArea:false },
          ticks:{ callback:v => '$' + v.toFixed(2) }
        },
        x: commonScalesX(isDense)
      },
      plugins:{
        legend:{ position:'top', align:'end', labels:{ usePointStyle:true, boxWidth:8, font:{size:11.5} } },
        tooltip:{
          backgroundColor:COLOR.navyDark, padding:10, cornerRadius:8,
          callbacks:{
            label:function(ctx){
              if (ctx.dataset.label === 'Spend') return '  Spend: ' + fmtCurrency(ctx.parsed.y || 0);
              const v = ctx.parsed.y;
              return '  Cost per LP Click: ' + (v === null ? 'No data' : fmtCurrency(v));
            }
          }
        }
      }
    },
    plugins:[ChartDataLabels]
  };

  if (spendChart) { spendChart.data = cfg.data; spendChart.options = cfg.options; spendChart.update(); }
  else spendChart = new Chart(document.getElementById('spendChart'), cfg);
}

function renderImpressionsChart(buckets){
  const isDense = buckets.length > 32;
  const labels = buckets.map(b => b.label);
  const imprData = buckets.map(b => b.impressions);
  const ctrData = buckets.map(b => b.ctr);
  const maxCtr = Math.max(0.5, ...ctrData.filter(v => v !== null));

  const cfg = {
    data:{
      labels,
      datasets:[
        {
          type:'bar',
          label:'Impressions',
          data:imprData,
          backgroundColor:COLOR.blue,
          borderRadius:4,
          maxBarThickness:34,
          yAxisID:'y',
          order:2,
          datalabels:{
            anchor:'end', align:'top', offset:4,
            color:COLOR.navy, font:{ size:9.5, weight:'600' },
            formatter:v => v > 0 ? fmtNumber(v) : '',
            display: ctx => !isDense && ctx.dataset.data[ctx.dataIndex] > 0
          }
        },
        {
          type:'line',
          label:'CTR',
          data:ctrData,
          borderColor:COLOR.cyan,
          backgroundColor:COLOR.cyan,
          pointBackgroundColor:COLOR.cyan,
          pointBorderColor:COLOR.white,
          pointBorderWidth:1.5,
          pointRadius:4,
          pointHoverRadius:6,
          borderWidth:2.5,
          tension:0.3,
          spanGaps:false,
          yAxisID:'y1',
          order:1,
          datalabels:{
            anchor:'end', align:'top', offset:8,
            backgroundColor:COLOR.navyDark, borderRadius:4, color:COLOR.white,
            padding:{top:3,bottom:3,left:6,right:6},
            font:{ size:9, weight:'600' },
            formatter:v => v !== null ? v.toFixed(2) + '%' : '',
            display: ctx => !isDense && ctx.dataset.data[ctx.dataIndex] !== null
          }
        }
      ]
    },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      interaction:{ mode:'index', intersect:false },
      layout:{ padding:{ top:24 } },
      scales:{
        y:{
          position:'left', beginAtZero:true,
          title:{ display:true, text:'Impressions', color:COLOR.grayText, font:{size:10.5,weight:'600'} },
          grid:{ color:'#EEF1F7' },
          ticks:{ callback:v => fmtNumber(v) }
        },
        y1:{
          position:'right', beginAtZero:true, suggestedMax: maxCtr * 2.8,
          title:{ display:true, text:'CTR (%)', color:COLOR.grayText, font:{size:10.5,weight:'600'} },
          grid:{ drawOnChartArea:false },
          ticks:{ callback:v => v.toFixed(1) + '%' }
        },
        x: commonScalesX(isDense)
      },
      plugins:{
        legend:{ position:'top', align:'end', labels:{ usePointStyle:true, boxWidth:8, font:{size:11} } },
        tooltip:{
          backgroundColor:COLOR.navyDark, padding:10, cornerRadius:8,
          callbacks:{
            label:function(ctx){
              if (ctx.dataset.label === 'Impressions') return '  Impressions: ' + fmtNumber(ctx.parsed.y || 0);
              const v = ctx.parsed.y;
              return '  CTR: ' + (v === null ? 'No data' : v.toFixed(2) + '%');
            }
          }
        }
      }
    },
    plugins:[ChartDataLabels]
  };

  if (impressionsChart) { impressionsChart.data = cfg.data; impressionsChart.options = cfg.options; impressionsChart.update(); }
  else impressionsChart = new Chart(document.getElementById('impressionsChart'), cfg);
}

function renderClicksChart(buckets){
  const isDense = buckets.length > 32;
  const labels = buckets.map(b => b.label);
  const lpData = buckets.map(b => b.lpClicks);

  const cfg = {
    type:'bar',
    data:{
      labels,
      datasets:[{
        label:'Clicks to LP',
        data:lpData,
        backgroundColor:COLOR.cyan,
        borderRadius:4,
        maxBarThickness:34,
        datalabels:{
          anchor:'end', align:'top', offset:4,
          color:COLOR.navy, font:{ size:9.5, weight:'600' },
          formatter:v => v > 0 ? fmtNumber(v) : '',
          display: ctx => !isDense && ctx.dataset.data[ctx.dataIndex] > 0
        }
      }]
    },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      layout:{ padding:{ top:24 } },
      scales:{
        y:{ beginAtZero:true, grid:{ color:'#EEF1F7' }, title:{ display:true, text:'Clicks to LP', color:COLOR.grayText, font:{size:10.5,weight:'600'} } },
        x: commonScalesX(isDense)
      },
      plugins:{
        legend:{ display:false },
        tooltip:{
          backgroundColor:COLOR.navyDark, padding:10, cornerRadius:8,
          callbacks:{ label:ctx => '  Clicks to LP: ' + fmtNumber(ctx.parsed.y || 0) }
        }
      }
    },
    plugins:[ChartDataLabels]
  };

  if (clicksChart) { clicksChart.data = cfg.data; clicksChart.options = cfg.options; clicksChart.update(); }
  else clicksChart = new Chart(document.getElementById('clicksChart'), cfg);
}

/* ============================================================
   MAIN RENDER
   ============================================================ */
function render(){
  const filtered = filterRange(RAW_DATA, state.start, state.end);
  updateKPIs(filtered);
  updateDarkNote(filtered);

  let buckets;
  if (state.granularity === 'daily') buckets = aggregateDaily(filtered);
  else if (state.granularity === 'monthly') buckets = aggregateMonthly(filtered);
  else buckets = aggregateWeekly(filtered);

  const displayBuckets = (state.granularity === 'weekly') ? [...buckets].reverse() : buckets;

  renderSpendChart(displayBuckets);
  renderImpressionsChart(displayBuckets);
  renderClicksChart(displayBuckets);
}

/* ============================================================
   CONTROLS WIRING
   ============================================================ */
document.getElementById('granularityControl').addEventListener('click', e => {
  const btn = e.target.closest('button[data-gran]');
  if (!btn) return;
  document.querySelectorAll('#granularityControl button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  state.granularity = btn.dataset.gran;
  render();
});

function clearPresetActive(){
  document.querySelectorAll('#presets button').forEach(b => b.classList.remove('active'));
}

document.getElementById('presets').addEventListener('click', e => {
  const btn = e.target.closest('button[data-preset]');
  if (!btn) return;
  clearPresetActive();
  btn.classList.add('active');

  const maxD = parseDate(DATA_MAX);
  let newStart, newEnd = DATA_MAX;

  if (btn.dataset.preset === 'ytd') { newStart = DATA_MIN; newEnd = DATA_MAX; }
  else if (btn.dataset.preset === '30d') { newStart = toISO(addDays(maxD, -29)); }
  else if (btn.dataset.preset === 'janfeb') { newStart = '2026-01-01'; newEnd = '2026-02-28'; }
  else if (btn.dataset.preset === 'aprjul') { newStart = '2026-04-01'; newEnd = DATA_MAX; }

  state.start = newStart < DATA_MIN ? DATA_MIN : newStart;
  state.end = newEnd;
  fp.setDate([state.start, state.end], false);
  render();
});

fp = flatpickr('#dateRangeInput', {
  mode:'range',
  dateFormat:'M j, Y',
  minDate:DATA_MIN,
  maxDate:DATA_MAX,
  defaultDate:[DATA_MIN, DATA_MAX],
  onClose:function(selectedDates){
    if (selectedDates.length === 2){
      state.start = toISO(selectedDates[0]);
      state.end = toISO(selectedDates[1]);
      clearPresetActive();
      render();
    }
  }
});

/* ============================================================
   INIT
   ============================================================ */
render();
