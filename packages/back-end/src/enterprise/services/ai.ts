/**
 * 验环（TestRing）自研模块 — MIT License
 * 替代已删除的上游商业文件 `services/ai.ts` 的最小兼容桩。
 * AI 能力（embeddings/补全/速率限制）在本版本中停用，调用方走降级路径。
 * 不包含任何上游商业逻辑。
 */

export function cosineSimilarity(...args: any[]): number {
  return 0;
}

export async function generateEmbeddings(...args: any[]): Promise<any> {
  return null;
}

export function parsePrompt(...args: any[]): any {
  return {};
}

export function secondsUntilAICanBeUsedAgainForEmbeddings(
  ...args: any[]
): number {
  return 0;
}

export function secondsUntilAICanBeUsedAgainForModel(...args: any[]): number {
  return 0;
}

export function secondsUntilAICanBeUsedAgainForPrompt(
  ...args: any[]
): number {
  return 0;
}

export async function simpleCompletion(...args: any[]): Promise<any> {
  return null;
}
