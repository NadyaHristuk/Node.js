const chai = require("chai");
const chaiHttp = require('chai-http');
const expect = chai.expect;
const removeOdd = require("../removeOdd");
chai.use(chaiHttp);

const name = 'Abushit';

describe("----> Test for testing", () => {
    it("/vegetables/ ---> GET", () => {
        chai.request("http://localhost:9999")
        .get("/vegetables/").send()
        .then((response) => {
            expect(response.body.status).to.equal(200)
        });
    });
    it("/vegetables/ ---> POST", (done) => {
        chai.request("http://localhost:9999")
            .post("/vegetables/").send()
            .then((response) => {
                expect(response.body.status).to.equal(400)
                done();
            })
            .catch((e) => {
                done(e);
            })
    });
});