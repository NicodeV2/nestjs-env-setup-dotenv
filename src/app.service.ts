import { Injectable } from '@nestjs/common';
import { env } from './dotenv'; // Import env object
@Injectable()
export class AppService {
  getHello(): string {
    const { host, port, dbName, dbUser, dbPassword } = env; // Destructure env object
    return `
      <html>
      <head>
        <title>Environment Variables</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 40px;
          }
          h1 {
            color: #333;
          }
          p {
            line-height: 1.6;
          }
        </style>
      </head>
      <body>
        <h1>Environment Variables</h1>
        <p><strong>Database Host:</strong> ${host}</p>
        <p><strong>Database Port:</strong> ${port}</p>
        <p><strong>Database User:</strong> ${dbUser}</p>
        <p><strong>Database Password:</strong> ${dbPassword}</p>
        <p><strong>Database Name:</strong> ${dbName}</p>
        <p><em>Note: We are using dotenv to manage environment variables</em></p>
      </body>
      </html>
    `;
  }
}
