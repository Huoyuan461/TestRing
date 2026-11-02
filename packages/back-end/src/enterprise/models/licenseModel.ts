/**
 * 验环（TestRing）自研模块 — MIT License
 * 替代已删除的上游商业文件 `enterprise/models/licenseModel.ts` 的最小兼容桩。
 * 许可证库已移除，一律返回空。
 * 不包含任何上游商业逻辑。
 */

export async function getLicenseByKey(...args: any[]): Promise<any> {
  return null;
}

export async function getLicensesByKeys(...args: any[]): Promise<any> {
  return [];
}

export async function _dangerousGetLicenseRefsByPlans(
  ...args: any[]
): Promise<any> {
  return [];
}

export async function _dangerousGetLicenseRefsBySubscriptionStatus(
  ...args: any[]
): Promise<any> {
  return [];
}
