



// app.post('/data', async (req, res) => {
//     try {
//       const dataEntry = await prisma.dataEntry.create({
//         data: {
//           userId: req.body.userId,
//           barId: req.body.barId,
//           time: req.body.time,
//           volume: req.body.volume,
//           persons: req.body.persons,
//         },
//       });
//       res.json(dataEntry);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'An error occurred' });
//     }
//   });
  
//   // Get data entries by user and bar
//   app.get('/data/:userId/:barId', async (req, res) => {
//     try {
//       const dataEntries = await prisma.dataEntry.findMany({
//         where: {
//           userId: parseInt(req.params.userId),
//           barId: parseInt(req.params.barId),
//         },
//       });
//       res.json(dataEntries);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'An error occurred' });
//     }
//   });
  