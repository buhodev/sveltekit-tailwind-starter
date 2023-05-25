/**
 * @type { import("@inlang/core/config").DefineConfig }
 */
export async function defineConfig(env) {
	const { default: pluginJson } = await env.$import(
		'https://cdn.jsdelivr.net/gh/samuelstroschein/inlang-plugin-json@2/dist/index.js'
	);

	const { default: ideExtensionPlugin } = await env.$import(
		'https://cdn.jsdelivr.net/npm/@inlang/ide-extension-plugin@latest/dist/index.js'
	);

	const { default: standardLintRules } = await env.$import(
		'https://cdn.jsdelivr.net/gh/inlang/standard-lint-rules@2/dist/index.js'
	);

	const { default: sdkPlugin } = await env.$import(
		'https://cdn.jsdelivr.net/npm/@inlang/sdk-js-plugin@0.6.1/dist/index.js'
	);

	return {
		referenceLanguage: 'en',
		plugins: [
			pluginJson({
				pathPattern: './resources/{language}.json',
				variableReferencePattern: ['{', '}']
			}),
			standardLintRules(),
			sdkPlugin({
				languageNegotiation: {
					strategies: [{ type: 'url' }]
				}
			}),
			ideExtensionPlugin()
		]
	};
}
