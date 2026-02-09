type ValidationInput = {
  ambiente: string;
  nome: string;
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function parseArgs(): ValidationInput {
  const ambiente = process.argv[2] ?? 'desenvolvimento';
  const nome = process.argv[3] ?? 'Mundo';
  return { ambiente, nome };
}

async function runValidation({ ambiente, nome }: ValidationInput): Promise<void> {
  console.log('=========================================');
  console.log(`Hello World, ${nome}!`);
  console.log('=========================================');
  console.log('');
  console.log('Iniciando validação do código...');
  console.log(`Ambiente: ${ambiente}`);

  console.log('');
  console.log('Verificando estrutura de pastas...');
  await sleep(500);

  console.log('Validando sintaxe dos arquivos...');
  await sleep(500);

  console.log('Executando linting...');
  await sleep(500);

  console.log('');
  console.log('=========================================');
  console.log('Validação concluída com sucesso!');
  console.log('=========================================');
}

async function main() {
  try {
    const input = parseArgs();
    await runValidation(input);
  } catch (error) {
    console.error('Falha ao validar o código:', error);
    process.exitCode = 1;
  }
}

main();
