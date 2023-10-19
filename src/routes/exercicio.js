const express = require('express');
const ControllerExercicio = require('../controllers/exercicio');
const autMiddleware = require('../middleware/auth')


const controller = new ControllerExercicio();
const router = express.Router();

router.get('/api/login/', controller.Login);
router.get('/api/nomes/', autMiddleware, controller.PegarTodos);
router.get('/api/nome/:id', autMiddleware, controller.PegarUm);
router.post('/api/nome', autMiddleware, controller.Add);
router.put('/api/nome/:id', autMiddleware, controller.Alterar);
router.delete('/api/nome/:id', autMiddleware, controller.Deletar);

module.exports = router;