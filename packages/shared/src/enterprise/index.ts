/**
 * 验环（TestRing）自研模块 — MIT License
 *
 * 本文件为验环团队全新编写的最小兼容层，用于替代已删除的上游商业目录
 * `packages/shared/src/enterprise`（GrowthBook Enterprise 商业许可，该目录已从本仓库彻底删除）。
 *
 * - 下面的 `export *` 重导出的是上游 MIT 目录的真实实现（非商业代码）。
 * - 其余名字是最小桩：类型桩保证编译通过；函数桩返回"功能未启用"的安全默认值；
 *   被删除的企业付费功能（看板、产品分析、决策标准、SSO、计费等）在此一律不可用。
 * - 不包含任何上游商业逻辑；与上游 Enterprise 代码无任何复制关系。
 */

// 上游 MIT 实现的重导出（真实逻辑）
export * from "../revisions";
export * from "../validators/revisions";

// ---------------------------------------------------------------------------
// 类型桩
// ---------------------------------------------------------------------------
export type AccountPlan = string;
export type AdminOrgSummary = any;
export type CommercialFeature = string;
export type DashboardInterface = any;
export type DashboardBlockInterface = any;
export type DashboardBlockInterfaceOrData<T = any> = any;
export type DashboardEditLevel = any;
export type DashboardShareLevel = any;
export type LicenseInterface = any;
export type LicenseUserCodes = any;
export type OrgLimits = any;
export type OrgLimitsAccessor = any;
export type PipelineValidationResults = any;
export type SubscriptionInfo = any;

// ---------------------------------------------------------------------------
// 常量桩
// ---------------------------------------------------------------------------
export const DEFAULT_ORG_LIMITS: any = { free: {}, pro: {} };
export const PRICING_PHASE_1_FLAG_KEY: any = "pricing-phase-1";
export const REVIEW_CYCLE_STATUSES: string[] = [];
export const SSO_CONFIG: any = {};
export const PIPELINE_MODE_SUPPORTED_DATA_SOURCE_TYPES: any = {};
export const PRESET_DECISION_CRITERIA: any = null;
export const PRESET_DECISION_CRITERIAS: any[] = [];
export const accountFeatures: any = {};
export const bigQueryCreateTableOptions: any = {};
export const bigQueryCreateTablePartitions: any = {};
export const databricksCreateTableOptions: any = {};
export const prestoCreateTablePartitions: any = {};
export const snowflakeCreateTableOptions: any = {};
export const UNITS_TABLE_RETENTION_HOURS_DEFAULT: number = 0;
export const DEFAULT_DASHBOARD_GLOBAL_CONTROLS: any = {};
export const DEFAULT_EXPLORE_STATE: any = {};
// zod 桩：仅保证编译，实际校验在企业版中
export const MidExperimentPowerCalculationResultValidator: any = null;

