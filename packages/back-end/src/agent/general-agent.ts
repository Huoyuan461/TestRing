/**
 * 验环（TestRing）自研模块 — MIT License
 *
 * 本文件为验环团队全新编写的最小兼容桩，用于替代已删除的上游企业文件
 * `packages/back-end/src/agent/general-agent.ts`（该文件依赖多个已删除的
 * GrowthBook Enterprise 商业模块）。
 * AI 智能体为企业付费功能，本版本中停用：prompt 构建返回空，工具集为空。
 * 不包含任何上游商业逻辑。
 */

export const AGENT_CORE_GUIDANCE: string = "";
export const GROWTHBOOK_CONCEPTS_GUIDANCE: string = "";
export const sharedAgentSettings: any = {};

export function buildAgentSystemPrompt(...args: any[]): string {
  return "";
}

export function buildCoreAgentTools(...args: any[]): any[] {
  return [];
}
