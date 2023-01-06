import typescript from 'rollup-plugin-typescript2'
/**
 * @type {import('rollup').RollupOptions}
*/
const config = {
	plugins: [typescript()],
	input: 'src/index.ts',
	output: {
		file: 'package/index.js',
		format: 'cjs'
	}
}

export default config