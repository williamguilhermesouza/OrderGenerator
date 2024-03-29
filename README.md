# OrderGenerator

![order-generator](https://raw.githubusercontent.com/williamguilhermesouza/OrderGenerator/main/order-generator.gif)

A angular frontend to the Order Accumulator API, that was built using C#.

## How to run

Download both Order Generator and Order Accumulator repositories, instructions on Order Accumulator are
in this [repository](https://github.com/williamguilhermesouza/OrderAccumulator).

Clone this repository with:

> git clone https://github.com/williamguilhermesouza/OrderGenerator.git

Then install the dependencies:

> npm install 

Then run the frontend using npm start script:

> npm run start

Also, you can run a docker container of the app, build the dockerimage with:

> docker build -t ordergenerator .

And run with:

> docker-compose up

Remember to change the apiUrl in order accumulator service under services folder, to reflect your backend host.

## Structure

The project was built on a single page, using Angular js framework. All the html, tests and components are under app folder.

Also, the interfaces are under interfaces folder and services, that communicate with Order Accumulator backend in the services folder.

The main src folder is home for configuration files.

## Tests

All the tests are located near the code they're testing, they're identified by the .spec.ts extension. To run use:

> ng test
