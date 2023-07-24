概览
    Nest提供后端应用程序的完善架构
    $ npm i -g @nestjs/cli
    $ nestnest new project-name

    nest 支持两个HTTP 框架 express 和 fastify
    NestFactory.create<T>(AppModule) T 可以是 NestExpressApplication NestFastifyApplication

controller
    控制器负责处理传入请求并向客户端返回响应
    装饰器将控制器类与所需的元数据关联起来，并使 Nest 能够创建路由与控制器的映射关系
    当请求处理程序返回 JavaScript 对象或数组时，它将自动序列化为 JSON。
    然而，当它返回 JavaScript 基本类型（例如字符串、数字、布尔值）时，Nest 将仅发送该值，而不尝试对其进行序列化
provider
modules
middleware
exception filters
    Nest 带有一个内置的异常层，负责处理应用程序中所有未处理的异常
    当应用程序代码未处理异常时，该层会捕获异常，然后自动发送适当的用户友好响应
pipes
guards


