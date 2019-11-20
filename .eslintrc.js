module.exports = {
    'extends': 'standard',
    'plugins': ['react', 'standard', 'promise', 'import', 'json'],
    'env': {
        'es6': true,
        'jest': true,
        'node': true,
        'browser': true
    },
    'parser': 'babel-eslint',
    'rules': {
        'semi': 'off',
        'camelcase': 0,
        'comma-dangle': 'off',
        'padded-blocks': 'off',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/prop-types': 'error',
        'react/jsx-key': 'error',
        'import/named': 'error',
        'standard/computed-property-even-spacing': 'off',
        'operator-linebreak': 'off',
        'space-before-function-paren': 'off',
        'indent': 'off',
        'object-curly-spacing': 'off',
        'no-trailing-space': 'off',
        'handle-callback-err': 'off'
    },
    'settings' : {
        'react' : {
            'version' : 'detect'
        }
    }
};
