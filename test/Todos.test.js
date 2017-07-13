var should = require('chai').should(),
	expect = require('chai').expect,
	supertest = require('supertest'),
	api = supertest('http://localhost:3000');

describe('Todos', function (done) {
	it('should return a 200 response', function (done) {
		api.get('/tasks')
		.set('Accept', 'application/json')
		.expect(200, done);
	});

	it('should be an object with keys and values', function (done) {
		api.get('/tasks/5966f34893e3f202ebb93bed')
		.set('Accept', 'application/json')
		.expect(200)
		.end(function (err, res) {
			expect(res.body).to.have.property("name");
			expect(res.body.name).to.not.equal(null);
			expect(res.body).to.have.property("createdAt");
			expect(res.body.createdAt).to.not.equal(null);
			done();
		});
	});

	it('should update todos with new name', function (done) {
		api.put('/tasks/5966f34893e3f202ebb93bed')
		.set('Accept', 'application/x-www-form-urlencoded')
		.send({
			name: "Buy new swimming custom"
		})
		.expect(200)
		.end(function (err, res) {
			expect(res.body.name).to.equal("Buy new swimming custom");
			done();
		});
	});
});