// IE 371 Project — Common Scripts
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

function factorial(n) { let r=1; for(let i=2;i<=n;i++) r*=i; return r; }
function erlangC(c, rt) {
  if (rt >= c) return 1.0;
  let s = 0;
  for (let n=0;n<c;n++) s += Math.pow(rt,n)/factorial(n);
  const p0d = s + Math.pow(rt,c)/(factorial(c)*(1-rt/c));
  const p0 = 1/p0d;
  return (Math.pow(rt,c)/factorial(c))*(c/(c-rt))*p0;
}
function fmt(n, d=0) { return n.toLocaleString('tr-TR', {minimumFractionDigits:d, maximumFractionDigits:d}); }
function fmtUSD(n) { return '$'+n.toLocaleString('en-US', {maximumFractionDigits:0}); }
