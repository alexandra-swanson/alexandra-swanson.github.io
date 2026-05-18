// Toggle a document-level class when the Wireframe_v4 lightbox is opened
document.addEventListener('click', function (e) {
  const link = e.target.closest('a[data-toggle="lightbox"]');
  if (!link) return;
  const href = link.getAttribute('href') || '';
  if (href.includes('Wireframe_v4.webp')) {
    document.documentElement.classList.add('lightbox-dima480');
  } else {
    document.documentElement.classList.remove('lightbox-dima480');
  }
});

// Remove the class when clicking outside any open modal
document.addEventListener('click', function (e) {
  if (!e.target.closest('.modal') && !e.target.closest('a[data-toggle="lightbox"]')) {
    document.documentElement.classList.remove('lightbox-dima480');
  }
});
