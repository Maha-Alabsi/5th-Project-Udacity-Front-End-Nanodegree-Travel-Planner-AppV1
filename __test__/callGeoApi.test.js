// Import the js file to test
import {  geoNamesApi } from "../src/server/server.js"   

describe("Testing the submit functionality", () => {
    test("Testing the  geoNamesApi() function", () => {
        expect( geoNamesApi).toBeDefined();
})});