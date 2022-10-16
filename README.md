# Image Processing API

## Description

Image Processing API repository, a simple API to resize an image that we can use in other projects. This API allows us to process an image and resize it to the desired dimensions.

## How to start the project

1. Clone the repository
2. Install the dependencies with `npm install`
3. Run the project with `npm start`

### Available Scripts

```bash
npm start
npm run dev
npm run build
npm run clean
npm run lint
npm run prettier
npm run test
```

1. `npm start`: Run the project in production mode
2. `npm run dev`: Run the project in development mode
3. `npm run build`: Build the project
4. `npm run clean`: remove the build folder
5. `npm run lint`: Run eslint
6. `npm run prettier`: Run prettier to format the code
7. `npm run test`: Builds the project then runs the tests

## How to use the API

### Endpoints

1. `GET /`: Returns a welcome message
2. `GET /api`: Returns hello from API
3. `GET /api/images?filename=<image_name>&width=<width>&height=<height>`: Returns the resized image
`filename`: The name of the image to resize
`width`: The width of the image
`height`: The height of the image

#### Available Image options

1. `encenadaport`
2. `fjord`
3. `icelandwaterfall`
4. `palmtunnel`
5. `santamonica`

### Functionality

- The API will resize the image to the desired dimensions
- The API will return the image in jpg format
- The API will return an error if the image is not found

## Technologies

- [NodeJS](https://nodejs.org/en/) - The JavaScript runtime.
- [Express](https://expressjs.com/) - The web framework.
- [TypeScript](https://www.typescriptlang.org/) - The language used.
- [Sharp](https://sharp.pixelplumbing.com/) - NodeJS image processor.
- [jasmine](https://jasmine.github.io/) - The testing framework.
