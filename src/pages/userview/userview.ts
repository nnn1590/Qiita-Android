import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
/**
 * Generated class for the UserviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userview',
  templateUrl: 'userview.html',
})
export class UserviewPage {
  user: any;
  org: any;
  iid: any;
  resp: any;
  name: any;
  pfi: any;
  desc: any;
  tw: any;
  fb: any;
  linkedin: any;
  github: any;
  FTW: any;
  FFB: any;
  FLi: any;
  Fgi: any;
  ATW: any;
  AFB: any;
  ALI: any;
  AGI: any;
  locate: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
  }
  ionViewDidLoad() {
    this.AFB = "F";
    this.ATW = "T";
    this.AGI = "G";
    this.ALI = "L";
    console.log('ionViewDidLoad UserviewPage');
    this.user = this.navParams.get("user");
    this.iid = this.user["id"];
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    const res = this.http.get("https://qiita.com/api/v2/users/" + this.iid)
      .subscribe(res => {
        this.resp = res;
        console.log(this.resp);
        this.locate = res["location"];
        this.org = res["organization"];
        this.trn('name', "name");
        this.tryn('desc', "description");
        this.tryin('pfi', 'profile_image_url');
        this.tw = res["twitter_screen_name"];
        this.linkedin = res["linkedin_id"];
        this.fb = res["facebook_id"];
        this.github = res["github_login_name"];
        console.log(this.tw + this.linkedin + this.fb + this.github);
        var ctw = this.tw;
        var cfb = this.fb;
        var cli = this.linkedin;
        var cgithub = this.github;
        if (ctw == null || ctw == "") {
          console.log("null tw");
        } else {
          this.FTW = 1;
        }
        if (cgithub == null || cgithub == "") {
          console.log("null github");
        } else {
          this.Fgi= 1;
        }
        if (cli) {
          this.FLi = 1;
        }
        if (cfb) {
          this.FFB = 1;
        }
        this.tw = 'https://twitter.com/' + ctw;
        this.fb = 'https://facebook.com/' + cfb;
        this.github = 'https://github.com/' + cgithub;
        this.linkedin = 'https://linkedin.com/' + cli;
        console.log(this.tw);
        console.log(this.fb);
        console.log(this.github);
        console.log(this.linkedin);
      });
  }

  tryin(an, rn) {
    try {
      this.pfi = this.resp[rn];
  //    console.log(tgaf);
      console.log(rn);
    } catch (err) {
      an = "この項目はユーザーが設定していません。";
      console.log(err);
    }
  }
  tryn(an, rn) {
    try {
      this.desc = this.resp[rn];
  //    console.log(tgaf);
      console.log(rn);
    } catch (err) {
      an = "この項目はユーザーが設定していません。";
      console.log(err);
    }
  }
  trn(an, rn) {
    try {
      this.name = this.resp[rn];
  //    console.log(tgaf);
      console.log(rn);
    } catch (err) {
      an = "この項目はユーザーが設定していません。";
      console.log(err);
    }
  }
  golink(m) {
    console.log(m);
    if (m == "G") {
      window.open(this.github, '_system');
    } else if (m == "T") {
      window.open(this.tw, '_system');
    } else if (m == 'L') {
      window.open(this.linkedin, '_system');
    } else if (m == "F") {
      window.open(this.fb, '_system');
    } else {

    }
  }
}