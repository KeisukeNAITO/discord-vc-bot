/** @type {import("ts-jest").JestConfigWithTsJest} **/
export default {
  testEnvironment: "node",
	testMatch: [
		"**/test/**/*.(spec|test).[tj]s?(x)"
	],
	testPathIgnorePatterns: ["/node_modules/", "/src/", "/dist/"],
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};