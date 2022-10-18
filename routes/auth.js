app.get('/', (req, res) => {
  console.log('Se requiere el /');
  res.json({
    ok: true,
  });
});
