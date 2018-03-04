require("chai").should();
const sinon = require("sinon");
const proxyquire = require("proxyquire");
var sandbox;

const EXPECTED_ENV = {
	TEST_KEY: "yes I am a test key",
	TEST_2: "a",
	TEST_3: "1234",
	TEST_4: JSON.stringify(["apples","and","bananas"]),
	TEST_5: "false",
	TEST_6: "true"
};

describe("module", () => {

	it("should set process.env[key] to the value after equals sign", () => {
		require("./index");

		Object.keys(EXPECTED_ENV).forEach(key => {
			process.env[key].should.equal(EXPECTED_ENV[key]);
		})
	})
})
