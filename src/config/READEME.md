## API ROOTS 配置

> 因项目可能有多个环境区分，不同环境访问 `api `接口地址不同 ，一般有如下两种方式，小型项目用方式一即可，该项目默认使用方式一

### 方式一：创建不同打包命令、根据不同环境运行不同命令打包请求的 API
#### 配置方式：

参考官方文档：[环境变量和模式](https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F)

例如：我们需要增加一个测试环境的 请求api

1. 根目录下增加配置文件 `.env.test`

```
VUE_APP_BASE_API=//testapi.wengyingwangluo.cn/
```

2. 在客户端侧代码中使用环境变量
```javascript
console.log(process.env.VUE_APP_BASE_API)
```

3. 增加构建脚本
```
"build:test": "vue-cli-service build --mode test",
```

**优点**：将API请求域名打包在代码内，代码在任意环境部署都是访问固定的域名，不受部署域名影响。

**缺点**：需要增加多条打包命令，以构建不同环境的代码，可能容易导致认为出错。

## 方式二：只需一条打包命令，根据代码访问域名动态匹配 API
#### 配置方式：
参考该目录下 `apiRoots.js` 配置

**优点**：只需要一条打包命令

**缺点**：只能部署在代码内配置的对应环境下才能访问
