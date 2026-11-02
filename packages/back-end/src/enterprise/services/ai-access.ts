/**
 * 验环（TestRing）自研模块 — MIT License
 * 替代已删除的上游商业文件 `services/ai-access.ts` 的最小兼容桩。
 * AI 访问门禁在本版本中直接放行（无企业配额体系）。
 * 不包含任何上游商业逻辑。
 */

export function assertAIAccess(...args: any[]): any {
  // no-op：本版本不做 AI 配额门禁
}

export async function runAccessGates(...args: any[]): Promise<any> {
  // no-op
}
