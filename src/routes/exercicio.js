const express = require('express');
const ControllerExercicio = require('../controllers/exercicio');


const controller = new ControllerExercicio();
const router = express.Router();

router.get('/api/nomes/', controller.PegarTodos);
router.get('/api/nome/:index', controller.PegarUm);
router.post('/api/nome', controller.Add);
router.put('/api/nome/:index', controller.Alterar);
router.delete('/api/nome/:index', controller.Deletar);

module.exports = router;