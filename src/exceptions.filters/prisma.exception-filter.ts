import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Catch(PrismaClientKnownRequestError)
export class PrimaExceptionFilter implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    switch (exception.code) {
      case 'P2025':
        return response.status(404).json({
          statusCode: 404,
          message: exception.message,
          code: exception.code,
        });
      default:
        return response.status(500).json({
          statusCode: 500,
          message: 'Internal server error',
          code: exception.code,
        });
    }
  }
}
