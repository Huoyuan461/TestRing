/**
 * 验环（TestRing）自研模块 — MIT License
 *
 * 本文件为验环团队全新编写的最小兼容层，用于替代已删除的上游商业文件
 * `packages/back-end/src/enterprise/licenseUtil.ts`（GrowthBook Enterprise 商业许可）。
 *
 * 许可证服务端点已全部停用：所有 post*ToLicenseServer / callLicenseServer
 * 调用为空操作，shouldNotifyLicenseServer 一律返回 false。
 * 不包含任何上游商业逻辑；与上游 Enterprise 代码无任何复制关系。
 */

export type EventForwarderLicenseConnectorPhase = string;
export type EventForwarderLicenseConnectorStatus = any;

export const LICENSE_SERVER_URL: string = "";

export function getEffectiveAccountPlan(...args: any[]): string {
  return "oss";
}

export function shouldNotifyLicenseServer(...args: any[]): boolean {
  return false;
}

async function licenseServerNoop(...args: any[]): Promise<any> {
  return null;
}

export const callLicenseServer = licenseServerNoop;
export const notifyLicenseServerEvent = licenseServerNoop;
export const postEventForwarderStatusToLicenseServer = licenseServerNoop;
export const postNpsResponseToLicenseServer = licenseServerNoop;
export const postPauseEventForwarderToLicenseServer = licenseServerNoop;
export const postProvisionEventForwarderToLicenseServer = licenseServerNoop;
export const postRestartEventForwarderToLicenseServer = licenseServerNoop;
export const postResumeEventForwarderToLicenseServer = licenseServerNoop;
export const postTeardownEventForwarderToLicenseServer = licenseServerNoop;
export const postUpdateEventForwarderCredentialsToLicenseServer =
  licenseServerNoop;
