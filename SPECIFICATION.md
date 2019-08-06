# Project Specification

The contents of this file specify the baseline expectations that must be met for completing this project.

### Project Name: VueJS Todo's App on 8base
### Due date: September, 6th 2019
### Specs:

1. Unstyled - no css framework.
	1.1. The purpose of this project is not to create a sleek UI/UX experience. It is simply to provide a boilerplate app that demonstrates best practices when developing on 8base.
	1.2. No hours should be logged for custom CSS / design work.

2. Auth system w/ 8Base (Auth0) - login / sign up / logout / expire
	2.1. A major focus of this application is centered on authentication flows. Essentially, a production level auth module should be developed - relying on 8base's Auth0 setup.
	2.2. The final **auth module should be framework agnostic**, meaning that it is a plain JavaScript object with well documented and logically named methods.
	2.3. The VueJS Auth component developed will utilize the JS Auth module to handle the full authentication flow.
	2.4. Authentication will start at the router level and integrate with the state Vuex manager.

3. Simple add to do item, mark it as complete, show completed tasks under pending.
	3.1. Todo's will be managed using Queries, Mutations, and Subscriptions
	3.2. Backend resources will all be built using 8base
	3.3. Serverless functions for custom logic requirements will be added to scope if needed.

4. Apollo queries w/ auth token / error handling
	4.1. The final **auth module should be framework agnostic**, meaning that it is a plain Javascript object with well documented and logically named methods.
	4.2. Appolo GraphQL client will be utilized for the handling of API calls with required tokens and credentials.
	4.3. Error handling will be built into the Javascript module with default callbacks for error handling

5. Good readme on start up process - eg. setup 8base w/ these tables, change this callback, edit this, etc. 
	5.1. **All modules and components must be documented**. This is crucial for successfull completion of the project.
	5.2. File, Class, and Method level documentation should be written, using astrix commenting. 
	5.3. Example:

```javascript
// module.js
/**
 * This file contains all the functionality for X 
 * functionality and gets used by X. 
 */
 import x from 'y'
/**
 * The Module class is the main class that does all
 * those amazing things we like classes to do. 
 */
ModuleClass {
	/**
	 * This method is so great I just had to tell you
	 * all about the great things it does. 
	 */
	instanceMethod () {
		return 'awesome';
	}
}

```