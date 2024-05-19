document.getElementById('cake').addEventListener('click', function() {
    document.getElementById('person').style.opacity = '1';
    document.getElementById('wishes').classList.remove('hidden');
    setTimeout(function() {
      document.getElementById('wishes').style.opacity = '1';
    }, 500);
  });
  