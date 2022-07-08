const path = require('path');
const webpack = require('webpack');

const paths = {
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist')
};

module.exports = {  
    entry: {
        app: './app'  // точка входа в приложение, наш src/index.ts файл, названием итогового бандла будет имя свойства - app
    },
    
    output: {
        path: path.dist,  // путь для результатов сборки 
        filename: '[name].js'  // название итогового бандла, получится dist/app.bundle.js
    },
    
    resolve: {
        extensions: ['.ts'] // указание расширений файлов, которые webpack будет обрабатывать, и пытаться добавить автоматически (например получив запрос на index, не найдет его и попробует index.ts)
    },

    devtool: 'inline-source-map', // дополнительные настройки и загрузчики не требуются, хотя даже официальный рецепт от TypeScript рекомендует source-map-loader и поле в tsconfig - "sourceMap": true 
    
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            } // загрузчик для обработки файлов с расширением .ts
        ]
    }
};