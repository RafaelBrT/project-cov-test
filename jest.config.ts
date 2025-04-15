import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',  // ou 'babel' se preferir
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',  // Inclui todos os arquivos .ts na pasta src
    '!src/main.ts',  // Exclui o arquivo main.ts (geralmente não é necessário para o coverage)
    '!**/node_modules/**',  // Exclui a pasta node_modules
  ],
  coverageThreshold: {
    global: {
      branches: 80,    // Exemplo: 80% de branches cobertos
      functions: 80,   // Exemplo: 80% de funções cobertas
      lines: 80,       // Exemplo: 80% de linhas cobertas
      statements: 80,  // Exemplo: 80% de declarações cobertas
    },
  },
  testEnvironment: 'node',
};

export default config;
