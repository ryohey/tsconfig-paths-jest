const fromPairs = pairs => pairs.reduce((res, [key, value]) => ({ ...res, [key]: value }), {})

/**
 * tsconfig の paths の設定から moduleNameMapper を生成する
 * {"@app/*": ["src/*"]} -> {"@app/(.*)": "<rootDir>/src/$1"}
 */
module.exports = function moduleNameMapperFromTSPaths(tsconfig) {
  return fromPairs(
    Object.entries(tsconfig.compilerOptions.paths).map(([k, [v]]) => [
      `^${k.replace(/\*/, "(.*)")}`,
      `<rootDir>/${v.replace(/\*/, "$1")}`,
    ]),
  )
}
