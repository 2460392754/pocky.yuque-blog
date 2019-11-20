#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

log() {
    echo -e "\033[5;37;41m [ $1 ] \033[0m"
}

# 进入生成的文件夹
cd ./dist

log '脚本开始部署'

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push https://github.com/2460392754/2460392754.github.io.git master -f

log '脚本部署结束'

cd -