/**
 * 验环（TestRing）自研模块 — MIT License
 * 替代已删除的上游商业文件 `services/data-pipeline.ts` 的最小兼容桩。
 * 数据管道（增量刷新/聚合事实表）为企业付费功能，本版本中停用：
 * 增量刷新前置检查一律不通过，调用方走全量路径。
 * 不包含任何上游商业逻辑。
 */

export type AggregatedFactTableRestateReason = any;

export function assertIncrementalRefreshPrerequisites(
  ...args: any[]
): any {
  throw new Error("增量刷新为企业版功能，当前版本未启用");
}

export function buildAggregatedFactTableSchemaState(...args: any[]): any {
  return {};
}

export function exploratoryOverallRequiresFullRefresh(
  ...args: any[]
): boolean {
  return true;
}

export function getAggregatedFactTableRestateReason(...args: any[]): any {
  return null;
}

export function getExperimentSettingsHashForIncrementalRefresh(
  ...args: any[]
): string {
  return "";
}

export function getFactTableSettingsHashForAggregatedFactTable(
  ...args: any[]
): string {
  return "";
}

export function getFactTablesNeedingRebuild(...args: any[]): any {
  return [];
}

export function getMetricSettingsHashForAggregatedFactTable(
  ...args: any[]
): string {
  return "";
}

export function getMetricSettingsHashForIncrementalRefresh(
  ...args: any[]
): string {
  return "";
}

export function legacyDocDescribesPhase(...args: any[]): boolean {
  return false;
}