// ---------------------------------------------------------------------------
// 函数桩（企业付费功能一律返回"未启用"默认值）
// ---------------------------------------------------------------------------
export function makeOrgLimits(...args: any[]): any {
  return {};
}
export function planTierFor(...args: any[]): any {
  return "free";
}
export function resolveOrgLimitsConfig(...args: any[]): any {
  return {};
}
export function isLimitsFlagDisabled(...args: any[]): boolean {
  return true;
}
export function getHealthSettings(...args: any[]): any {
  return {};
}
export function getSafeRolloutDaysLeft(...args: any[]): number {
  return 0;
}
export function getSafeRolloutResultStatus(...args: any[]): any {
  return null;
}
export function getExperimentResultStatus(...args: any[]): any {
  return null;
}
export function getDecisionFrameworkStatus(...args: any[]): any {
  return null;
}
export function resolveScheduledShipDecision(...args: any[]): any {
  return { action: "no-action" };
}
export function getPresetDecisionCriteriaForOrg(...args: any[]): any {
  return null;
}
export function getAdminOrgSummary(...args: any[]): any {
  return {};
}
export function calculateProductAnalyticsDateRange(...args: any[]): any {
  return {};
}
export function generateProductAnalyticsSQL(...args: any[]): any {
  return { sql: "", orderedMetricIds: [] };
}
export function transformProductAnalyticsRowsToResult(...args: any[]): any {
  return [];
}
export function buildComparisonExplorationConfig(...args: any[]): any {
  return {};
}
export function computeExplorationComparisonPayload(...args: any[]): any {
  return {};
}
export function getComparisonAlignmentStrategy(...args: any[]): any {
  return null;
}
export function buildTiebreakerLiftMap(...args: any[]): any {
  return {};
}
export function explorationConfigReferencesColumn(...args: any[]): boolean {
  return false;
}
export function getDateGranularity(...args: any[]): any {
  return null;
}
export function hasTimestampColumn(...args: any[]): boolean {
  return false;
}
export function snapshotSatisfiesBlock(...args: any[]): boolean {
  return false;
}
export function isFunnelSupportedDatasourceType(...args: any[]): boolean {
  return false;
}
export function blockHasFieldOfType(...args: any[]): boolean {
  return false;
}
export function chartTypeSupportsAnchorYAxisToZero(...args: any[]): boolean {
  return false;
}
export function getPipelineValidationCreateTableQuery(
  ...args: any[]
): string {
  return "";
}
export function getPipelineValidationDropTableQuery(...args: any[]): string {
  return "";
}
export function getPipelineValidationInsertQuery(...args: any[]): string {
  return "";
}
export function getUnsupportedIncrementalExperimentTypeReason(
  ...args: any[]
): any {
  return null;
}
export function isExperimentCoveredByIncrementalPipeline(
  ...args: any[]
): boolean {
  return false;
}
export function isExperimentIncrementalEnabled(...args: any[]): boolean {
  return false;
}
export function analyzeExperimentPower(...args: any[]): any {
  return {};
}
export function reviewCycleOf(...args: any[]): any {
  return null;
}
export function reviewCycleSupersededMessage(...args: any[]): string {
  return "";
}
export function isSameReviewCycle(...args: any[]): boolean {
  return false;
}
export function standingReviews(...args: any[]): any[] {
  return [];
}
export function statusFromStandingVerdicts(...args: any[]): any {
  return null;
}
export function getBlockData(...args: any[]): any {
  return {};
}

// ---------------------------------------------------------------------------
// 前端缺失导出补齐（2026-11-02 typecheck 补）
// ---------------------------------------------------------------------------
export type AdminOrgStatus = any;
export type DecisionCriteriaCondition = any;
export type DecisionCriteriaData = any;
export type DecisionCriteriaInterface = any;
export type DecisionCriteriaRule = any;
export type IncrementalFullRefreshComparable = any;
export type LicenseMetaData = any;
export type SourceSnapshotRef = any;
export type StatusIndicatorData = any;
export const CREATE_BLOCK_TYPE: any = "";
export const OVERALL_NON_INCREMENTAL_FULL_REFRESH_REASON: any = "";
export function chartTypeHasDisplaySettings(...args: any[]): any { return null; }
export function clearLeader(...args: any[]): any { return null; }
export function enumerateProductAnalyticsDateBuckets(...args: any[]): any { return null; }
export function getContextualBanditResultStatus(...args: any[]): any { return null; }
export function getExperimentSourceSnapshotRef(...args: any[]): any { return null; }
export function getIncrementalFullRefreshReasons(...args: any[]): any { return null; }
export function getIncrementalPipelineUnsupportedReason(...args: any[]): any { return null; }
export function getStatusIndicatorData(...args: any[]): any { return null; }
export function isNewerOverallResultsDataAvailable(...args: any[]): any { return null; }
export function isRollingDateRange(...args: any[]): any { return null; }
export function mapDatabaseTypeToEnum(...args: any[]): any { return null; }
export function overallResultsBuiltWithoutIncrementalPipeline(...args: any[]): any { return null; }

export function isInReviewCycle(...args: any[]): any { return null; }
