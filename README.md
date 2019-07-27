# Prismic & Nuxt Starter Site

This starter site builds on the Nuxt and Prismic Starter provided by Prismic, therefore the original ReadMe will be left below. What I modified:

- Put list view of blog posts on /blog route instead of index route (/)
- Created a Sass style sheet and mini UI framework with two modals, buttons, a text input, and form -- you may sub our your preferred font and color scheme in variables.scss or opt not to use the stylesheet entirely. A number of classes have been created to quickly add padding or margin IE .padding-1 or .padding-v-1 (vertical only) and flexbox such as .flex-center or .flex-center-column. All of this is optional to use.
- Created a Navbar with links to home, blog, about, and components -- the components route is only to show you what components I created and can be deleted
- Added search functionality to blog posts -- query will search for term anywhere within blog posts
- Added vue-mq plugin as dependency to make site mobile responsive with ease

## Additional Notes

- You are encouraged to play with the stylesheet as it was only meant as a starting point for those who are experienced with css/scss. For example, the light grey border present now is only there to clearly delineate the confines of the content divs, which you can modify in the \$max-width variable. It is recommended to make this site your own.
- This was a passion/practice project that came from me personally wanting to be able to get started quickly with Nuxt and Prismic -- it is highly likely it will something helpful to set up for companies where a non-techy individual is doing the blogging from a remote location. Prismic makes this easy.

# Prismic Nuxt.js Example Blog

> [Nuxt.js](https://nuxtjs.org) example blog project with content managed in [Prismic](https://prismic.io)

## Check out our article for a step by step guide to getting this project up and running

> [Prismic project guide](https://user-guides.prismic.io/examples/create-a-sample-blog-with-prismic-and-nuxtjs)

## Launch this project in your local environment

Run the following commands:

```bash
npm install
npm run dev
```

Then you can access it at [http://localhost:3000](http://localhost:3000).

## Launching the project in production

Run the following commands to compile and minify the project and launch the server for production:

```bash
npm run build
npm start
```

## Learn more about using Prismic with Nuxt.js

> [Prismic Nuxt.js Documentation](https://prismic.io/docs/vuejs/getting-started/prismic-nuxt)

## License

This software is licensed under the Apache 2 license, quoted below.

Copyright 2013-2019 Prismic (http://prismic.io).

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this project except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
