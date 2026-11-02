/**
 * 验环（TestRing）自研模块 — MIT License
 * 替代已删除的上游商业文件 `enterprise/billing/index.ts` 的最小兼容桩。
 * Stripe/Orb 计费已移除：支付方法返回空列表，用量返回 0。
 * 不包含任何上游商业逻辑。
 */

export async function createSetupIntent(...args: any[]): Promise<any> {
  return { clientSecret: "" };
}

export async function deletePaymentMethodById(
  ...args: any[]
): Promise<any> {
  // no-op
}

export async function getPaymentMethodsByLicenseKey(...args: any[]): Promise<any> {
  return null;
}

export async function getUsage(...args: any[]): Promise<any> {
  return 0;
}

export async function updateDefaultPaymentMethod(
  ...args: any[]
): Promise<any> {
  // no-op
}
