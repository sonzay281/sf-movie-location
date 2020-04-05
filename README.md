This project was bootstrapped with [React Project Template ](https://github.com/sonzay281/react-project-template-ts).

# SF Movie Location

SF Movie Location is a web service which shows the movie filmed locations in San Francisco,USA.

The initial requirement was to make a web service that shows on a map where movies have been filmed in San Francisco. The user should be able to filter the view using autocompletion search.
As per the requirement, this web service works exactly as per the requirements.

The service is fully frontend focused and fetching the movie detail from an open source API [data.sfgov.org](https://data.sfgov.org/resource/yitu-d5am.json) and using Google Map API for location purpose.

## Trade-offs

Every thing is fulfilled as per the requirements but still there are few things that can be done in future release. Some of them includes fetching the `rating`, `poster` from `IMDB` api.

There is one package for location to lat,lng which only includes in build but not in source available here in git. The pin points may not appear if you run without the package. Please let me know if you want to actualy try the code.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Installing

For of all, pull the project in your machine, navigate to the folder Open `Command Prompt` or `Terminal` and hit

```
yarn
```

This will install all the package required for the project. Now, hit

```
yarn start
```

to run the project in your local env. Once the project is open, there's a search bar in the top-left side, type any name and select any moive name.

You can see the search detail bar bolow the search bar, the detail section includes the crew detail and locations where the movie was filmed.

In the map, you can see the pin points which indicates where the movie were filmed.

## Built With

- [ReactJs](https://reactjs.org/) - The frontend web framework used
- [Yarn](https://yarnpkg.com/) - Node Package Management
- [Typescript](https://www.typescriptlang.org/) - Open source Programming Language maintained by microsoft

## Authors

- **Sanjaya Sapkota** - _Initial work_ - [sonzay281](https://github.com/sonzay281)

## License

This project is licensed under the MIT License
MIT © [sonzay281](https://github.com/sonzay281)

## Acknowledgments

Thanks to [PurpleBooth](https://github.com/PurpleBooth) for this awesome Readme.md template.
