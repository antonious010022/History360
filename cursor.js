// إنشاء المؤشر الدائري لو مش موجود أصلاً (لو مش ضيفته في HTML)
if (!document.getElementById('custom-cursor')) {
  const cursor = document.createElement('div');
  cursor.id = 'custom-cursor';
  document.body.appendChild(cursor);
}

const cursor = document.getElementById('custom-cursor');

// تحريك المؤشر مع حركة الماوس
window.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// تكبير المؤشر لما تضغط على لينك أو زرار
document.addEventListener('mousedown', e => {
  if (e.target.closest('a, button')) {
    cursor.classList.add('active');
  }
});

document.addEventListener('mouseup', () => {
  cursor.classList.remove('active');
});
