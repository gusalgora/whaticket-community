_writeNginxEnvVars() {
    dockerize -template /etc/nginx/conf.d/default.conf:/etc/nginx/conf.d/default.conf
}

_writeNginxEnvVars;