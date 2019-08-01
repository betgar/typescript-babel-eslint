const presets = ['@babel/env', '@babel/preset-typescript'];

const plugins = [
	'@babel/plugin-proposal-class-properties',
	'@babel/plugin-proposal-object-rest-spread',
	'@babel/plugin-proposal-export-default-from',
	'@babel/plugin-proposal-export-namespace-from',
	'@babel/plugin-proposal-optional-chaining'
];
module.exports = {
	presets,
	plugins,
	exclude: ['src/**/*.spec.(js|ts)', 'src/**/*.test.(js|ts)'],
	comments: false
};
