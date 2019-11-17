import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';

export default {
    input: './event-dispatcher.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs'
    },
    plugins: [
        babel({
            exclude: "node_modules/**",
            presets: [['@babel/preset-env']]
        }),
        resolve(),
        commonjs(),
        minify( {
            sourceMap: false,
            comments: false
        } )

    ]
};