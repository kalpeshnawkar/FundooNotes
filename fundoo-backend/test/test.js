const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server')
const fs = require('fs')
chai.should()
chai.use(chaiHttp)
function readFile() {
    var data = fs.readFileSync('/home/admin1/fundooApp/fundoo-backend/test/test1.json');
    var data1 = JSON.parse(data);
    console.log(data1)
    return data1
}

describe('status and content', function () {
    describe('register page', function () {
        var data1 = readFile();
        it('status', function (done) {
            chai.request(server).post('/register').send(data1.register).end((err, res) => {
                if (err) {
                    console.log("err==", err)
                    err.should.have.status(400);
                }
                else {
                    console.log(res)
                    res.should.have.status(200);

                    describe('login page', function () {


                        it('status', function (done) {
                            chai.request(server).post('/login').send(data1.login).end((err, res) => {
                                if (err) {
                                    console.log("err===", err)
                                    err.should.hava.status(400);
                                }
                                else {
                                    console.log(res)
                                    res.should.have.status(200)
                                    describe('forgot page', function () {
                                        it('status', function (done) {
                                            chai.request(server).post('/forgotpassword').send(data1.forgot).end((err, res) => {
                                                if (err) {
                                                    console.log("err==", err)
                                                    err.should.have.status(400)
                                                }
                                                else {
                                                    console.log(err)
                                                    res.should.have.status(200);
                                                    describe('reset page',function(){
                                                        it('status',function(done){
                                                            chai.request(server).post('/resetpassword').send(data1.reset).end((err,res)=>{
                                                            if(err){
                                                                console.log(err)
                                                                err.should.have.status(400)
                                                            }
                                                            else{
                                                                console.log(res);
                                                                res.should.have.status(200);
                                                            }
                                                            done();
                                                            })
                                                            
                                                        })

                                                    })
                                                }
                                                done()
                                            })
                                        })

                                    })
                                }
                                done();


                            })
                        })
                    })
                }
                done();
            })
        })
    })

})
