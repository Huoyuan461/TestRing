/**
 * 验环（TestRing）自研模块 — MIT License
 * 替代已删除的上游商业文件的最小兼容桩：VectorsModel 为企业付费功能的数据模型，
 * 本版本中停用，仅保留可被构造的空类以保证编译通过。
 * 不包含任何上游商业逻辑。
 */


export class VectorsModel {
  // 索引签名：停用模型的任意静态/实例访问均返回 any，保证调用方编译通过
  static [key: string]: any;
  [key: string]: any;
  constructor(...args: any[]) {
    // 停用：不初始化任何数据连接
  }
  // 明确类型的方法（调用方做 .map/.filter，需要 any[]）
  async getByLearningIds(...args: any[]): Promise<any[]> { return []; }
  async getByExperimentIds(...args: any[]): Promise<any[]> { return []; }
  async getByMetricIds(...args: any[]): Promise<any[]> { return []; }
  async getByIds(...args: any[]): Promise<any[]> { return []; }
  async getAll(...args: any[]): Promise<any[]> { return []; }

}
