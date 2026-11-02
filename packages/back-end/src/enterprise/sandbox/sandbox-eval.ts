/**
 * 验环（TestRing）自研模块 — MIT License
 * 替代已删除的上游商业文件 `sandbox/sandbox-eval.ts` 的最小兼容桩。
 * 自定义 Hook 沙箱校验为企业付费功能：本版本中视为"无 Hook 启用"，
 * 校验函数直接通过（不执行任何用户代码）。
 * 不包含任何上游商业逻辑。
 */

export function customHooksActive(...args: any[]): boolean {
  return false;
}

export async function runCustomHookTest(...args: any[]): Promise<any> {
  return { success: true };
}

async function validateNoop(...args: any[]): Promise<any> {
  // no-op：无启用的 Hook，校验直接通过
}

export const runValidateConfigHooks = validateNoop;
export const runValidateConfigRevisionHooks = validateNoop;
export const runValidateExperimentHooks = validateNoop;
export const runValidateFeatureHooks = validateNoop;
export const runValidateFeatureRevisionHooks = validateNoop;

export async function collectValidateConfigRevisionHookResults(...args: any[]): Promise<any> {
  return null;
}

export async function collectValidateFeatureHookResults(...args: any[]): Promise<any> {
  return null;
}

export async function collectValidateFeatureRevisionHookResults(...args: any[]): Promise<any> {
  return null;
}
