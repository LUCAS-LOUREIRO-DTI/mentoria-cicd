#!/bin/bash
# Script de validação de código
# Este script é chamado pelo template reutilizável

set -e

# Parâmetros recebidos do workflow
AMBIENTE=${1:-"desenvolvimento"}
NOME=${2:-"Mundo"}

echo "========================================="
echo "Hello World, $NOME!"
echo "========================================="
echo ""
echo "Iniciando validação do código..."
echo "Ambiente: $AMBIENTE"

# Simulando validações
echo ""
echo "Verificando estrutura de pastas..."
sleep 1

echo "Validando sintaxe dos arquivos..."
sleep 1

echo "Executando linting..."
sleep 1

echo ""
echo "========================================="
echo "Validação concluída com sucesso!"
echo "========================================="

exit 0
