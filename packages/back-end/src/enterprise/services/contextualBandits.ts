/**
 * 验环（TestRing）自研模块 — MIT License
 * 替代已删除的上游商业文件 `services/contextualBandits.ts` 的最小兼容桩。
 * Contextual Bandit 为企业付费功能，本版本中停用。
 * 不包含任何上游商业逻辑。
 */

export async function activatePendingContextualBanditVariations(
  ...args: any[]
): Promise<any> {
  // no-op
}

export async function executeContextualBanditVariationChange(
  ...args: any[]
): Promise<any> {
  return null;
}

export async function getContextualBanditLinkedFeatureInfo(
  ...args: any[]
): Promise<any> {
  return null;
}

export async function linkFeatureToContextualBandit(
  ...args: any[]
): Promise<any> {
  // no-op
}
