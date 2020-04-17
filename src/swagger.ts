import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

/**
 * 自动生成文档, {{baseURL}}/swagger, 例如 http://localhost:3000/swagger
 * @param app
 */
export const swagger = function(app) {
    const options = new DocumentBuilder()
        .setTitle('Yuque Blog API Doc')
        .setDescription('Yuque Blog API Documents')
        .setBasePath('api/v2')
        .addBearerAuth()
        .setVersion('v2')
        .addTag('user', '用户')
        .addTag('repo', '仓库')
        .addTag('doc', '文档')
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('swagger', app, document);
};
