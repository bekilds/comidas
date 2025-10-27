import * as comidaModel from './../models/comidaModel.js';

export const listarTodos = async (req, res) => {
  try {
    const comidas = await comidaModel.listarTodos();

    if (!comidas || comidas.length === 0) {
      return res.status(404).json({
        total: 0,
        mensagem: 'Nenhuma comida encontrada',
      });
    }

    res.status(200).json({
      total: comidas.length,
      mensagem: 'Lista de comidas',
      comidas,
    });
  } catch (error) {
    res.status(500).json({
      erro: 'Erro interno do servidor',
      detalhes: error.message,
    });
  }
};

export const listarUm = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const comida = await comidaModel.listarUm(id);

    if (!comida) {
      return res.status(404).json({
        erro: 'Comida não encontrada',
        id,
      });
    }

    res.status(200).json({
      mensagem: 'Comida encontrada com sucesso',
      comida,
    });
  } catch (error) {
    res.status(500).json({
      erro: 'Erro ao buscar comida',
      detalhes: error.message,
    });
  }
};

export const criar = async (req, res) => {
  try {
    const { nome, tipo, preco, descricao } = req.body;

    const camposObrigatorios = ['nome', 'tipo', 'preco', 'descricao'];
    const faltando = camposObrigatorios.filter((campo) => !req.body[campo]);

    if (faltando.length > 0) {
      return res.status(400).json({
        erro: "Campos obrigatórios faltando: ${faltando.join(', ')},"
      });
    }

    const novaComida = await comidaModel.criar({ nome, tipo, preco: parseFloat(preco), descricao });

    res.status(201).json({
      mensagem: 'Comida criada com sucesso!',
      comida: novaComida,
    });
  } catch (error) {
    res.status(500).json({
      erro: 'Erro ao criar comida',
      detalhes: error.message,
    });
  }
};

export const atualizar = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const dados = req.body;

    const comidaExiste = await comidaModel.findById(id);
    if (!comidaExiste) {
      return res.status(404).json({
        erro: 'Comida não encontrada',
        id,
      });
    }

    const comidaAtualizada = await comidaModel.atualizar(id, dados);

    res.status(200).json({
      mensagem: 'Comida atualizada com sucesso!',
      comida: comidaAtualizada,
    });
  } catch (error) {
    res.status(500).json({
      erro: 'Erro ao atualizar comida',
      detalhes: error.message,
    });
  }
};

export const deletar = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const comidaExiste = await comidaModel.findById(id);
    if (!comidaExiste) {
      return res.status(404).json({
        erro: 'Comida não encontrada',
        id,
      });
    }

    await comidaModel.deletar(id);

    res.status(200).json({
      mensagem: 'Comida deletada com sucesso!',
      comidaRemovida: comidaExiste,
    });
  } catch (error) {
    res.status(500).json({
      erro: 'Erro ao deletar comida',
      detalhes: error.message,
    });
  }
};