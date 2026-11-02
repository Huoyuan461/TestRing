/**
 * 验环（TestRing）自研模块 — MIT License
 * 替代已删除的上游商业文件 `services/conversation-buffer.ts` 的最小兼容桩。
 * AI 会话缓冲为企业付费功能，本版本中返回空结果。
 * 不包含任何上游商业逻辑。
 */

export type ConversationSummary = any;

export async function getConversationStatus(
  ...args: any[]
): Promise<any> {
  return null;
}

export async function listConversations(...args: any[]): Promise<any[]> {
  return [];
}
