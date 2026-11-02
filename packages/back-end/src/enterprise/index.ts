/**
 * 验环（TestRing）自研模块 — MIT License
 *
 * 本文件为验环团队全新编写的最小兼容层，用于替代已删除的上游商业目录
 * `packages/back-end/src/enterprise`（GrowthBook Enterprise 商业许可，该目录已从本仓库彻底删除）。
 *
 * 计费/许可证服务端点在此全部停用：licenseInit 为空操作，orgHasPremiumFeature
 * 一律返回 false（走免费版代码路径），所有 post*ToLicenseServer 调用为空操作。
 * 不包含任何上游商业逻辑；与上游 Enterprise 代码无任何复制关系。
 */

export function orgHasPremiumFeature(...args: any[]): boolean {
  return false;
}

export async function licenseInit(...args: any[]): Promise<any> {
  // 许可证服务已移除：无操作
}

export function getEffectiveAccountPlan(...args: any[]): string {
  return "oss";
}

export function getAccountPlan(...args: any[]): string {
  return "oss";
}

export function getLicense(...args: any[]): any {
  return null;
}

export function getLicenseError(...args: any[]): any {
  return null;
}

export function getSubscriptionFromLicense(...args: any[]): any {
  return null;
}

export function getLowestPlanPerFeature(...args: any[]): any {
  return null;
}

export function getOrgLimits(...args: any[]): any {
  return {};
}

export function getPortalUrlFromServer(...args: any[]): any {
  return null;
}

export function getCustomerDataFromServer(...args: any[]): any {
  return null;
}

export async function updateCustomerDataFromServer(
  ...args: any[]
): Promise<any> {
  return null;
}

async function licenseServerNoop(...args: any[]): Promise<any> {
  return null;
}

export const postCancelSubscriptionToLicenseServer = licenseServerNoop;
export const postCreateTrialEnterpriseLicenseToLicenseServer =
  licenseServerNoop;
export const postResendEmailVerificationEmailToLicenseServer =
  licenseServerNoop;
export const postVerifyEmailToLicenseServer = licenseServerNoop;
export const postCreateBillingSessionToLicenseServer = licenseServerNoop;
export const postNewProSubscriptionIntentToLicenseServer = licenseServerNoop;
export const postNewProSubscriptionToLicenseServer = licenseServerNoop;
export const postNewProTrialSubscriptionToLicenseServer = licenseServerNoop;
export const postNewSubscriptionSuccessToLicenseServer = licenseServerNoop;
export const postNewInlineSubscriptionToLicenseServer = licenseServerNoop;
export const postNewVercelSubscriptionToLicenseServer = licenseServerNoop;
