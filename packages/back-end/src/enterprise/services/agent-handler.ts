/**
 * 验环（TestRing）自研模块 — MIT License
 * 替代已删除的上游商业文件 `services/agent-handler.ts` 的最小兼容桩。
 * AI 智能体为企业付费功能，本版本中停用。
 * 不包含任何上游商业逻辑。
 */

export type AgentConfig<T = any> = any;

export function cancelAgentStream(...args: any[]): boolean {
  return false;
}

export async function runAgentTurnToCompletion(
  ...args: any[]
): Promise<any> {
  return null;
}
